import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {OnOffMe} from "./components/OnOff-Me/OnOffMe";
import {OnOffDimych} from "./components/OnOffDimych/OnOffDimych";
import {UnControlledAccordion} from "./components/UnControlledAccordion/UnControlledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";


function App() {

  const [ratingValue, setRatingValue] = useState<RatingValueType>(0)
  const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>
  (false)
  const [run, setRun] = useState<boolean>(false)

  return (
    <div className="App">
      <PageTitle title={"This is App component"}/>
      Article 1
      {/*<Rating value={3}/>*/}
      <Accordion titleValue={"Main menu"} collapsed={accordionCollapsed} onChange={() => setAccordionCollapsed(!accordionCollapsed)}/>
      <Accordion titleValue={"Users"} collapsed={accordionCollapsed} onChange={() => setAccordionCollapsed(!accordionCollapsed)}/>
      Article 2
      <br/>
      {/*<Rating value={0}/>*/}
      {/*<Rating value={1}/>*/}
      {/*<Rating value={2}/>*/}
      {/*<Rating value={3}/>*/}
      {/*<Rating value={4}/>*/}
      {/*<Rating value={5}/>*/}
      HomeWork 2
      {/*<OnOffMe isActive={true}/>*/}
      {/*<OnOffMe isActive={false}/>*/}
      <OnOffDimych run={run} onClick={setRun}/>
      <OnOffDimych run={run} onClick={setRun}/>
      HomeWork 3
      <UnControlledAccordion titleValue={"Main menu"} onClick={() => {}}/>
      <UnControlledAccordion titleValue={"Users"} onClick={() => {}}/>
      <UncontrolledRating/>
      HomeWork 4
      <Rating value={ratingValue}
              onClick={setRatingValue}/>
    </div>
  );
}

type PageTitlePropsType = {
  title: string
}
function PageTitle(props: PageTitlePropsType) {
  return <h1>{ props.title }</h1>
  }

export default App;
