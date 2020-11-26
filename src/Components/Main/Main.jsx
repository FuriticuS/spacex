import React from 'react';
import {block} from 'bem-cn';
import Header from "../Header/Header";
import Travel from "../Travel/Travel";

import './main.scss';

const cn = block('main');

const Main = () => {
    return (
        <div className={cn()}>
            <Header/>
            <Travel />
        </div>
    );
};

export default Main;
