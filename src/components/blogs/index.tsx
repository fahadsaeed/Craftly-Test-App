import React from 'react';
import './index.scss';
import Blog from "../blog";
import {Col, Container, Row} from "react-bootstrap";

function Blogs() {
    return (
        <div className="blogs my-5">
            <Container>
                <Row>
                    <Col>
                        {
                            [1].map(() => <Blog/>)
                        }
                    </Col>
                </Row>
            </Container>

        </div>
    );
}

export default Blogs;
