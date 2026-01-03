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
        Nu skal I lære en ny slags <Bold_Text boldText="VARIABEL" />:{" "}
        <Bold_Text boldText="BOOLEAN" />. Superseje krabber kalder den bare for{" "}
        <Bold_Text boldText="BOOL" />.
      </p>
      <p>
        {" "}
        Hvor <Bold_Text boldText="integers" /> gemmer tal, så gemmer en{" "}
        <Bold_Text boldText="BOOL" /> noget helt andet: nemlig om noget er{" "}
        <Bold_Text boldText="sandt" /> eller <Bold_Text boldText="falsk" />. Det
        vigtige er; en <Bold_Text boldText="BOOL" /> kan kun være enten{" "}
        <Bold_Text boldText="sandt" /> eller <Bold_Text boldText="falsk" />.
      </p>
    </div>
  );
};

export default Teori_Bool;
