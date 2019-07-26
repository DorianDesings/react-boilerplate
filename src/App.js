import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

//Pages
// import NotFound from './pages/404';
// import Blog from "./pages/Blog";
// import Contact from "./pages/Contact";
// import Courses from "./pages/Courses";
// import Forum from './pages/Forum'
// import Index from './pages/Index'
// import Portfolio from './pages/Portfolio';
class App extends Component {
  render() {
    return (
      <h1>Works!</h1>
      // <Router>
      //   <Switch>
      //     <Route exact path="/" component={Index}></Route>
      //     <Route exact path="/blog" component={Blog}></Route>
      //     <Route exact path="/contacto" component={Contact}></Route>
      //     <Route exact path="/cursos" component={Courses}></Route>
      //     <Route exact path="/portfolio" component={Portfolio}></Route>
      //     <Route exact path="/foro" component={Forum}></Route>
      //     <Route component={NotFound}></Route>
      //   </Switch>
      // </Router>
    )
  }
}

export default App;
