import React from 'react';
import {block} from 'bem-cn';
import {NavLink} from "react-router-dom";

import './travel.scss';

const cn = block('travel');

const Travel = () => {
    return (
        <div className={cn()}>

            <div className="container p-0">

                <div className="row m-0 p-0">

                    <div className={cn('planet p-0 col-lg-4 col-md-4 col-sm-12 col-12')}>
                        <NavLink className={cn("logo-link")} to='/'>
                            Начать путешествие
                            <div className="a a2"></div>
                            <div className="a a4"></div>
                        </NavLink>


                    </div>

                    <div className={cn('stock p-0 offset-lg-2 offset-md-2 col-lg-6 col-md-6 col-sm-12 col-12')}>

                        <div className="stocks-prospect">
                            <div className='prospectus'>
                                <h5 className='props-top'>мы</h5>
                                <p>1</p>
                                <h5 className='props-bottom'>на рынке</h5>
                            </div>
                            <div className='prospectus'>
                                <h5 className='props-top'>гарантируем</h5>
                                <p>50%</p>
                                <h5 className='props-bottom'>безопасность</h5>
                            </div>
                            <div className='prospectus'>
                                <h5 className='props-top'>календарик за</h5>
                                <p>2001г.</p>
                                <h5 className='props-bottom'>в подарок</h5>
                            </div>
                            <div className='prospectus'>
                                <h5 className='props-top'>путешествие</h5>
                                <p>597</p>
                                <h5 className='props-bottom'>дней</h5>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Travel;
