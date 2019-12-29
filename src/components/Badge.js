import React from 'react';
import confLogo from '../images/badge-header.svg';
class Badge extends React.Component {

    render() {
        return (<div>
            <div>
                <img src={confLogo} alt="Conferencia"></img>
            </div>
            <div>
                <img src="https://gravatar.com/avatar?id=identicon" alt="Avatar"></img>
                <h1>Kevin
                <br></br>
                Santacruz
                </h1>
            </div>
            <div>
                <p>Frontend Enginner</p>
                <p>@ksantacr_</p>
            </div>
            <div>#platziconf</div>

        </div>);
    }
}

export default Badge;