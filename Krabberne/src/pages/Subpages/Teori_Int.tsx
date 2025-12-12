import Bold_Text from "../../Components/Bold_Text";

function Teori_Int() {
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
      <p>PROFESSOR TANGSALAT</p>
      <p>
        Er i klar til at kode, små krabber?
        <br />
        <br />
        Først skal i høre om det helt grundlæggende: nemlig{" "}
        <Bold_Text boldText="variabler" />. Nej nej, ikke vabler –{" "}
        <Bold_Text boldText="variabler" />.
        <br />
        <br />
        <Bold_Text boldText="Variabler" /> er som små skattekister vi kan gemme
        ting i. Ligesom jeres skoletasker gemmer på alle jeres vigtige bøger og
        torskerognsmadder, så i kan finde dem frem igen senere.
        <br />
        <br />
        Den allerførste <Bold_Text boldText="variabel" /> i skal kende kalder vi{" "}
        <Bold_Text boldText="integer" />. De seje krabber kalder den også bare{" "}
        <Bold_Text boldText="int" />. Den kiste gemmer på helt almindelige tal -
        i ved, som 3, eller 12.
      </p>
    </div>
  );
}

export default Teori_Int;
