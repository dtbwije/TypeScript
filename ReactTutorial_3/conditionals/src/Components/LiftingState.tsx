import React from 'react';

function Button({ onClickFunction }: { onClickFunction: () => void }) {
  return <button onClick={onClickFunction}>+1</button>;
}

const Result = ({ value }: { value: number }) => {
  return <div>Result: {value}</div>;
};

function LiftingState() {
  const [counter, setCounter] = React.useState(0);

  const incrementCounter = () => {
    setCounter((previousCounter) => previousCounter + 1);
  };

  return (
    <div>
      <Button onClickFunction={incrementCounter} />
      <Result value={counter} />
    </div>
  );
}

export default LiftingState;

