import { useMemo } from "react";
import { useRecoilState } from "recoil";
import store from "store";
import TodoItem from "types/todo-item";
import { update, remove, toggleDone } from "lib/todo";
import { compose } from "lib/app";

export default function useTodo(item: TodoItem) {
    const [todos, setTodos] = useRecoilState(store.todoItems)

    return useMemo(() => ({
        update: compose(setTodos, () => update(item, todos)),
        remove: compose(setTodos, () => remove(item, todos)),
        toggle: compose(setTodos, () => toggleDone(item, todos))
    }), [todos, setTodos])
}