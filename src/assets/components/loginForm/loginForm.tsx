import * as React from 'react';

import './loginForm.css';

export default class LoginForm extends React.Component {
    render() {
        return (
            <div className="login-container">
                <form action="submit">
                    <div className="row">
                        <h1 className="login-header">
                            Login
                        </h1>
                    </div>
                    <div className="row">
                        <div className="input-container">
                            <input placeholder="Username" id="username" type="text"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-container">
                            <input placeholder="Password" id="password" type="password"/>
                        </div>
                    </div>
                    <div className="row">
                        <button type="submit">Go</button>
                    </div>
                </form>
            </div>
        );
    }
}