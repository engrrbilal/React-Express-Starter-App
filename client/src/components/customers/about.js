import React, { Component } from 'react';

class About extends Component {
    constructor(){
        super();
        this.state = {
          about:[]
        }
      }
      componentDidMount(){
        fetch('/about')
        .then(res => res.json())
        .then(about => this.setState({about},() =>
        console.log("about page ....",about)))
      }
  render() {
    return (
      <div>
          <br/>
        <h2>About </h2>
        {/* <ul> */}
        {this.state.about.map(a =>
        <li key={a.place}>place:{a.place}</li>
        )}
        {/* </ul> */}
      </div>
    );
  }
}

export default About;
