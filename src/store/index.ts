import { atom, selector } from "recoil";
import TodoItem from "types/todo-item";
import ViewState from "types/view-state";

const todoItems = atom<TodoItem[]>({
    key: 'TodoItems',
    default: []
})

const filteredItems = selector<TodoItem[]>({
    key: 'CompletedTodoItems',
    get: ({ get }) => {
        const view = get(viewState)
        const items = get(todoItems)

        if (view === 'completed') return items.filter(item => item.complete)
        if (view === 'has-description') return items.filter(item => item.description.length > 0)

        return items
    }
})

const viewState = atom<ViewState>({
    key: 'ViewState',
    default: 'all'
})

export default {
    todoItems,
    filteredItems,
    viewState
}