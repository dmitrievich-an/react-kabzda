import React from 'react';

type AccordionPropsType = {
    title: string,
    collapsed: boolean,
}

export const Accordion = ({ title, collapsed }: AccordionPropsType) => {

        return (
            <>
                <AccordionTitle title={ title } />
                { !collapsed && <AccordionBody /> }
            </>
        );
};

type AccordionTitlePropsType = {
    title: string,
}

const AccordionTitle = ({ title }: AccordionTitlePropsType) => <h3>-- { title } --</h3>


const AccordionBody = () => {
        return (
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        );
};