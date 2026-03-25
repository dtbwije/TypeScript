import './App.css'
import Hello, { LatestHellow, NewHello } from './components/Hello'

//function App() {

//  return (
//    <>
//      <div className="App">

        //<Hello name="Tharanga" enthusiasmLevel={3}/>
        //<NewHello name="Anuja" enthusiasmLevel={163} />
      
//    </>
//  )
//}

const App: React.FC = () => {
  return (
    <div className="App">
      <Hello name="Tharanga" enthusiasmLevel={3}/>
      <NewHello name="Evis"
      enthusiasmLevel={2}
      >

      </NewHello>

      <LatestHellow name="Anuja" enthusiasmLevel={3} />
    </div>
  );
};
export default App
