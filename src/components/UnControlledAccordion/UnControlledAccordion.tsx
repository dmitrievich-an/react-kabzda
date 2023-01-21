import React, {useState} from "react";

const h3Style = {
  display: "inline-block",
  marginRight: "5px",
}

type UnControlledAccordionPropsType = {
  titleValue: string
}

function AccordionTitle(props: UnControlledAccordionPropsType) {
  return <h3 style={h3Style}>-- {props.titleValue} --</h3>
}

function AccordionBody() {
  return (
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
  )
}

export function UnControlledAccordion(props: UnControlledAccordionPropsType) {

  const [collapsed, setCollapsed] = useState(true);
  
  const curtailList = () => {
    setCollapsed(!collapsed)
  }

  return (
    <div>
      <AccordionTitle titleValue={props.titleValue}/><button onClick={curtailList}>+</button>
      {!collapsed && <AccordionBody/>}
    </div>
  )
}