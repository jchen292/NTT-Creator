import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class TipItem extends Component {
    itemStyle1 = () => {
        return{
            backgroundColor: '#f4f4f4',
            padding:  '20',
            borderBottom: '1px #ccc dotted',        
            textDecoration: this.props.tip.completed ? 'line-through'  : 'none'
        }
    }
    
    render() {
        const { id,title } = this.props.tip;
        return (
           
            <div style = { this.itemStyle1() } >
                <p>
                    <input type = "checkbox" onChange = {this.props.markComplete.bind(this,id) } /> {' '}              
                    {title } 
                    <button onClick = {this.props.deleteTip.bind(this,id) } style = {btnSytle1}> Delete </button>
                </p>
            </div>
        )
    }
}


//Prop types
TipItem.propTypes = {
    tip: PropTypes.object.isRequired
}

const btnSytle1 = {
    background: '#4D5A5B',
    color: '#61FF33',
    padding: '5px 8px',
    cursor: 'pointer',
    float: 'right'
}



export default TipItem
