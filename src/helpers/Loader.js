import React from 'react';
import ReactDOM from "react-dom";

class Loader {
  Show(){
    const c = <div class="loader">
        <i class="fas fa-circle-notch fa-spin"></i>
        <h3>Please wait.</h3>
      </div>;
    ReactDOM.render(c, document.getElementById('root'));
  }
}

export default Loader;
