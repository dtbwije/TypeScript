
//1. This is the react method 
/*function HelloWorld() {
  return <div className="container">Hello Function Component</div>;
}

function App() {
  return (
    <div> 
        <HelloWorld />
        <HelloWorld />
        <HelloWorld />  
    </div>
  );
}*/

//2. This is the class method
class HelloWorld extends React.Component {
  render() {
    return <div className="container">Hello Class Component</div>;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HelloWorld />);