import Bold_Text from "../../Components/Bold_Text";

const Teori_Bool = () => {
  return (
    <div
      style={{
        fontSize: "21px",
        position: "relative",
        display: "block",
        margin: "10px",
        paddingBottom: "40px",
      }}
    >
      <h5>PROFESSOR TANGSALAT</h5>
      <br />
      <p>
        {" "}
        Milde makrel i er gode til <Bold_Text boldText="integers" />, mine små
        krabber! Nu skal I lære en ny slags variabel:{" "}
        <Bold_Text boldText="boolean" />. Superseje krabber kalder den bare for{" "}
        <Bold_Text boldText="bool" />.
      </p>
      <p>
        {" "}
        Hvor <Bold_Text boldText="integers" /> gemmer tal, så gemmer en{" "}
        <Bold_Text boldText="bool" /> noget helt andet: nemlig om noget er{" "}
        <Bold_Text boldText="sandt" /> eller <Bold_Text boldText="falsk" />. Det
        vigtige er; en <Bold_Text boldText="bool" /> kan kun være enten{" "}
        <Bold_Text boldText="sandt" /> eller <Bold_Text boldText="falsk" />.
      </p>{" "}
      <p>
        Prøv at sig højt til jer selv: ”jeg har stadig mine krabbemælketænder”.
        Det kan i kun svare enten ja (det er <Bold_Text boldText="sandt" />
        ), eller nej (det er <Bold_Text boldText="falsk" />) til. Bum! I har
        lige brugt en <Bold_Text boldText="bool-variabel" />.
      </p>
    </div>
  );
};

export default Teori_Bool;
