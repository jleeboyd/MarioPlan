import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'; //allows use of <BrowserRouter> see react docs. user can navigate different urls
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import ProjectDetails from './components/project/ProjectDetails';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import CreateProject from './components/project/CreateProject';
{/*Net Ninja React, Redux, Firebase on YT*/}

//**all routes must be set up in App**

//NavBar -> {SignedInLinks}, {SignedOutLinks}
//Dashboard -> {ProjectList -> ProjectSummary},{Notifications}
//ProjectDetails -> {}

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch> {/* Switch allows for one route to be displayed at a time */}
          <Route exact path='/' component={Dashboard} /> {/* When user first loads page, will see Dashboard component. Exact path so no overlapping routes*/}
          <Route path='/project/:id' component={ProjectDetails} /> {/*/:id is the number for project. Route feeds props through by object default*/}
          <Route path='/signin' component={SignIn} />
          <Route path='/signup' component={SignUp} />
          <Route path='/create' component={CreateProject} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
