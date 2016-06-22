var React = require('react');
var ReactDOM = require('react-dom');

var Content = React.createClass({
  getInitialState: function() {
    return {
      value:0,
      name:'hello'
    };
  },
  handleClick: function(event) {
    //this.setState({value: event.target.name});
    this.setState({value: this.state.value+1});
    console.log('click');
  },
  render: function() {
    var msg=this.state.value;
    return (
      <div>
        <h2>react</h2>
        <a href="button.html">button</a>
        <a href="button.html">button</a>
      </div>
    );
  }
});

ReactDOM.render(
  <Content />,
  document.getElementById('app')
);