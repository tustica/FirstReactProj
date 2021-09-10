
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render( <App/> , document.getElementById('root'));

function ticker() {
    const element = ( <div id="homie">
        <h1> Hello, world! </h1>  
        <h2> The time in Dallas is { new Date().toLocaleTimeString('en-US') } </h2></div>
    );
    console.log('iterate')
    // highlight-next-line
    ReactDOM.render(element, document.getElementById('root'));
}

setInterval(ticker, 1000);