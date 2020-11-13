const serverUrl = 'http://localhost:8000'

export const todoItemApiUrl = id => id ? `${serverUrl}/todo_items/${id}` : `${serverUrl}/todo_items`