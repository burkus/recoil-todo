
import TodoItem from "types/todo-item";

export const find = (todo: TodoItem, todos: TodoItem[]) =>
    todos.find(e => e.id == todo.id)

export const update = (todo: TodoItem) => (todos: TodoItem[]) => {
    const prev = find(todo, todos)
    if (prev) {
        const index = todos.indexOf(prev)
        const next = [...todos]
        next[index] = todo
        return next
    }
    return todos
}

export const add = (newTodo: TodoItem) => (todos: TodoItem[]) => [newTodo, ...todos]

export const remove = (todo: TodoItem) => (todos: TodoItem[]) => {
    const index = todos.indexOf(todo)
    if (index >= 0) {
        return [...todos.slice(0, index), ...todos.slice(index + 1, todos.length)]
    }
    return todos
}

export const toggleDone = (todo: TodoItem) => {
    const newTodo = Object.assign({}, todo)
    newTodo.complete = !newTodo.complete
    return newTodo
}

export const createTodo = ({ title, description }: Partial<TodoItem>) => ({
    title: title ?? '',
    description: description ?? '',
    complete: false,
    id: window.crypto.randomUUID()
})