import { atom, selector, selectorFamily } from "recoil";
import TodoItem from "types/todo-item";
import ViewState from "types/view-state";
import { localStorageEffect } from 'lib/localStorage'
import { getMatch } from "lib/string";
import tileSlice from './tiles'

const todoItems = atom<TodoItem[]>({
    key: 'TodoItems',
    default: [],
    effects: [localStorageEffect('todos')]
})

const highlightedTodo = atom<string>({
    key: 'HighlightedTodo',
    default: ''
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

const matchTodos = selectorFamily<TodoItem[], string>({
    key: 'MatchTodos',
    get: (match: string) => ({ get }) => {
        const todos = get(todoItems)
        if (match.length > 0) return todos
            .sort((a, b) => getMatch(a.title, match) - getMatch(b.title, match))
        return []
    }
})

export default {
    todoItems,
    filteredItems,
    viewState,
    highlightedTodo,
    matchTodos,
    tile: tileSlice
}