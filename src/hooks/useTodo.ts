import { useMemo } from "react";
import { useRecoilState } from "recoil";
import store from "store";
import TodoItem from "types/todo-item";
import { update, remove, toggleDone } from "lib/todo";
import { pipe } from "lib/app";

export default function useTodo(item: TodoItem) {
    const [todos, setTodos] = useRecoilState(store.todoItems)

    return useMemo(() => ({
        remove: () => pipe<TodoItem>(remove, setTodos)(item),
        toggle: () => pipe<TodoItem>(toggleDone, update, setTodos)(item)
    }), [todos, setTodos])
}