import React, { Component } from 'react';
import './App.css';
import Home from "./pages/Home/index";
import Group from "./pages/Group/index";
import Signup from "./pages/Signup/index";
import CreateGroup from "./pages/CreateGroup/index";
import Search from "./pages/Search/index";
import Manage from "./pages/ManageGroups/index"

const App = () => (
  <Router>
    <div>
      <NavBar/>
      <Route exact path ="/" component= {Home}/>
      <Route exact path="/group" component={Group} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/createGroup" component={CreateGroup}/>
      <Route exact path="/search" component={Search}/>
      <Route exact path="/manage" component={Manage}/>
    </div>
  </Router>
);



// class App extends Component {
//   state = {
//     // get info from database and set state
//   }

//   render() {
//     return (<>
//       {/* TODO: create routes for each page */}
//       {/* <Home /> */}
//       {/* <Group /> */}
//       <Signup />
//     </>
//     );
//   }
// }

export default App;
