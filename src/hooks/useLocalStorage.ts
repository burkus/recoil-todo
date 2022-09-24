import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import store from 'store'

export default function useLocalStorage() {
    const setTodos = useSetRecoilState(store.todoItems)
    useEffect(() => {
        const localTodos = localStorage.getItem('todos')
        if (localTodos) setTodos(
            JSON.parse(localTodos)
        )
    }, [])
}