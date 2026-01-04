import Outro from "../assets/Sounds/Outro_speak_01.mp3";
import IntroMision from "../assets/Sounds/Intro_fælles_02.mp3";
import Mission1 from "../assets/Sounds/Mission1_fælles_02.mp3";
import Mission2 from "../assets/Sounds/Mission2_fælles_02.mp3";
import Mission3 from "../assets/Sounds/Mission3_fælles_02.mp3";
import Prof1 from "../assets/Sounds/ProfTangsalat_integers_02.mp3";
import Prof2 from "../assets/Sounds/ProfTangsalat_bools_02.mp3";
import Prof3 from "../assets/Sounds/ProfTangsalat_if-statements_02.mp3";
import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { Button } from "react-bootstrap";

function Speak() {
  const location = useLocation();

  const [currentSoundIndex, setCurrentSoundIndex] = useState(0);
  const audioRef = useRef(
    new Audio(
      [
        "null",
        IntroMision,
        Prof1,
        Prof2,
        Prof3,
        Mission1,
        Mission2,
        Mission3,
        Outro,
      ][currentSoundIndex]
    )
  );
  useEffect(() => {
    handlePlay();
  }, [currentSoundIndex]);
  const sounds = [
    "null",
    IntroMision,
    Prof1,
    Prof2,
    Prof3,
    Mission1,
    Mission2,
    Mission3,
    Outro,
  ];

  const handlePlay = () => {
    audioRef.current.play().catch((err: any) => {
      console.warn("Kan ikke afspille før brugeren interagerer:", err);
    });
  };

  const handleSwitchSound = () => {
    // Skift til næste lyd i arrayet
    switch (location.pathname) {
      case "/Teori":
      case "/Teori/Int": {
        const newAudioRef = new Audio(sounds[2]);
        if (audioRef.current.src !== newAudioRef.src) {
          setCurrentSoundIndex(2);
          audioRef.current.src = sounds[2];
        }
        break;
      }

      case "/Teori/Bool": {
        const newAudioRef = new Audio(sounds[3]);
        if (audioRef.current.src !== newAudioRef.src) {
          setCurrentSoundIndex(3);
          audioRef.current.src = sounds[3];
        }
        break;
      }
      case "/Teori/If": {
        const newAudioRef = new Audio(sounds[4]);
        if (audioRef.current.src !== newAudioRef.src) {
          setCurrentSoundIndex(4);
          audioRef.current.src = sounds[4];
        }
        break;
      }
      case "/Historie": {
        const newAudioRef = new Audio(sounds[1]);
        if (audioRef.current.src !== newAudioRef.src) {
          setCurrentSoundIndex(1);
          audioRef.current.src = sounds[1];
        }
        break;
      }
      case "/Opgaver/Int": {
        const newAudioRef = new Audio(sounds[5]);
        if (audioRef.current.src !== newAudioRef.src) {
          setCurrentSoundIndex(5);
          audioRef.current.src = sounds[5];
        }
        break;
      }
      case "/Opgaver/Bool": {
        const newAudioRef = new Audio(sounds[6]);
        if (audioRef.current.src !== newAudioRef.src) {
          setCurrentSoundIndex(6);
          audioRef.current.src = sounds[6];
        }
        break;
      }
      case "/Opgaver/If": {
        const newAudioRef = new Audio(sounds[7]);
        if (audioRef.current.src !== newAudioRef.src) {
          setCurrentSoundIndex(7);
          audioRef.current.src = sounds[7];
        }
        break;
      }
      case "/Outro": {
        const newAudioRef = new Audio(sounds[8]);
        if (audioRef.current.src !== newAudioRef.src) {
          setCurrentSoundIndex(8);
          audioRef.current.src = sounds[8];
        }
        break;
      }
    }
  };
  return (
    <div>
      <Button
        variant="secondary"
        onClick={handleSwitchSound}
        style={{
          display: "block",
          position: "absolute",
          top: 0,
          right: 0,
          margin: "25px",
          zIndex: "1",
        }}
      >
        <span style={{ pointerEvents: "none" }}>&#128266;</span>
      </Button>
    </div>
  );
}

export default Speak;
