import React from 'react';
import './index.scss';
import {Breadcrumb, Col, Container, Row} from "react-bootstrap";

function Breadcrumbs() {
    return (
        <Container>
            <Row>
                <Col className="py-3">
                    <Breadcrumb>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item active>Blog</Breadcrumb.Item>
                    </Breadcrumb>
                </Col>
            </Row>
        </Container>

    );
}

export default Breadcrumbs;
