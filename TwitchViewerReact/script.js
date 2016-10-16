var Viewer = React.createClass({
    getInitialState: function() {
        return {
            tab: "all"
        }
    },

    loadData: function() {
        fetch('https://api.twitch.tv/kraken/streams/freecodecamp?callback=?')
            .then(function(response) {
                console.log(response);
            })
            .catch(function(ex) {
                console.log('Error: ', ex);
            })
    },

    componentDidMount: function() {
        this.loadData();
    },

    render: function() {
        return (
            <div>
                <p>Hello!</p>
            </div>
        );
    }
});


ReactDOM.render(
    <Viewer />,
    document.getElementById('mount-point')
);
