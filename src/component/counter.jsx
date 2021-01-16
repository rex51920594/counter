import React, { Component } from 'react';

class Counter extends Component {





    render() { 
        return (
        <div>
            <h4>{this.props.id}</h4>
            <span  className={this.getBadgeClasses() }>{this.formatcount()}</span>
            <button onClick={() => this.props.onIncrement(this.props.counter)} className="btn btn-secondary">Increment</button>
            <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-bg m-2"> Delete</button>
        </div>
        );
        
    }
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        //+=串接字串 ex "badge-" + "warning"
        classes += this.props.value === 0 ? "warning" : "primary";
        return classes;
    }

    formatcount(){
        const{ value: count } = this.props.counter;
        return count === 0 ? "Zero" : count }
}
 
export default Counter;