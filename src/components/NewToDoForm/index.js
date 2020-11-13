import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  background: #232632;
  width: 80px;
  color: #00a7fa;
  height: 32px;
  font-size: 1.7em;
  border: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const TextInput = styled.input`
  padding: 5px;
  font-size: .7em;
  background: #232632;
  color: #d3d4d6;
  width: 100%;
  margin-right: 7px;
  border: 0px;
  -webkit-appearance: none;
`

const Contaner = styled.div`
  display: flex;
  justify-content: space-between;
  border: 2px solid #343744;
  background: #232632;
  border-radius: 10px;
  padding: 5px;
`

const NewTodoForm = ({onChange, onSubmit}) => (
    <Contaner>
        <TextInput type='text' onChange={onChange} placeholder="Type Something"/>
        <Button type='submit' onClick={onSubmit}>+</Button>
    </Contaner>
  )
  
export default NewTodoForm