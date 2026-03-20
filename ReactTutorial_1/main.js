const rootElement = document.getElementById('root');

//This is javascript
/*const element = document.createElement('div');
element.textContent = 'Hello World';
element.className = 'container';
rootElement.appendChild(element);*/

// Step 1 of the create element process
/*
const elementParms = {
    type: 'div',
    props: {
        className: 'container',
        children: 'Hello World'
    }
}

const element = React.createElement(elementParms);
console.log(element);
ReactDOM.createRoot(rootElement).render(element);

*/

//step 2 of the create element process with 
/*const element = React.createElement(
  'div',
  {
    className: 'container',
    children: ['Hello World', 'Goodbye World']
  },
);

console.log(element);
ReactDOM.createRoot(rootElement).render(element);*/

// Lets try to use JSX
// For this part to run we comment out the following line

const element = <div className="container">Hello Element</div>;
ReactDOM.createRoot(rootElement).render(element);
