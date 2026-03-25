import { createRoot } from 'react-dom/client'
import './index.css'
import React from 'react';
import PropTypes from 'prop-types';
import App from './App';
import { Arrays } from './components/Arrays';
import { FruitList, NewFruitList } from './components/FruitList';
import NewButton from './components/NewButton';

interface Account {
  total: number;
}

//pure function component
function sum(a: number, b: number): number {
  return a + b;
}

//impure function component
function withdraw(account: Account, amount: number): void {
  account.total -= amount;
}

function Greeter(props: { first: string }) {
  //Doing the following is not possible in React
  //This is a REACT feature where passed props are READ-ONLY. This is to ensure that components are pure and do not have side effects.
  //props.first = "Tharanga";
  return <h1>Hello, {props.first}</h1>;
}
function MyButton() {
  return <button onClick={handleClick}> Click me</button>;
}

function handleClick() {
  alert("Button clicked!");
}

 Greeter.propTypes = {
  first: PropTypes.string.isRequired,
 };

class NewGreeter extends React.Component<{ first: string; lastName: string }> {

  render() {
    sum(1, 2);
    withdraw({ total: 100 }, 10);6
    return <h1>Hello, {this.props.first} {this.props.lastName}</h1>;
  }
}
const data = [
  { id: 1, name: 'apple' },
  { id: 2, name: 'orange' },
  { id: 3, name: 'blueberry' },
  { id: 4, name: 'banana' },
  { id: 5, name: 'kiwi' },
];

createRoot(document.getElementById('root')!).render( 
  <>
  
  <Greeter first="Tharanga" />
  <NewGreeter first="Anuja" lastName="Wijethilake"/>
  <App />
  <Arrays />
  //Lets start event handling
  <MyButton />
  <table border={1}>
    <thead>
      <tr>
        <th>Fruit List</th>
        <th>New Fruit List</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><FruitList fruits={data} /></td>
        <td><NewFruitList fruits={data} /></td>
      </tr>
    </tbody>
  </table>
  <NewButton />
  
  </>,
)