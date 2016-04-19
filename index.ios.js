// Import some code we need
var Moment = require('moment');
var React = require('react-native');
var AppRegistry = React.AppRegistry;
var View = React.View;
var Text = React.Text;
var StyleSheet = React.StyleSheet;
var DayItem = require('./src/day-item');


var DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']


// Create a React component
var Weekdays = React.createClass({
  render: function() {
    return <View style={styles.container}>
      <Text style={styles.h1}>
        Days of the week:
      </Text>
      <Text>
        {Moment().format('ddd')}
      </Text>
      {this.days()}
    </View>
  },
  days: function() {
    return DAYS.map(function(day){
      // Called 7 times, one for each day of the week
      return <DayItem day={day} />
    });
  }
});

// Style the React component
var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#AEAEAE'
  }
});

// Show the React component on the screen
AppRegistry.registerComponent('weekdays', function() {
  return Weekdays
});
