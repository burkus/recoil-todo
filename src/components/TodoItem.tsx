import { Checkbox, Text, Flex, IconButton } from "@chakra-ui/react";
import { CloseIcon } from '@chakra-ui/icons'
import useTodo from "hooks/useTodo";
import TodoItemType from "types/todo-item";
import useHighlight from 'hooks/useHighlight'

interface TodoItemProps {
    item: TodoItemType
}

export default function TodoItem({
    item
}: TodoItemProps) {
    const { title, description, complete, id } = item
    const { toggle, remove } = useTodo(item)
    const { filter, setHighlight, removeHighlight } = useHighlight(id)
    return (
        <Flex
            borderBottomWidth={1}
            borderColor='black'
            padding={1}
            align='center'
            justify='space-between'
            transition='ease-in-out'
            transitionDuration='200ms'
            _hover={{
                transform: 'scale(1.01)'
            }}
            onMouseEnter={setHighlight}
            onMouseLeave={removeHighlight}
            filter={filter}
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