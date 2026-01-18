import picture from "../assets/10516317.jpg";

interface PictureProps {
  index?: number;
}

function ChangePic(index?: number) {
  switch (index) {
    case 0:
    case 1:
      return (
        <img
          style={{
            display: "block",
            maxWidth: "1000px",
            maxHeight: "40vh",
            position: "relative",
            marginLeft: "auto",
            marginRight: "auto",
          }}
          src={picture}
        />
      );
    default:
      return <p>No image</p>;
  }
}

function Picture({ index }: PictureProps) {
  return <div style={{ textAlign: "center" }}>{ChangePic(index)}</div>;
}

export default Picture;
