import React from "react";

class ButtonClass extends React.Component<{ incrementCounter: () => void }> {

    render() {
        return (
            <div>
                <button onClick={this.props.incrementCounter}>+1</button>
            </div>
        )
    }
}

class ResultClass extends React.Component<{ value: number }> {
    render() {
        return <div>Result: {this.props.value}</div>;
    }
}

class LiftingStateClass extends React.Component<object, { counter: number }> {
    state = {
        counter: -1
    }

    incrementCounter = () => {
        this.setState((previousState) => ({
            counter: previousState.counter + 1
        }))
    }

    render() {
        return (
            <div>
                <ButtonClass incrementCounter={this.incrementCounter} />
                <ResultClass value={this.state.counter} />
            </div>
        )
    }
}


export default LiftingStateClass;