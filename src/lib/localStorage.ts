import { AtomEffect } from "recoil"
import TodoItem from "types/todo-item"

export const localStorageEffect: (key: string) => AtomEffect<TodoItem[]> =
    (key: string) => ({ onSet }) => {
        if (typeof localStorage !== 'undefined') {
            onSet((newValue, _, isReset) => {
                isReset ? localStorage.removeItem(key) : localStorage.setItem(key, JSON.stringify(newValue))
            })
        }
    }