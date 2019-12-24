import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class TipItem extends Component {
    
    
    render() {
        const { id,title } = this.props.tip;
        return (
           
            <div style = { itemStyle1 } >
                <p>
                    <input type = "checkbox" onChange = {this.props.markComplete.bind(this,id) } /> {' '}              
                    {title } 
                    <button onClick = {this.props.deleteTip.bind(this,id) } style = {btnSytle1}> x </button>
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
    background: 'ff0000',
    color: 'fff',
    border: 'none',
    padding: '5px 8px',
    cursor: 'pointer',
    borderRadius: '50%',
    float: 'right'
}

//One style for the text boxes, can add a new one and chenge above
const itemStyle1 = {
    backgroundColor: '#f4f4f4',
    padding:  '20',
    borderBottom: '1px #ccc dotted'

}

export default TipItem
