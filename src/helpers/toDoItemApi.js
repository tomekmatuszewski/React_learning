import { todoItemApiUrl } from './routes'
import * as api from './api'


export const getAll = () => 
    api.get(todoItemApiUrl())


export const create = params =>
    api.post(todoItemApiUrl(), { todo_item: { ...params }})