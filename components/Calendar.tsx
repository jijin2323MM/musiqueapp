import React, { useRef, useState } from 'react';

const musique1 = require('../assets/music/musiqufe2.mp3');
const musique2 = require('../assets/music/musiqufe3.mp3');
const musique3 = require('../assets/music/musiqufe4.mp3');
const musique4 = require('../assets/music/musiqufe5.mp3');
const musique5 = require('../assets/music/musiqufe6.mp3');
const musique6 = require('../assets/music/musiqufe7.mp3');
const musique7 = require('../assets/music/musiqufe8.mp3');
const musique8 = require('../assets/music/musiqufe9.mp3');
const musique9 = require('../assets/music/musiqufe10.mp3');
const musique10= require( '../assets/music/musiqufe11.mp3');
const musique11= require( '../assets/music/musiqufe12.mp3');
const musique12= require( '../assets/music/musiqufe13.mp3');
const musique13= require( '../assets/music/musiqufe14.mp3');
const musique14= require( '../assets/music/musiqufe15.mp3');
const musique15= require( '../assets/music/musiqufe16.mp3');
const musique16= require( '../assets/music/musiqufe17.mp3');
const musique17= require( '../assets/music/musiqufe18.mp3');
const musique18= require( '../assets/music/musiqufe19.mp3');
const musique19= require( '../assets/music/musiqufe20.mp3');
const musique20= require( '../assets/music/musiqufe21.mp3');
const musique21= require( '../assets/music/musiqufe22.mp3');
const musique22= require( '../assets/music/musiqufe23.mp3');
const musique23= require( '../assets/music/musiqufe24.mp3');
const musique24= require( '../assets/music/musiqufe25.mp3');

const Calendar: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false); // État pour savoir si la musique est en cours de lecture
  const [isNewcase, setNewcase] = useState<number | null>(null);
  const [showImage, setShowImage] = useState(false); // Nouveau state pour gérer l'affichage de l'image

  // Créez un tableau pour associer les musiques aux numéros
  const musiques: string[] = [
    musique17, musique5, musique8, musique1, musique12,
    musique9, musique6, musique23, musique2, musique4,
    musique11, musique15, musique24, musique13, musique10,
    musique22, musique20, musique16, musique18, musique21,
    musique7, musique14, musique3, musique19
  ];

  // Récupérer la date actuelle
  const today = new Date();
  const currentDate = today.getDate(); // Le jour du mois (1-31)

  // Vérifier si la date actuelle est le 3 décembre
  const accessibleMusiques = musiques.slice(0, currentDate); // Sélectionne jusqu'au jour donné

  const handleClick = (number: number) => {
    if (currentDate === 3 && (number === 1 || number === 2 || number === 3)) {
      if (isNewcase == null) {
        setNewcase(number);
      }

      const musicPath = musiques[number - 1]; // Les indices des tableaux commencent à 0, donc number - 1

      if (audioRef.current) {
        audioRef.current.src = musicPath;

        if (isPlaying && isNewcase === number) {
          audioRef.current.pause();
          setIsPlaying(false); // Mettre l'état à 'false' quand la musique est en pause
        } else {
          audioRef.current.play();
          setIsPlaying(true); // Mettre l'état à 'true' quand la musique joue
        }
        setNewcase(number);
      }
    } else {
      setShowImage(true); // Afficher l'image
      setTimeout(() => {
        setShowImage(false); // Cacher l'image après 3 secondes
      }, 5000); // Effacer l'image après 3 secondes
    }
  };

  return (
    <div className="grid">
      {[...Array(24)].map((_, index) => {
        const number = index + 1;
        return (
          <button
            key={number}
            className={`grid__item grid__item--${number} ${
              number === 1 ? 'grid__item--sun grid__item--lg' : ''
            }`}
            onClick={() => handleClick(number)}
            disabled={currentDate !== 3 && number !== 1 && number !== 2 && number !== 3} // Désactiver les autres cases si ce n'est pas le 3 décembre
          >
            <span className="grid__item-door">{number}</span>
            <span className="grid__item-shadow"></span>
          </button>
        );
      })}

      <audio ref={audioRef} />
    </div>
  );
};

export default Calendar;
