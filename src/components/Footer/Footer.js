import React from "react";
import { Container } from "react-bootstrap";

import "./footer.css";
import logo from "../../assets/images/htc-cs-logo.png";

const Footer = () => {
    return (
        <footer>
            <Container>
                <img
                    src={logo}
                    alt="Центр высоких технологий"
                    className="footer-logo"
                />
                <div className="footer-text">
                    <p>
                        426057, Россия, Удмуртская Республика, г. Ижевск, ул.
                        Карла Маркса, 246 (ДК «Металлург»)
                    </p>
                    <p>
                        +7 (3412) <a href="tel:+73412938861">93-88-61</a>,{" "}
                        <a href="tel:+73412432929">43-29-29</a>
                    </p>
                    <p>
                        <a href="http://htc-cs.ru/">htc-cs.ru</a>
                    </p>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;
