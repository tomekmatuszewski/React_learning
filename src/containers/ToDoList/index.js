import React, { Component } from 'react'
import ToDoItem from '../../components/ToDoItem/index.js'
import NewTodoForm from '../../components/NewToDoForm/index.js'
import styled from 'styled-components'
import * as ToDoItemApi from '../../helpers/toDoItemApi'

const Container = styled.div`
  background: #2b2e39;
  margin: 0 auto;
  width: 80%;
  max-width: 600px;
  padding: 14px;
  border-radius: 14px;
  margin-top: 14px;
`

const Header = styled.h1`
  color: #fff;
`

const RemoveButton = styled.button`
  border-radius: 10px;
  background: red;
  padding: 5px;
  color: #fff;
  margin-bottom: 10px;
`

class ToDoList extends Component {

    componentDidMount = async () => {
      const tasks = await ToDoItemApi.getAll()
      this.setState({tasks: tasks})
    }

    static defaultProps = {
      tasks: [],
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
        title: this.state.draft,
      }
      this.setState({
        tasks: [...this.state.tasks, new_item],
        draft: ""
      })
    }

    removeAllTasks = () => {
      this.setState({tasks: [], draft: ""})
    }
  
    render() {
      const { title } = this.props
      const { tasks } = this.state
      return (
        <Container>
          <Header>{title}</Header>
          <RemoveButton onClick={this.removeAllTasks}>Remove All</RemoveButton>
          {
            tasks.map(task => <ToDoItem key={task.id} title={task.title} done={task.done}/>)
          }
          <NewTodoForm onSubmit={this.addTask} onChange={this.updateDraft} />
          

        </Container>
      )
    }
  }

  export default ToDoList