
import React from 'react'
import ReactDom from 'react-dom'
//material ui
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
//run tap event
injectTapEventPlugin()

var Main = React.createClass({
    getInitialState: function() {
        return {
            head: "I hope this works!"
        };
    },
    render: function() {
        return(
            
        <div>
            <h1>{this.state.head}</h1>
        </div>
        )
    }
});
module.exports = Main;