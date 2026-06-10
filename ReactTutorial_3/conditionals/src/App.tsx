import './App.css'
import DropDownMenu from './Components/DropDownMenu'
import DropDownMenuClass from './Components/DropDownMenuClass'
import IfConditional from './Components/IfConditional'
import LiftingState from './Components/LiftingState'
import LiftingStateClass from './Components/LiftingStateClass'

import ExampleForm from './HooksAndForms/Forms'
import SigninForm from './HooksAndForms/Admin'
import LoginForm from './HooksAndForms/AdminClass'
import ValidatedForm from './HooksAndForms/Validation'

function App() {
  return (
    <div className="App">
      <table border={4}>
        <thead>
        <tr>
          <th>Functional Component</th>
          <th>Class Component</th>
        </tr>
        </thead>
        <tbody>
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
        </tbody>
      </table>
      <div>
        <p>
          Next section
        </p>
      </div>
      <div>
        <table border={4} style={{ marginTop: '20px' }}>
          <thead>
            <tr>
              <th>Functional Component</th>
              <th>Class Component</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>IfConditional </td>
              <td><ExampleForm /></td>
            </tr>
            <tr>
              <td>Admin function</td>
              <td><SigninForm /></td>
            </tr>
            <tr>
              <td>Login Class</td>
              <td><LoginForm /></td>
            </tr>
            <tr>
              <td>Form Validation</td>
              <td><ValidatedForm /></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    
  )
}

export default App
