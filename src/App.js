import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Tips from './components/Tips';
import './App.css';
import Header from './components/layout/Header';
import AddTip from './components/AddTip';
import uuid from 'uuid'
import About from './components/pages/About'
import Contact from './components/pages/Contact'

class App extends Component {
  //Stores the tips to be displayed once added
  state = {
    tips: []
  }

  markComplete = (id) =>{
    this.setState({ tips: this.state.tips.map(tip => {
      if(tip.id === id){        
        tip.completed = !tip.completed
        if(tip.completed ){
           alert("Completed!")
        }
      }
      return tip;
    } ) } );  
  }

  //Deletes tip
  deleteTip = (id) => {
    this.setState({ tips: [...this.state.tips.filter(tip => tip.id !== id )] });
  }
  
  //Adds tip
  addTip = (title) => {
    const newTip = {
      id: uuid.v4(),
      title,
      completed: false
    }
    this.setState({ tips: [...this.state.tips, newTip ] });
  }

  render() {

    return (
      <BrowserRouter>  
      <div className="App">
        <div className = "container">
          <Header />
          <Route exact path = "/" render = {props => (
            <React.Fragment>
              <AddTip addTip = {this.addTip}/>
              <Tips tips = {this.state.tips} markComplete = {this.markComplete} 
              deleteTip = {this.deleteTip}/> 
            </React.Fragment>
          )} />
          <Route path = "/about" component = {About} />
          <Route path = "/contact" component = {Contact} />
        </div>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
