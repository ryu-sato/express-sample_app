var React = require('react');

class Error extends React.Component {
  render() {
    return (
      <div className="contents">
        <h1>{this.props.message}</h1>
        <h2>{this.props.error.status}</h2>
        <pre>{this.props.error.stack}</pre>
      </div>
    );
  }
}

module.exports = Error;
