import { Stack } from "@chakra-ui/react";
import TodoItemType from "types/todo-item";

import TodoItem from "./TodoItem";

interface TodoListProps {
    items: TodoItemType[]
}

export default function TodoList({ items }: TodoListProps) {
    return (
        <Stack spacing={3}>
            {items.map(item => <TodoItem key={item.id} item={item} />)}
        </Stack>
    )
}