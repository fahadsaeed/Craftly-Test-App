import React from 'react';
import './index.scss';
import {Button, Col, Container, Row} from "react-bootstrap";
import logo from "../../assets/images/Logo.png";

function Header() {
    return ( <header className="header py-3">
            <Container>
                <Row>
                    <Col className="d-flex justify-content-between align-items-center">
                        <img className="logo" src={logo} alt="craftly" />
                        <div className="d-flex justify-content-between align-items-center gap-3">
                            <Button  variant="outline-primary" className="rounded-pill px-3 login">Login</Button>
                            <Button  variant="primary" className="rounded-pill px-3 sign-up">SignUp</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </header>
    );
}

export default Header;
