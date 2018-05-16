import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

    constructor(props){
        super(props);

        this.state = {
           title: 'React - Training'
        };
        this.onSubmit = this.onSubmit.bind(this);
        this.changeState = this.changeState.bind(this);
    }
    onClick(event){
       alert(event.target.innerHTML);
    }
    onSubmit(event){
        event.preventDefault();
        console.log(this.input.value);
        //document.getElementById('results').innerHTML = this.input.value /*+'Submitted yo...'*/;
    }
    onChange(event){
        document.getElementById('results').innerHTML = event.target.value;
    }
    changeState(event){
        this.setState({
           title: 'Rasta Spoon'
        });
    }
    render() {
        const list = ['And I wouldn’t be fonda drinking, but when I go at it I do go at it awful.. very hard. ' ,
        'I do have 45 pints in ehh about two hours, I’d have a packet a crips then, and then maybe an ' ,
        'ould packet of ehhh ehhhhh peanuts, and I’d go for probably…. and I’d have ten more anyway, ' ,
        'and then i’d get up the following morning and maureen would have the fry on, and i’d go at eh ' ,
        'again, and there’d be no fucking sthopping me, I’d take the shirt of any mans back, bastards.',
        ];
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{this.state.title}</h1>
        </header>
        {
            list.map(item => {
                return (
                <div className="App-intro" key={item} onClick={this.onClick}>{item}</div>
            );
            })
        }
        <form onSubmit={this.onSubmit}>
            <input onChange={this.onChange} ref={input =>this.input = input}/>
        </form>
          <h1 id = 'results'></h1>
          <div onClick={this.changeState}>Click here!</div>
      </div>
    );
  }
}

export default App;
