const Channel = React.createClass({
    render: function() {
        return (
            <li className="channel">
                <img  alt="img" className="channel-image"/>
                <div className="channel-info">
                    <div className="channel-name"></div>
                    <div className="stream-name"></div>
                </div>
            </li>
        );
    }
});

const Viewer = React.createClass({
    getInitialState: function() {
        return {
            channels: ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"],
            channelsInfo: [],
            display: 'all'
        }
    },

    loadData: function() {
        const that = this;
        let channelsList = that.state.channels;
        let count = channelsList.length;
        const client_id = 'bdrnkzccnzobyx9cmoqjcwei7whumvz';

        function request(count, list) {
            $.ajax({
                async: true,
                url: 'https://api.twitch.tv/kraken/streams/' + list[count] + '?client_id=' + client_id + '&callback=?',
                type: 'GET',
                dataType: 'json',
                success: function(data) {
                    if (count >= 0) {
                        count--;
                        let arr = that.state.channelsInfo;
                        arr.push(data);
                        that.setState({
                            channelsInfo: arr
                        });
                        request(count, list);
                    }
                }
            });
        };
        
        request(count - 1, channelsList);
    },

    componentDidMount: function() {
        this.loadData();
    },

    render: function() {
        return (
            <div>
                <div className="display">
                    <div className="all"></div>
                    <div className="online"></div>
                    <div className="ofline"></div>
                </div>
                <input type="text" className="search-field"/>
                <ul className="streamers-list">
                    <Channel />
                </ul>
            </div>
        );
    }
});

ReactDOM.render(
    <Viewer />,
    document.getElementById('mount-point')
);
