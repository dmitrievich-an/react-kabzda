import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import {OnOffMe} from "./components/OnOff-Me/OnOffMe";
import {OnOffDimych} from "./components/OnOffDimych/OnOffDimych";
import {UnControlledAccordion} from "./components/UnControlledAccordion/UnControlledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";


function App() {
  return (
    <div className="App">
      <PageTitle title={"This is App component"}/>
      Article 1
      <Rating value={3}/>
      <Accordion titleValue={"Main menu"} collapsed={true}/>
      <Accordion titleValue={"Users"} collapsed={false}/>
      Article 2
      <Rating value={0}/>
      <Rating value={1}/>
      <Rating value={2}/>
      <Rating value={3}/>
      <Rating value={4}/>
      <Rating value={5}/>
      HomeWork 2
      {/*<OnOffMe isActive={true}/>*/}
      {/*<OnOffMe isActive={false}/>*/}
      <OnOffDimych/>
      <OnOffDimych/>
      HomeWork 3
      <UnControlledAccordion titleValue={"Main menu"}/>
      <UnControlledAccordion titleValue={"Users"}/>
      <UncontrolledRating/>
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
