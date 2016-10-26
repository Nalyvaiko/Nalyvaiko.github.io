const React = require('react');
const ReactDOM = require('react-dom');
const Greeter = require('Greeter');

let firstName = "Alice";

ReactDOM.render(
    <Greeter name={firstName} message="I have learned React!" />,
    document.getElementById('app')
);
