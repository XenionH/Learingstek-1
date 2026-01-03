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
      <h5>PROFESSOR TANGSALAT</h5> <br />
      I gør det helt fantastisk, mine små
      krabber! Vi bygger videre på <Bold_Text boldText="BOOLEANS" />: nu skal i
      høre om <Bold_Text boldText="IF-STATEMENTS" />.
      <br />
      Et <Bold_Text boldText="IF-STATEMENT" />
      bruger vi når vi vil tjekke om ”noget er sandt”. <Bold_Text boldText="Hvis" /> det vi påstår ER sandt
      - <Bold_Text boldText="så" /> sker der mere. Og hvis det vi siger IKKE er sandt...ja så sker der bare ingenting.
    </div >
  );
};

export default Teori_If;
