import React from 'react';
import {block} from 'bem-cn';

import './otherpages.scss';
import Header from "../Header/Header";

const cn = block('otherpages');

const OtherPages = ({text}) => {
    return (
        <div className={cn()}>
            <Header/>
            <h1>{text}</h1>
        </div>
    );
};

export default OtherPages;
