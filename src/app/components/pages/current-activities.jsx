/** In this file, we create a React component which incorporates components provided by material-ui */

let React = require('react');
let {CircularProgress, Styles} = require('material-ui');

let ThemeManager = new Styles.ThemeManager();
let Colors = Styles.Colors;

let Main = React.createClass({

  childContextTypes: {
    muiTheme: React.PropTypes.object
  },

  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  },

  componentWillMount() {
    ThemeManager.setPalette({
      accent1Color: Colors.deepOrange500
    });
  },

  render() {

    let containerStyle = {
      textAlign: 'center',
      paddingTop: '50px'
    };

    return (
      <div style={containerStyle}>
        <h1>Enterprise Task Manager</h1>
        <h2>Current Activities</h2>
          <CircularProgress mode="indeterminate"  />
      </div>
    );
  },

});

module.exports = Main;
