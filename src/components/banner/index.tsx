import React from 'react';
import './index.scss';
import {Button} from "react-bootstrap";

function Banner() {
    return (
        <div className="banner d-flex justify-content-center align-items-center gap-4 flex-column ">
            <div className="banner-container">
                <h1 className="text-center text-white mb-5">Top product news, content marketing tips, and insights.</h1>
                <form className="d-flex">
                    <input placeholder="Search Tools"/>
                    <Button  variant="warning">Search</Button>
                </form>
            </div>

        </div>
    );
}

export default Banner;
