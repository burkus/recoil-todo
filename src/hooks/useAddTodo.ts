import { useSetRecoilState } from "recoil";

import { add, createTodo } from 'lib/todo'
import { pipe } from "lib/app";
import { useMemo } from "react";
import store from "store";
import { TodoForm } from "types/todo-form";

export default function useAddTodo() {
    const setTodos = useSetRecoilState(store.todoItems)

    return useMemo(() => pipe<TodoForm>(createTodo, add, setTodos), [setTodos])
}