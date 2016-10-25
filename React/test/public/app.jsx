var GreeterMessage = React.createClass({
    render: function() {
        return (
            <div>
                <h1>Hello, {this.props.name}!</h1>
                <p>{this.props.message}</p>
            </div>
        );
    }
});

var GreeterForm = React.createClass({
    onFormSubmit: function(e) {
        e.preventDefault();

        var updates = {};
        var name = this.refs.name.value;
        var message = this.refs.message.value;

        if (name.length > 0) {
            this.refs.name.value = '';
            updates.name = name;
        }

        if (message.length > 0) {
            this.refs.message.value = '';
            updates.message = message;
        }

        this.props.onNewData(updates);
    },

    render: function() {
        return (
            <form onSubmit={this.onFormSubmit}>
                <div>
                    <input type="text" ref="name" placeholder="Enter name..." />
                </div>
                <div>
                    <textarea ref="message" placeholder="Enter message..." ></textarea>
                </div>
                <button>Submit</button>
            </form>
        );
    }
});

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

var firstName = "Vitalii";

ReactDOM.render(
    <Greeter name={firstName} message="I have learned React!" />,
    document.getElementById('app')
);
