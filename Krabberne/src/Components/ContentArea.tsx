import { type ReactNode } from "react";

interface ContentAreaProps {
  version?: 0 | 1 | 2 | 3;
  children: ReactNode;
}

function ContentArea({ version, children }: ContentAreaProps) {
  switch (version) {
    case 1:
      return (
        <div>
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
        </div>
      );
    case 3:
      return (
        <div>
          <div
            style={{
              position: "relative",
              display: "block",
              float: "right",
              background: "rgba(255, 255, 255, 1)",
              border: "black, solid, 3px",
              fontSize: "20px",
              textAlign: "center",
              borderRadius: "10px",
              padding: "2px",
              marginTop: "30px",
              maxHeight: "80vh",
              maxWidth: "180px",
              flexShrink: "1",
            }}
          >
            {children}
          </div>
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
            width: "66%",
            minWidth: "100px",
            border: "black, solid, 3px",
            borderRadius: "40px",
            padding: "20px 40px 20px 20px",
            minHeight: "70vh",
            marginTop: "30px",
            flexShrink: "3",
          }}
        >
          {children}
        </div>
      );
  }
}
export default ContentArea;
