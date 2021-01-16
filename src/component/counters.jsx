import React, { Component } from 'react';
import Counter from "./counter"

class Counters extends Component {
    
    render() { 
        const {onReset , counters , onDelete , onIncrement} = this.props;

        return (
            
        <div>
            <button onClick={onReset}
            className="btr-primary btn-sm m-2">Reset</button>
            {counters.map(counter => (
            //value連結到counters的value
            <Counter 
            key = {counter.id} 
            onDelete={onDelete}  
            onIncrement={onIncrement}
            counter = {counter}

            />  
            ))}

        </div>  
        );
    }
}
 
export default Counters;