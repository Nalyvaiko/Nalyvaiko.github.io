const React = require('react');
const GreeterMessage = require('GreeterMessage');
const GreeterForm = require('GreeterForm');

var Greeter = React.createClass({
    getDefaultProps: function() {
        return {
            name: "React"
        };
    },

    getInitialState: function() {
        return {
            name: this.props.name,
            message: "This is from a component!"
        };
    },

    handleNewData: function(updates) {
        this.setState(updates);
    },

    render: function() {
        var name = this.state.name;
        var message = this.state.message;
        return (
            <div>
                <GreeterMessage name={name} message={message} />
                <GreeterForm onNewData={this.handleNewData} />
            </div>
        );
    }
});

module.exports = Greeter;
