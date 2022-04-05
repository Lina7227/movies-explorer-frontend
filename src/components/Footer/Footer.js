import { useLocation } from 'react-router-dom';
import './Footer.css';

function Footer() {
    const location = useLocation();
    const islocationProfile = location.pathname === "/profile";
    const islocationPrivateIn = location.pathname === "/sign-in";
    const islocationPrivateUp = location.pathname === "/sign-up";
    const islocationPrivate = islocationProfile || islocationPrivateIn || islocationPrivateUp;

    return (

        <footer className="footer">
            {!islocationPrivate &&
                <>
                    <p className="footer__text footer__text_subtitle">Учебный проект Яндекс.Практикум х BeatFilm.</p>
                    <div className="footer__container">
                        <p className="footer__text_copyright footer__text">&copy; 2022</p>
                        <nav className="footer__contact">
                            <a
                                href="https://www.linkedin.com/in/linakricosheina7227/"
                                target="_blank"
                                className="footer__link link-click"
                                rel = "noreferrer noopener">
                                <p className="footer__text_link-text footer__text">Яндекс.Практикум</p>
                            </a>
                            <a
                                href="https://www.linkedin.com/in/linakricosheina7227/"
                                target="_blank"
                                className="footer__link link-click"
                                rel = "noreferrer noopener">
                                <p className="footer__text_link-text footer__text">Github</p>
                            </a>
                            <a
                                href="https://www.linkedin.com/in/linakricosheina7227/"
                                target="_blank"
                                className="footer__link link-click"
                                rel = "noreferrer noopener">
                                <p className="footer__text_link-text footer__text">Facebook</p>
                            </a>
                        </nav>
                    </div>
                </>
            }
        </footer>
    );
}

export default Footer;