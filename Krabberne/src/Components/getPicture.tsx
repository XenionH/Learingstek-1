import Karla from "../Assets/Images/Karla_color_01.jpg";
import Jeppe from "../Assets/Images/Jeppe_color_01.jpg";
import Otto from "../Assets/Images/Otto_color_01.jpg";
import Kisten from "../Assets/Images/Kisten_color_01.jpg";

export function getPicture() {
    switch (location.pathname) {
        case "/Historie":
            return (
                <div>
                    <div>
                        <p>KARLA KRABBE</p>
                        <img src={Karla} style={{ borderRadius: "20px", margin: 0 }} />
                    </div>
                    <div style={{ border: "20" }}>
                        <p>SIGNAL-JEPPE</p>
                        <br />
                        <img src={Jeppe} style={{ borderRadius: "20px" }} />
                    </div>
                </div>
            );
        case "/Opgaver":
        case "/Opgaver/Int":
            return (
                <div style={{ display: "flex", gap: "10px", textAlign: "center" }}>
                    <div>
                        <p>KARLA KRABBE</p><br />
                        <img src={Karla} style={{ borderRadius: "20px", margin: 0 }} />
                    </div>
                    <div style={{ border: "20" }}>
                        <p>SIGNAL-JEPPE</p>
                        <br />
                        <img src={Jeppe} style={{ borderRadius: "20px" }} />
                    </div>
                    <div>
                        <p>OTTO</p>
                        <br />
                        < img src={Otto} style={{ borderRadius: "20px" }} />
                    </div>
                </div >
            );
        case "/Opgaver/Bool":
            return (
                <div style={{ display: "flex", gap: "10px", textAlign: "center" }}>
                    <div>
                        <p>KARLA KRABBE</p><br />
                        <img src={Karla} style={{ borderRadius: "20px", margin: 0 }} />
                    </div>
                    <div style={{ border: "20" }}>
                        <p>SIGNAL-JEPPE</p>
                        <br />
                        <img src={Jeppe} style={{ borderRadius: "20px" }} />
                    </div>
                    <div>
                        <p>KISTEN</p>
                        <br />
                        <img src={Kisten} style={{ borderRadius: "20px" }} />
                    </div>
                </div>
            );
        case "/Opgaver/If":
            return (
                <div style={{ display: "flex", gap: "10px", textAlign: "center" }}>
                    <div >
                        <p>KARLA KRABBE</p>
                        <br />
                        <img src={Karla} style={{ borderRadius: "20px", margin: 0 }} />
                    </div>
                    <div style={{ border: "20" }}>
                        <p>SIGNAL-JEPPE</p>
                        <br />
                        <img src={Jeppe} style={{ borderRadius: "20px" }} />
                    </div>
                </div>
            );
    }
}