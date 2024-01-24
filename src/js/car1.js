import React from 'react';
import styles from '../css/my-style.module.css';

class Car3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: "Ford",
      model: "Mustang",
      color: "red",
      year: 1964
    };
  }

  static getDerivedStateFromProps(props, state) {
    return { model: props.model };
  }

  changeColor = () => {
    this.setState({ color: "blue" });
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ color: "yellow" })
    }, 1000)
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    document.getElementById("div1").innerHTML =
      "Before the update, the favorite was " + prevState.color;
      return null;
  }
  componentDidUpdate() {
    document.getElementById("div2").innerHTML =
      "The updated favorite is " + this.state.color;
  }

  render() {
    return (
      <div>
        <h1 className={styles.bigblue}>My css {this.state.brand}</h1>
        <p className={styles.bigblue}>
          It is a {this.state.color} {this.state.model} car1 from {this.state.year}.
        </p>
        <button
          type="button"
          onClick={this.changeColor}
        >Change color</button>
        <div id="div1"></div>
        <div id="div2"></div>
      </div>
    );
  }
}

export default Car3
