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
        <Bold_Text boldText="VARIABLER" />. Nej nej, ikke vabler –{" "}
        <Bold_Text boldText="VARIABLER" />.
        <br />
        <br />
        <Bold_Text boldText="VARIABLER" /> er som små skattekister vi kan gemme
        ting i.
        <br />
        <br />
        Den allerførste <Bold_Text boldText="VARIABEL" /> i skal kende, kalder vi{" "}
        <Bold_Text boldText="INTEGER" />. De seje krabber kalder den også bare{" "}
        <Bold_Text boldText="INT" />. Den kiste gemmer på helt almindelige tal -
        i ved, som 3, eller 12.
      </p>
    </div>
  );
}

export default Teori_Int;
