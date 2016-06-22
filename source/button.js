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
        <button onClick={this.handleClick}>{msg}</button>
      </div>
    );
  }
});

var PageLink = React.createClass({
  render: function() {
    return (
      <a href={'https://www.facebook.com/' + this.props.pagename}>
        {this.props.pagename}
      </a>
    );
  }
});

ReactDOM.render(
  <Content btnname="tom" />,
  document.getElementById('app')
);
