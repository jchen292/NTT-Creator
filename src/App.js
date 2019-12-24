import React, { Component } from 'react';
import Tips from './components/Tips';
import './App.css';
import Header from './components/layout/Header';
import AddTip from './components/AddTip';
import uuid from 'uuid'

class App extends Component {
  state = {
    tips: [
      {
        id: uuid.v4(),
        title: 'Did you eat your daily Vegetables and fruits?',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Going to the gym is healthy for you',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Brushing your teeth twice, using floss once, and using mouthwash twice a day helps',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Limited your daily sugar intake?',
        completed: false
      }
    ]
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
    this.setState({ tips: [...this.state.tips.filter(tip => tip.id !== id)] });
    
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
      <div className="App">
        <div className = "container">
          <Header />
          <AddTip addTip = {this.addTip}/>
          <Tips tips = {this.state.tips} markComplete = {this.markComplete} 
          deleteTip = {this.deleteTip}/> 
        </div>
      </div>
    );
  }
}

export default App;
