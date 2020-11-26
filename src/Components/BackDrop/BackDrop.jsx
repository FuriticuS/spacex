import React from 'react';
import {block} from 'bem-cn';
import './BackDrop.scss'

const cn = block('backdrop');

const BackDrop = ({onClick}) => {
    return (
        <div className={cn()} onClick={onClick}> </div>
    );
};

export default BackDrop;
