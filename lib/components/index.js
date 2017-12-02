import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  state = {
    answear: '42',
  }

  asyncFunction = () => {
    return Promise.resolve(37);
  }

  async componentDidMount() {
    this.setState({
      answear: await this.asyncFunction()
    });
  }

  render() {
    return (
      <h2>Hello -- {this.state.answear}</h2>
    );
  }
}

export default App;

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
