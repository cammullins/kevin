import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CommentForm from './components/CommentForm';

class App extends Component {
  state= {
    comments: []
  }

  componentDidMount = () => this.getComments();

  getComments = () =>{
    const dummyComments = [
      {
        _id: 1,
        url: "https://i.imgur.com/EgGeLKT.jpg",
        text: "some dumb fucking comment",
        date: "May 9th, 2018"
      },
      {
        _id: 2,
        url: "https://i.imgur.com/5NUBQPN.jpg",
        text: "another dumb fucking comment",
        date: "May 9th, 2018"
      },
      {
        _id: 3,
        url: "https://i.imgur.com/ulMuu3Z.jpg",
        text: "bla bla bla",
        date: "May 9th, 2018"
      }
    ];
    // dummyComments.forEach(comment => {
      this.setState({comments: dummyComments});
    // })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <CommentForm comments={this.state.comments} />
      
      </div>
    );
  }
}

export default App;
