import React from "react";

interface BoldTextProps {
  boldText: string;
}

function Bold_Text({ boldText }: BoldTextProps) {
  return <strong style={{ fontWeight: "bolder" }}>{boldText}</strong>;
}

export default Bold_Text;
