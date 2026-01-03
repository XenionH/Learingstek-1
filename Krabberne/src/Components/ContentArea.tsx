import { type ReactNode } from "react";

interface ContentAreaProps {
  version?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
  children: ReactNode;
}

function ContentArea({ version, children }: ContentAreaProps) {
  switch (version) {
    case 1:
      return (
        <div
          style={{
            position: "relative",
            display: "block",
            background: "rgba(255, 255, 255, 0.8)",
            border: "black, solid, 3px",
            borderRadius: "10px",
            padding: "2px",
            margin: "60px",
            maxWidth: "300px",
            maxHeight: "80vh",
            flexShrink: "1",
          }}
        >
          {children}
        </div>
      );
    case 3:
      return (
        <div
          style={{
            position: "relative",
            display: "block",
            float: "right",
            background: "rgba(255, 253, 150, 1)",
            border: "black, solid, 3px",
            fontSize: "20px",
            textAlign: "center",
            borderRadius: "10px",
            margin: "20px",
            marginLeft: "25px",
            padding: "2px",
            maxHeight: "80vh",
            maxWidth: "240px",
            flexShrink: "1",
          }}
        >
          {children}
        </div>
      );
    case 2:
      return (
        <div
          style={{
            position: "relative",
            display: "block",
            background: "rgba(255, 255, 255, 0.8)",
            width: "80%",
            minWidth: "100px",
            border: "black, solid, 3px",
            borderRadius: "40px",
            padding: "20px",
            minHeight: "75vh",
            margin: "20px",
            flexShrink: "3",
            fontSize: "24px"
          }}
        >
          {children}
        </div>
      );
    case 0:
    default:
      return (
        <div
          style={{
            position: "relative",
            display: "block",
            background: "rgba(255, 255, 255, 0.8)",
            width: "55%",
            minWidth: "100px",
            border: "black, solid, 3px",
            borderRadius: "40px",
            padding: "10px",
            minHeight: "30vh",
            flexShrink: "3",
          }}
        >
          {children}
        </div>
      );
    case 4:
      return (
        <div
          style={{
            position: "relative",
            display: "block",
            float: "right",
            background: "rgba(255, 255, 255, 1)",
            border: "black, solid, 3px",
            fontSize: "16px",
            textAlign: "center",
            borderRadius: "14px",
            minHeight: "40vh",
            maxHeight: "90vh",
            maxWidth: "260px",
            flexShrink: "1",
            padding: "20px 2px",
          }}
        >
          {children}
        </div>
      );
    case 5:
      return (

        <div
          style={{
            position: "relative",
            display: "block",
            background: "rgba(255, 255, 255, 0.8)",
            maxWidth: "800px",
            minWidth: "400px",
            border: "black, solid, 3px",
            borderRadius: "40px",
            padding: "10px",
            minHeight: "20vh",
            flex: "1 1 auto",
            float: "left",
          }}
        >
          {children}
        </div>

      );
    case 6:
      return (
        <div
          style={{
            position: "relative",
            display: "block",
            background: "rgba(255, 255, 255, 0.8)",
            minWidth: "300px",
            border: "black, solid, 3px",
            borderRadius: "40px",
            padding: "10px 10px 10px 10px",
            maxHeight: "50vh",
            maxWidth: "400px",
            flexGrow: "10"
          }}
        >
          {children}
        </div>

      );
  }
}
export default ContentArea;
