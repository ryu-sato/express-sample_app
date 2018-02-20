var React = require('react');

class DefaultLayout extends React.Component {
  render() {
    return (
      <html lang="ja">
        <head>
          <meta charSet="UTF-8" />
          <title>{this.props.title}</title>
        </head>
        <body>
          <div className="container-fluid">
            {this.props.children}
          </div>
        </body>
      </html>
    );
  }
}

module.exports = DefaultLayout;
