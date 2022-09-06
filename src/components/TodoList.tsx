import { Stack } from "@chakra-ui/react";
import { useRecoilValue } from "recoil";
import store from "store";
import TodoItemType from "types/todo-item";

import TodoItem from "./TodoItem";

interface TodoListProps {
    items: TodoItemType[]
}

export default function TodoList({ items }: TodoListProps) {
    return (
        <Stack spacing={3}>
            {items.map((item, index) => <TodoItem key={index} item={item} />)}
        </Stack>
    )
}