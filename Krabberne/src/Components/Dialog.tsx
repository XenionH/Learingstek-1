interface DialogProps {
  index?: number;
}

function Dialog({ index }: DialogProps) {
  return <div style={{ textAlign: "center" }}>Dialog: {index}</div>;
}

export default Dialog;
