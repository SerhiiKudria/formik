import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'

import SignUp from './Components/SignUp'
import Login from './Components/Login'

//Додати Components, Contacts
function App () {
  return (
    <Router>
      <Route exact path='/' render={() => <Redirect to='/login' />} />
      <Switch>
        <Route path='/signup'>
          <SignUp />
        </Route>
        <Route path='/login'>
          <Login />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
