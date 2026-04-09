import './App.css'
import React from 'react';
import Counter from './components/Counters';
import Clock from './components/Clock';
import FirstRender from './components/RenderFirst';
import SubsequentRenders from './components/SubsequentRenders';
import Cleanup from './components/cleanup';
import ClockClass from './components/ClockClass';

const { useState } = React; 

export function App() {
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  function handleClick() {
    setMessage("I'm here!"); //updates the DOM
  }

  function loadData() {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setData([1, 2, 3, 4]);
    }, 3000);
  }

  return (
    <>
      <table className="table" cellPadding={10} border={5}>
        <tbody>
          <tr>
            <td>Loading...</td>
            <td>
              <div className="container">
                {loading && <p>Loading...</p>}
              <pre>{JSON.stringify(data, null, ' ')}</pre>
              <button onClick={loadData}>Load Data</button>
              <button onClick={handleClick}>Display</button>
              <p>{message}</p>
            </div> 
          </td>
          </tr>
          <tr>
            <td>
              Subsequent Renders
            </td>
            <td>
              <div className="container">
                <SubsequentRenders />
              </div>
            </td>
          </tr>
          <tr>
            <td>
              Clock
            </td>
            <td>
              <div className="container">
                <Clock />
              </div>
            </td>
          </tr>
          <tr>
            <td>
              Counter
            </td>
            <td>
              <div className="container">
                <Counter initialCount={0} />
              </div>
            </td>
          </tr>
          <tr>
            <td>
              First Render
            </td>
            <td>
              <div className="container">
                <FirstRender />
              </div>
            </td>
          </tr>
          <tr>
            <td>
              Cleanup
            </td>
            <td>
              <div className="container">
                <Cleanup />
              </div>
            </td>
          </tr>
          <tr>
            <td>
              Clock Class Component
            </td>
            <td>
              <div className="container">
                <ClockClass />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </>
)}

export default App
