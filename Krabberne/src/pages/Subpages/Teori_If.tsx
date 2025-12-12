import Bold_Text from "../../Components/Bold_Text";

const Teori_If = () => {
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
      <h5>PROFESSOR TANGSALAT</h5> <br />I gør det helt fantastisk, mine små
      krabber! Vi bygger videre på <Bold_Text boldText="booleans" />: nu skal i
      høre om <Bold_Text boldText="if-statements" />.
      <br />
      Et <Bold_Text boldText="if-statement " />
      bruger vi når vi vil tjekke om ”noget er sandt”. Hvis det vi siger er
      sandt - så sker der mere. Og hvis det vi siger ikke er sandt, ja så sker
      der bare ingenting.
      <br />
      <br />
      Forestil jer at I smutter ud i krabbekøkkenet og leder efter snacks. I
      tjekker med jer selv: <br /> <br />
      <p style={{ marginLeft: "50px" }}>
        <span style={{ fontStyle: "italic" }}>
          “Hvis der ikke er flere havsaltstænger tilbage...” <br />-{">"}
          <br />
          “så tager jeg bare plankton-chips i stedet!”
        </span>
      </p>
    </div>
  );
};

export default Teori_If;
