import React, {useState} from 'react';

type OnOffDimychPropsType = {
  run: boolean
  onClick: (value: boolean) => void
}

export const OnOffDimych = (props: OnOffDimychPropsType) => {

  // const [on, setOn] = useState(false)

  const onStyle = {
    width: "30px",
    height: "20px",
    border: "1px solid black",
    display: "inline-block",
    padding: "2px",
    backgroundColor: props.run ? "green" : "white",
    cursor: "pointer",

  };
  const offStyle = {
    width: "30px",
    height: "20px",
    border: "1px solid black",
    display: "inline-block",
    marginLeft: "5px",
    padding: "2px",
    backgroundColor: !props.run ? "red" : "white",
    cursor: "pointer",

  };
  const indicatorStyle = {
    width: "10px",
    height: "10px",
    borderRadius: "50%",
    border: "1px solid black",
    display: "inline-block",
    marginLeft: "5px",
    backgroundColor: props.run ? "green" : "red",

  };

  const onClicked = () => props.onClick(true);
  const offClicked = () => props.onClick(false);

  return (
    <div>
      <div style={onStyle} onClick={onClicked}>On</div>
      <div style={offStyle} onClick={offClicked}>Off</div>
      <div style={indicatorStyle}></div>
    </div>
  );
};
