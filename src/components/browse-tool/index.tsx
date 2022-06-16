import React, {useEffect, useState} from 'react';
import './index.scss';
import {Col, Container, Row} from "react-bootstrap";
import Tool from "../tool";
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import getTools from "../../store/action/tools";
function BrowseTool() {

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getTools())
    }, []);
    const {tools} = useSelector((state: any) => state.tools)
    const [index, setIndex] = useState(0);
    return (
        <div className="browse-tool">
            <Container>
                <Row>
                    <Col>
                        <h3 className="text-center primary-heading mb-4">Browse by Tools</h3>
                        <div className="d-flex flex-wrap tool-list mb-5">
                            {
                                tools.map((tool: any, i: number) => <Tool active={index === i ? 'active' : ''} key={tool?.id} data={tool} onCLick={() => setIndex(i)}/>)
                            }
                        </div>

                    </Col>
                </Row>

            </Container>

        </div>
    );
}

export default BrowseTool;
