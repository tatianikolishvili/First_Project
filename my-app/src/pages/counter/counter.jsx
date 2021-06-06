import React from 'react';
import { ThemeConsumer } from 'react-bootstrap/esm/ThemeProvider';

class Counter extends React.Component {
  state = {
    title: 'Loading...',
    count: 0,
  };
  componentDidMount() {
    this.timer = setTimeout(() => {
      this.setState({
        ...this.state,
        title: 'Counter Page',
      });
    }, 2000);
    document.title = 'Counter Page';
  }

  componentWillUnmount() {
    console.info(Counter.name, 'GONE');
    clearTimeout(this.timer);
  }
  onPlus = () => {
    this.setState((prevState) => {
      return {
        ...prevState,
        count: prevState.count + 1,
      };
    });
  };
  onMinus = () => {
    this.setState((prevState) => {
      return {
        ...prevState,
        count: prevState.count - 1,
      };
    });
  };
  onReset = () => {
    // this.setState({
    //     ...this.state,
    //     count: 0,
    // });
    throw new SyntaxError('Reset Exception');
  };
  render() {
    const { title, count } = this.state;
    return (
      <div className="row mt-3">
        <h2>
          {title} - {count}
        </h2>
        <div className="col-2 d-flex justify-content-between">
          <button className="btn btn-primary btn-lg" onClick={this.onPlus}>
            +
          </button>
          <button className="btn btn-secondary btn-lg" onClick={this.onReset}>
            0
          </button>
          <button className="btn btn-warning btn-lg" onClick={this.onMinus}>
            -
          </button>
        </div>
      </div>
    );
  }
}
export default Counter;
