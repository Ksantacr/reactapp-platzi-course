import React from 'react';
import confLogo from '../images/badge-header.svg';
import './styles/Badge.css';

class Badge extends React.Component {

    render() {
        return (
        <div className="Badge">
            <div className="Badge__header">
                <img src={confLogo} alt="Conferencia"></img>
            </div>
            <div className="Badge__section-name">
                <img className="Badge__avatar" src="https://gravatar.com/avatar?id=identicon" alt="Avatar"></img>
                <h1>Kevin
                <br></br>
                Santacruz
                </h1>
            </div>
            <div className="Badge__section-info">
                <p>Frontend Enginner</p>
                <p>@ksantacr_</p>
            </div>
            <div className="Badge__footer">#platziconf</div>

        </div>);
    }
}

export default Badge;