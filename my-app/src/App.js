import React from 'react';
import Jumbotron from "./components/Jumbotron";
import MainGameContainer from "./components/MainGameContainer";
// import logo from './logo.svg';
import './App.css';

const App = () => (
  <div className="container-fluid mainContainer">
    <Jumbotron />
    <MainGameContainer />
  </div>
);

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

export default App;
