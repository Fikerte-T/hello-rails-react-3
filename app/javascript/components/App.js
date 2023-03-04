import React from "react"
import Greeting from './Greeting'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Provider } from "react-redux";
import store from "../redux/store";
class App extends React.Component {
  render () {
    return (
      <div className='App'>
        <Provider store={store}>
            <Router>
                <Routes>
                <Route exact path="/" element={ <Greeting /> } />
                {/* <Route path="/greetings" element={ <Greeting />} /> */}
                </Routes>
            </Router>
        </Provider>
      </div> 
    );
              
   }

}

export default App