import React from 'react';

class ClockClass extends React.Component {
  
  timerID?: ReturnType<typeof setInterval>;

  state = {
    time: new Date().toLocaleTimeString(),
  };

  refresh = () => {
    this.setState({ time: new Date().toLocaleTimeString() });
  };

  render() {
    return (
      <div>
        <p>{this.state.time}</p>
      </div>
    );
  }

  componentDidMount() {
    this.timerID = setInterval(this.refresh, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }
}

export default ClockClass;