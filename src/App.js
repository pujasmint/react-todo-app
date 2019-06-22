import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Todos from './components/Todos'
import './App.css';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
import axios from 'axios';

class App extends React.Component{

  state = {
    todos: []
  }; 

  componentDidMount() {
     axios.get("https://jsonplaceholder.typicode.com/todos?_limit=5")
     .then(res => this.setState({todos: res.data}));
  }

  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if(todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    })
  }

  deleteTodo = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(res => this.setState({
      todos: this.state.todos.filter(todo => {
        if(todo.id !== id) {
          return true;
        }
        return false;
      })
    }));
    
  }

  todoAdded = (title) => {
    axios.post("https://jsonplaceholder.typicode.com/todos", { title ,  completed: false})
    .then(res => this.setState({
      todos: [...this.state.todos, res.data]
    }));
  }
  
  render(){
    return (
      <Router>  
        <div className="App">
          <div className="conatiner">
              <Header />
              <Route exact path="/" render={props => (
                <>
                   <AddTodo todoAdded={this.todoAdded}/> 
                   <Todos todos={this.state.todos} markComplete={this.markComplete} deleteTodo={this.deleteTodo}/>
                </>
              )} />
              <Route path="/about"  component={About}/>
              
          </div>
        </div>
      </Router>  
    );
  }
}
 

export default App;
