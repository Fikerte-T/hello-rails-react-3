// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"
import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/App";
// import store from "./redux/store";
// import { Provider } from "react-redux";
// import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
      <App />, 

  document.getElementById('root'),
);