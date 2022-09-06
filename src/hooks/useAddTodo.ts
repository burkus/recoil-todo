import { useRecoilState } from "recoil";

import { add, createTodo } from 'lib/todo'
import { pipe } from "lib/app";
import { useCallback, useMemo } from "react";
import store from "store";
import TodoItem from "types/todo-item";

export default function useAddTodo() {
    const [todos, setTodos] = useRecoilState(store.todoItems)

    const addTodoToList = useCallback((item: TodoItem) => add(item, todos), [todos])
    const addTodoToStore = useMemo(() => pipe(createTodo, addTodoToList, setTodos), [addTodoToList, setTodos])
    const addTodo = (title: string, description: string) => addTodoToStore({
        title,
        description
    })

    return addTodo
}