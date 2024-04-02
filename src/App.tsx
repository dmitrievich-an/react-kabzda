import React from 'react';
import './App.css';
import { Rating } from "./components/Rating/Rating";
import { Accordion } from "./components/Accordion/Accordion";
import { Switch } from './components/Switch/Switch';

function App() {
    return (
        <div className="App">
            <PageTitle title={ "This is AppComponent" } />
            <Rating value={ 0 } />
            <Rating value={ 1 } />
            <Rating value={ 2 } />
            <Rating value={ 3 } />
            <Rating value={ 4 } />
            <Rating value={ 5 } />
            <PageTitle title={ "This is MenuComponent" } />
            <Accordion title={ "Menu" } collapsed={ false } />
            <Accordion title={ "Users" } collapsed={ true } />
            <Switch included={true}/>
            <Switch included={false}/>
        </div>
    );
}

type PageTitlePropsType = {
    title: string,
}

const PageTitle = ({ title }: PageTitlePropsType) => {
    return (
        <h1>{ title }</h1>
    )
}

export default App;