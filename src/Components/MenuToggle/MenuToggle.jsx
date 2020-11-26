import React from 'react';

import './MenuToggle.scss';

const MenuToggle = ({onToggle, isOpen}) => {

    const cls = [
        'menu-toggle',
        'fa'
    ]

    // проверка какую иконку добавить в класс для отображения - если тру то крестик
    isOpen ? cls.push('fa-times', 'open') : cls.push('fa-bars')

    return (
        <i
            className={cls.join(' ')}
            onClick={onToggle}
        >
        </i>
    );
};

export default MenuToggle;
