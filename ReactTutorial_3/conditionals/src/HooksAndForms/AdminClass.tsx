import React from 'react';

class LoginForm extends React.Component {
    state = {
        username: '',
        password: '',
    };

    handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        const { name, value } = event.target;
        this.setState({ [name]: value });   
    }
    
    handleSubmit = (event : React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const { username, password } = this.state;
        console.log(`Username: ${username}, Password: ${password
    }`);    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    name="username"
                    value={this.state.username}
                    onChange={this.handleChange}
                />
                <input
                    type="password"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                />
                <button type="submit">Login</button>
            </form>
        );
    }
}

export default LoginForm;