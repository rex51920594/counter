
// shortcut :　imrl
import React, {Component} from 'react';
import NavBar from './component/navbar';
import './App.css';
import Counters from './component/counters';

//shortcut : cc
class App extends Component {
  state = {

    counters : [
        { id : 1 , value:4},
        { id : 2 , value:0},
        { id : 3 , value:0},
        { id : 4 , value:0}

    ]
    
  }

  handleIncrement= counter =>{
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter)
    console.log("index = "+ index)
    counters[index] = {...counter};
    console.log(counters[0])
    counters[index].value++;
    console.log(this.state.counters[0]);
    this.setState({counters})
  };

  //using arrow function to inherit component 
  handleDelete = (counterId)=>{
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({counters})
  };

  handleReset=() =>{

    const counters =  this.state.counters.map(c => {            
        c.value=0;
        return c;
    });

    this.setState({counters});


  };
  render() { 
    return(
      //using React.Fragment to render multi element
    <React.Fragment>
    <NavBar />
    <main className= "container">
      <Counters totalCounters = {this.state.counters.filter(c => c.value>0).length}
      counters = {this.state.counters}
      onReset = { this.handleReset}
      onDelete = { this.handleDelete}
      onIncrement = { this.handleIncrement}
      />
    </main>
    </React.Fragment> 

    );
  }
}
 
export default App;
