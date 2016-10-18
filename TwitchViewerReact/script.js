const Channel = React.createClass({
    render: function() {
        return (
            <li className="channel">
                <a href={this.props.href} className="channel-link" target="_blank">
                    <img src={this.props.image} alt="img" className="channel-image" width="60px" height="60px" />
                </a>
                <div className="channel-info">
                    <div className="channel-name">{this.props.name}</div>
                    <div className="channel-game">{this.props.game}</div>
                    <div className="stream-name">{this.props.stream}</div>
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
            channelsDisplay: []
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
                    data.name = list[count];
                    if (count >= 0) {
                        count--;
                        let arr = that.state.channelsInfo;
                        arr.push(data);
                        that.setState({
                            channelsInfo: arr,
                            channelsDisplay: arr
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

    handleSearch: function(e) {
        let searchQuery = e.target.value.toLowerCase();

        let channelsDisplay = this.state.channelsInfo.filter(function(channel) {
            let searchValue = channel.name.toLowerCase();
            return searchValue.indexOf(searchQuery) !== -1;
        });

        this.setState({
            channelsDisplay: channelsDisplay
        });
    },

    handleDisplay: function(e) {
        let display = e.target.classList.value;
        switch(display) {
            case "all":
                let channelsAll = this.state.channelsInfo;
                this.setState({
                    channelsDisplay: channelsAll
                });
                break;
            case "online":
                let channelsOnline = this.state.channelsInfo.filter(function(channel) {
                    return channel.stream;
                });
                this.setState({
                    channelsDisplay: channelsOnline
                });
                break;
            case "offline":
                let channelsOffline = this.state.channelsInfo.filter(function(channel) {
                    return !channel.stream;
                });
                this.setState({
                    channelsDisplay: channelsOffline
                });
                break;
        }
    },

    render: function() {
        return (
            <div className="channels">
                <div className="display">
                    <div className="all" onClick={this.handleDisplay}>All</div>
                    <div className="online" onClick={this.handleDisplay}>OnLine</div>
                    <div className="offline" onClick={this.handleDisplay}>OffLine</div>
                </div>
                <input type="text" className="search-field" onChange={this.handleSearch} />
                <ul className="channels-list">
                    {
                        this.state.channelsDisplay.map(function(el, i) {
                            return <Channel
                                    key={i}
                                    image={el.stream ? el.stream.channel.logo : "http://www.sd-gaming.com/templates/sd-gaming-eventpage/images/twitch-offline.png"}
                                    href={el.stream ? el.stream.channel.url : "http://www.twitch.tv/" + el.name}
                                    name={el.name}
                                    game={el.stream ? el.stream.channel.game : null}
                                    stream={el.stream ? el.stream.channel.status : "offline"}
                                    />
                        })
                    }

                </ul>
            </div>
        );
    }
});

ReactDOM.render(
    <Viewer />,
    document.getElementById('mount-point')
);
