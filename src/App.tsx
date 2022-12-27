import React from 'react';
import './App.css';

function App() {
  return (
    <div>
      <AppTitle />
      <Rating />
      <Accordion />
      <Rating />

    </div>
  );
}

function AppTitle() {
  return <>This is App component</>
  }

function Star() {
  return (
    <div>star</div>
  )
}

function Rating() {
  return (
    <div>
      <Star />
      <Star />
      <Star />
      <Star />
      <Star />
    </div>
  );
}

function AccordionTitle() {
  return <h3>Menu</h3>
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

function Accordion() {
  return (
    <div>
      <AccordionTitle />
      <AccordionBody />
    </div>
  );
}

export default App;
