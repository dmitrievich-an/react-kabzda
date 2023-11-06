import React from "react";

type AccordionPropsType = {
  titleValue: string,
  collapsed: boolean
}

export function Accordion(props: AccordionPropsType) {
  if (props.collapsed) {
    return <AccordionTitle title={props.titleValue}/>
  }
  return (
    <div>
      <AccordionTitle title={props.titleValue}/>
      <AccordionBody/>
    </div>
  )
}

type AccordionTitlePropsType = {
  title: string
}

function AccordionTitle(props: AccordionTitlePropsType) {
  return <h1>--- {props.title} ---</h1>
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
