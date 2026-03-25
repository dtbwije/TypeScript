import React, { type SyntheticEvent } from "react";

export interface Props {
  name: string;
  enthusiasmLevel?: number;
}

interface State {
  enthusiasmLevel: number;
}
interface CurrentState {
  currentEnthusiasm: number;
}

export default function Hello({ name, enthusiasmLevel = 1 }: Props) {
  if (enthusiasmLevel <= 0) {
    throw new Error("You could be a little more enthusiastic. :D");
  }

  return (
    <div className="hello">
      <div className="greeting">
        Hello {name + getExclamationMarks(enthusiasmLevel)}
      </div>
    </div>
  );
}


export class NewHello extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      enthusiasmLevel: props.enthusiasmLevel || 1,
    };
  }

  onIncrement = () => this.updateEnthusiasm(1)
  onDecrement = () => this.updateEnthusiasm(-1)

  updateEnthusiasm = (change: number) => {
    this.setState((prevState) => ({
      enthusiasmLevel: prevState.enthusiasmLevel + change,
    }));
  };

  render() {
    const { name } = this.props;
    const { enthusiasmLevel } = this.state;

    if (enthusiasmLevel <= 0) {
      throw new Error("You could be a little more enthusiastic. :D");
    }

    return (
      <div className="hello">
        <div className="greeting">
          Hello {name + getExclamationMarks(enthusiasmLevel)}
        </div>
      </div>
    );
  }
}

// helpers

function getExclamationMarks(numChars: number) {
  return Array(numChars + 1).join("!");
}

export class LatestHellow extends React.Component<Props, CurrentState> {
  state = { currentEnthusiasm: this.props.enthusiasmLevel || 1 };

  onIncrement = (event: SyntheticEvent) => {
    console.log(event);
    this.updateEnthusiasm(1);
  };
  onDecrement = (event: SyntheticEvent) => {
    console.log(event.target);
    this.updateEnthusiasm(-1);
  };

  render() {
    const { name } = this.props;

    if (this.state.currentEnthusiasm <= 0) {
      throw new Error("You could be a little more enthusiastic. :D");
    }

    return (
      <div className="hello">
        <div className="greeting">
          Hello {name + getExclamationMarks(this.state.currentEnthusiasm)}
        </div>
        <button onClick={this.onDecrement}>-</button>
        <button onClick={this.onIncrement}>+</button>
      </div>
    );
  }

  updateEnthusiasm(change: number) {
    this.setState((currentState) => {
      return { currentEnthusiasm: currentState.currentEnthusiasm + change };
    });
  }
}