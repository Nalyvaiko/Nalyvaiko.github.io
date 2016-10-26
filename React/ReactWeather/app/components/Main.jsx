const React = require('react');
const Nav = require('Nav');

const Main = React.createClass({
    render: function () {
        return (
            <div>
                <Nav />
                <h2>Main component</h2>
                {this.props.children}
            </div>
        );
    }
});

module.exports = Main;
