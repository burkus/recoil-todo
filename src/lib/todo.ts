
import TodoItem from "types/todo-item";
import { compose, pipe } from "./app";

export const find = (todo: TodoItem, todos: TodoItem[]) =>
    todos.find(e => e.title === todo.title)

export const update = (newTodo: TodoItem, todos: TodoItem[]) => {
    const prev = find(newTodo, todos)
    if (prev) {
        const index = todos.indexOf(prev)
        const next = [...todos]
        next[index] = newTodo
        return next
    }
    return todos
}

export const add = (newTodo: TodoItem, todos: TodoItem[]) => [newTodo, ...todos]

export const remove = (todo: TodoItem, todos: TodoItem[]) => {
    const index = todos.indexOf(todo)
    if (index >= 0) {
        return [...todos.slice(0, index), ...todos.slice(index + 1, todos.length)]
    }
}

export const toggleDone = (todo: TodoItem, todos: TodoItem[]) => {
    const newTodo = Object.assign({}, todo)
    newTodo.complete = !newTodo.complete
    return update(newTodo, todos)
}

export const createTodo = ({ title, description }: Partial<TodoItem>) => ({
    title: title ?? '',
    description: description ?? '',
    complete: false
})