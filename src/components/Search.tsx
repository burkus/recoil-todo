import { Container, Input, Stack } from "@chakra-ui/react";
import { ChangeEvent, useCallback, useState } from "react";
import store from "store";
import { useRecoilValue } from "recoil";
import TodoList from "./TodoList";

const Search = () => {
    const [query, setQuery] = useState('')
    const todos = useRecoilValue(store.matchTodos(query))
    const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value)
    }, [setQuery])
    return (
        <Container
            borderWidth={0.5}
            borderRadius={10}
            padding={5}
        >
            <form>
                <Stack>
                    <Input type='search' onChange={handleChange} value={query} />
                    <Input maxW='100px' type='button' value='Search' />
                </Stack>
            </form>
            <TodoList items={todos} />
        </Container>
    )
}

export default Search