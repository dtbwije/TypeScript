import React from 'react';

function Parent2Child() {
  return <Parent />;
}

function Parent() {
  const [words, setWords] = React.useState('');

  const handleClick = () => {
    setWords('Did you do your homework?');
  };

  return (
    <div>
      <h1>Parent</h1>
      <button onClick={handleClick}>Ask</button>
      <Child hears={words} />
    </div>
  );
}

function Child(props) {
  return (
    <div>
      <h2>Child</h2>
      <p>{props.hears}</p>
    </div>
  );
}

export default Parent2Child
