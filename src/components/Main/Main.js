import React from 'react';
import Promo from '../Promo/Promo';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import Portfolio from '../Portfolio/Portfolio';
import Preloader from '../Preloader/Preloader';
import './Main.css';


function Main(props) {

    return (
        <>
            {props.islogOn && <Preloader />}

            {!props.islogOn && (
                <main className="content">
                <Promo />
                <AboutProject />
                <Techs />
                <AboutMe />
                <Portfolio />
            </main>
            )}
        </>
    );
}

export default Main;