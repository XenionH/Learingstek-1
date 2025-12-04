import { type ReactNode } from "react";

interface ContentAreaProps {
  version?: 0 | 1 | 2;
  children: ReactNode;
}

function ContentArea({ version, children }: ContentAreaProps) {
  switch (version) {
    case 1:
      return <div>ContentArea</div>;

    case 2:
      return <div>ContentArea</div>;

    case 0:
    default:
      return (
        <div
          style={{
            position: "relative",
            display: "block",
            background: "rgba(255, 255, 255, 0.8)",
            width: "66%",
            border: "black, solid, 3px",
            borderRadius: "40px",
            padding: "20px",
            minHeight: "70vh",
            margin: "20px",
          }}
        >
          {children}
        </div>
      );
  }
}
export default ContentArea;
