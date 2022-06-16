import React from 'react';
import './index.scss';
import icon from '../../assets/images/icon.png'

function Tool({data, active,  onCLick}: any) {
    return (
        <a  className={`tool d-flex p-4 flex-column ${active}`}  onClick={onCLick}>
                <span className="icon">
                    <img src={icon} alt="icon"/>
                </span>
            <span className="title">{data.title}</span>
        </a>
    );
}

export default Tool;
