import React, { Component } from 'react';
import TipItem from './TipItem';
import PropTypes from 'prop-types';

class Tips extends Component{
  markComplete = () => {
    console.log(this.props)
  } 
  render(){  
      return this.props.tips.map((tip) => (
      <TipItem key ={tip.id} tip = {tip} markComplete =
      {this.props.markComplete}  deleteTip = {this.props.deleteTip}/> 

      ));
    }
}


//Prop types
Tips.propTypes = {
  tips: PropTypes.array.isRequired
}


export default Tips;