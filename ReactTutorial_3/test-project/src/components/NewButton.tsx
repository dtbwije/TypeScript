import React from "react";

class NewButton extends React.Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick = () => {
        console.log('Button clicked!');
    };

    render() {
        return (
            <button onClick={this.handleClick}>
                Click me For New Button
            </button>
        );
    }
}

export default NewButton;