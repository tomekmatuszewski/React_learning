import React, { Component } from 'react'
import ToDoItem from '../../components/ToDoItem/index.js'
import NewTodoForm from '../../components/NewToDoForm/index.js'


class ToDoList extends Component {

    static defaultProps = {
      tasks: [
        {done: true, text: 'Record a ReactJS video'},
        {done: false, text: 'Go for a walk'}
      ],
      title: "My stuff"
    }

    state = {
      tasks: this.props.tasks,
      draft: ""
    }
  
    updateDraft = event => {
      this.setState({draft: event.target.value})
    }
  
    addTask = () => {
      const new_item = {
        text: this.state.draft
      }
      this.setState({
        tasks: [...this.state.tasks, new_item],
        draft: ""
      })
    }
  
    render() {
      const { title } = this.props
      const { tasks } = this.state
      return (
        <div>
          <h1>{title}</h1>
          {
            tasks.map(task => <ToDoItem text={task.text} done={task.done}/>)
          }
          <NewTodoForm onSubmit={this.addTask} onChange={this.updateDraft} />

        </div>
      )
    }
  }

  export default ToDoList