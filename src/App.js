import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Forms/formA.jsx'
class App extends Component {

    constructor(props){
        super(props);

        this.state = {
           title: 'React - Training'
        };
        this.alertBoxTest = this.alertBoxTest.bind(this);
    }
    alertBoxTest(){
        this.setState({
            title: this.state.title == 'Not Funky' ? 'Funky':'Not Funky'
        });
        //alert(temp);
    }
    render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{this.state.title}</h1>
        </header>

          <Form/>

      </div>
    );
  }
}

export default App;
