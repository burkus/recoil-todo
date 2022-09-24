import { useMemo } from "react";
import { useSetRecoilState } from "recoil";
import store from "store";
import TodoItem from "types/todo-item";
import { update, remove, toggleDone } from "lib/todo";
import { pipe } from "lib/app";

export default function useTodo(item: TodoItem) {
    const setTodos = useSetRecoilState(store.todoItems)

    return useMemo(() => ({
        remove: () => pipe<TodoItem>(remove, setTodos)(item),
        toggle: () => pipe<TodoItem>(toggleDone, update, setTodos)(item)
    }), [setTodos, item])
}