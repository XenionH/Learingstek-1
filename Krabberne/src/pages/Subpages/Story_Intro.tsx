const Story_Intro = () => {
  const style = { fontSize: "20px", fontStyle: "italic" };
  return (
    <div>
      <h5>SIGNAL-JEPPE</h5>{" "}
      <p style={style}>
        "Karla... Karla, kan du høre mig? Jeg har gode nyheder! Der skal være stor fest i aften... på Sandslottet!"

      </p>
      <h5> KARLA KRABBE </h5>
      <p style={style}>"Sandslottet ? !Det store palads ude ved revet ? !"</p>

      <h5>SIGNAL-JEPPE </h5>
      <p style={style}>
        "Jaa! Men vi har et problem. Den sure blæksprutte Otto spærrer for Planktonbroen,
        over til slottet. Og jeg hørte også man kun bliver lukket ind på slottet, hvis man har ordentligt kluns på."
      </p>
      <h5>KARLA KRABBE</h5>{" "}
      <p style={style}>
        "Aaah, det’ ingen sag for os! Jeppe... vi er dem der er svømmet!"
      </p>
    </div>
  );
};

export default Story_Intro;
