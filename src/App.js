import React, {Component} from 'react';
import './App.css';
import Counters from './components/counters'
import Nav from './components/nav'

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 2 },
      { id: 2, value: 2 },
      { id: 3, value: 2 },
      { id: 4, value: 2 }
    ]
    
  }
  handleIncrement = counter => {
    const counters = [...this.state.counters]
    const index = counters.indexOf(counter)
    counters[index] = { ...counter }
    counters[index].value++
    this.setState({ counters })

  }
  handleDecrement = counter => {
    const counters = [...this.state.counters]
    const index = counters.indexOf(counter)
    counters[index] = { ...counter }
    counters[index].value--
    this.setState({ counters })
  }
  handleReset = () => {
    let counters = this.state.counters.map(c => {
      c.value = 0;
      return c
    })
    this.setState({ counters })
  }
   handleDelete = (id) => {
    let counters = this.state.counters.filter(c => c.id !== id)
    this.setState({ counters })
  }
  render() {
    return (
      <>
        <Nav  totalProducts = {this.state.counters.filter(c => c.value > 0)}/>
        <main className="container">
          <Counters 
          counters = {this.state.counters}
          onDelete = {this.handleDelete}
          onReset = {this.handleReset}
          onDecrement={this.handleDecrement}
          onIncrement = {this.handleIncrement}
          />
        </main>
      </>
    );
  }

}

export default App;
