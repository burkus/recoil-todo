import { Checkbox, Text, Flex, IconButton } from "@chakra-ui/react";
import { CloseIcon } from '@chakra-ui/icons'
import useTodo from "hooks/useTodo";
import TodoItemType from "types/todo-item";

interface TodoItemProps {
    item: TodoItemType
}

export default function TodoItem({
    item
}: TodoItemProps) {
    const { title, description, complete } = item
    const { toggle, remove } = useTodo(item)
    return (
        <Flex
            borderBottomWidth={1}
            borderColor='black'
            padding={1}
            align='center'
            justify='space-between'
        >
            <Flex
                gap={3}
                align='center'
            >
                <Checkbox
                    size={'lg'}
                    isChecked={complete}
                    onChange={toggle}
                />
                <Text fontSize={'large'}>
                    {title}
                </Text>
                <Text fontSize={'smaller'}>
                    {description}
                </Text>
            </Flex>

            <IconButton
                onClick={remove}
                icon={<CloseIcon />}
                aria-label='Remove Todo'
            />
        </Flex>
    )
}