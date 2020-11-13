import React from 'react'

const NewTodoForm = ({onChange, onSubmit}) => (
    <div>
        <input type='text' onChange={onChange} />
        <button type='submit' onClick={onSubmit}>Add</button>
    </div>
  )
  
export default NewTodoForm