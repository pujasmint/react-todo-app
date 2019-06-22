import React, { Component } from 'react'

export class AddTodo extends Component {
    state= {
      title: '',
    }

    onChangeTodoName = (e) => {
      this.setState({
          title: e.target.value
      });
    }

    todoSumbitted = (e) => {
      e.preventDefault();
      this.props.todoAdded(this.state.title)
      this.setState({
        title: ''
    });
    }


    render() {
        return (
            <form onSubmit={this.todoSumbitted} style={{ display: 'flex' }}>
                <input 
                type="text" 
                name="title" 
                style={{flex: '10', padding: '5px'}}
                placeholder="Add Todo..."
                onChange={this.onChangeTodoName}
                value={this.state.title}
                />
                <input 
                type="submit" 
                value="Submit"
                className="btn"
                style={{flex: '1'}}
                />
            </form>
        )
    }
}

export default AddTodo
