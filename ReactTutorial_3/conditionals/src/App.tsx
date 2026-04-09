import './App.css'
import DropDownMenu from './Components/DropDownMenu'
import DropDownMenuClass from './Components/DropDownMenuClass'
import IfConditional from './Components/IfConditional'
import LiftingState from './Components/LiftingState'
import LiftingStateClass from './Components/LiftingStateClass'

function App() {
  return (
    <div className="App">
      <table border={4}>  
        <tr>
          <th>Functional Component</th>
          <th>Class Component</th>
        </tr>
        <tr>
          <td>IfConditional </td>
          <td><IfConditional /></td>
        </tr>
        <tr>  
          <td>DropdownMenu </td>
          <td><DropDownMenu /></td>
        </tr>
        <tr>
          <td>Drop Down with class</td>
          <td><DropDownMenuClass /></td>
        </tr>
        <tr>
          <td>Lifting State</td>
          <td><LiftingState /></td>
        </tr>
        <tr>
          <td>Lifting State with class</td>
          <td><LiftingStateClass /></td>
        </tr>
      </table>
    </div>
  )
}

export default App
