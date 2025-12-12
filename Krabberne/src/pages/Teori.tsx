import SideBar from "../Components/SideBar";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import ContentArea from "../Components/ContentArea";
import { Outlet, useLocation, Link } from "react-router-dom";
import { useRef } from "react";
import IntVoiceOver from "../assets/Sounds/ProfTangsalat_integers_02.mp3";
import BoolVoiceOver from "../assets/Sounds/ProfTangsalat_bools_01.mp3";
import IfVoiceOver from "../assets/Sounds/ProfTangsalat_ifstatements_01.mp3";
import Prof from "../assets/Images/Tangsalat_color_01.jpg";
import Speak from "../Components/Speak";

function getDestination() {
  switch (location.pathname) {
    case "/Teori/Int":
    case "/Teori":
      return "Int";
    case "/Teori/Bool":
      return "Bool";
    case "/Teori/If":
      return "If";
  }
}

export function Teori() {
  const location = useLocation();

  const [currentSoundIndex, setCurrentSoundIndex] = useState(0);
  const audioRef = useRef(
    new Audio([, IntVoiceOver, BoolVoiceOver, IfVoiceOver][currentSoundIndex])
  );
  useEffect(() => {
    handlePlay();
  }, [currentSoundIndex]);
  const sounds = [IntVoiceOver, IntVoiceOver, BoolVoiceOver, IfVoiceOver];

  const handlePlay = () => {
    audioRef.current.play().catch((err: any) => {
      console.warn("Kan ikke afspille før brugeren interagerer:", err);
    });
  };

  const handleSwitchSound = () => {
    // Skift til næste lyd i arrayet
    if (location.pathname === "/Teori/Int") {
      const newAudioRef = new Audio(sounds[1]);
      if (audioRef.current.src !== newAudioRef.src) {
        setCurrentSoundIndex(1);
        audioRef.current.src = sounds[1];
      }
    } else if (location.pathname === "/Teori/Bool") {
      const newAudioRef = new Audio(sounds[2]);
      if (audioRef.current.src !== newAudioRef.src) {
        setCurrentSoundIndex(2);
        audioRef.current.src = sounds[2];
      }
    } else if (location.pathname === "/Teori/If") {
      const newAudioRef = new Audio(sounds[3]);
      if (audioRef.current.src !== newAudioRef.src) {
        setCurrentSoundIndex(3);
        audioRef.current.src = sounds[3];
      }
    }
  };

  let itemCategories: string[] = ["categories"];
  let items1 = ["Int", "Bool", "If"];
  //let items2 = ["If", "If-else"];
  const [dataFromSideNav, setDataFromSideNav] = React.useState("");

  function handleData(data: any) {
    setDataFromSideNav(data);
    console.log("Data received from SideNav:", data);
  }

  return (
    <>
      <SideBar
        withSideNav={true}
        sideNavItemCategories={itemCategories}
        sideNavItems={[items1]}
        dropdown={false}
        sendDataFromSideNav={handleData}
      />
      <section style={{ display: "flex" }}>
        <ContentArea version={0}>
          <Speak />
          <Outlet />
          <Link to={`/Historie/${getDestination()}`}>
            <Button
              variant="secondary"
              style={{
                display: "block",
                position: "absolute",
                bottom: 0,
                right: 0,
                margin: "25px",
              }}
            >
              Til historien
            </Button>
          </Link>
        </ContentArea>
        <ContentArea version={1}>
          <img src={Prof} />
        </ContentArea>
      </section>
    </>
  );
}
