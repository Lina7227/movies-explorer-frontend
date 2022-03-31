import React from 'react';
import './Promo.css';
import world from '../../images/world.png';


function Promo() {

    const ref = React.useRef(null);

  function scrollThrough() {
    ref.current.scrollIntoView({ behavior: "smooth" });
  }

    
    

    return (
        <section className="promo">
            <div className="promo__container">
                <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
                <p className="promo__subtitle">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
                <button
                    type="button"
                    aria-label="посмотреть проект"
                    className="promo__button"
                    ref={ref}
                    onClick={scrollThrough}
                    >Узнать больше</button>
            </div>
            <img
                className="promo__image"
                src={world}
                alt="картика земного шара"
            /> 

        </section>
    );
}

export default Promo;