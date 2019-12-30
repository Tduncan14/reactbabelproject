import React from 'react';
import ReactDOM from 'react-dom';
import List from './containers/List';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {


   return(
       <>
       <h1>Main area</h1>

        <List/>
       </>
   )
}



ReactDOM.render(<App />, document.getElementById('root'));