import { useState } from "react";
import Dialog from "./Dialog";
import Picture from "./Picture";
import { Button } from "react-bootstrap";

/*type story
{

}*/

const StoryTeller = () => {
  const [index, setIndex] = useState(0);

  const textList = ["hey", "I", "am", "here"];

  function changeIndex(newIndex: number) {
    if (newIndex < 0) {
      newIndex = 0;
    }
    if (newIndex > textList.length - 1) {
      newIndex = textList.length - 1;
    }
    setIndex(newIndex);
  }

  return (
    <div>
      <Picture index={index} />
      <Dialog index={index} />
      {index !== 0 && (
        <Button
          variant="primary"
          style={{
            position: "absolute",
            left: "0px",
            bottom: "0px",
            margin: "25px",
          }}
          onClick={() => changeIndex(index - 1)}
        >
          Back
        </Button>
      )}
      {index !== textList.length - 1 && (
        <Button
          variant="primary"
          style={{
            position: "absolute",
            right: "0px",
            bottom: "0px",
            margin: "25px",
          }}
          onClick={() => changeIndex(index + 1)}
        >
          Next
        </Button>
      )}
    </div>
  );
};

export default StoryTeller;
