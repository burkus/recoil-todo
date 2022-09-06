import { Container, Flex, Button } from "@chakra-ui/react";
import { useRecoilValue, useRecoilCallback } from "recoil";
import store from "store";
import ViewState from "types/view-state";
import TodoList from "./TodoList";

export default function TodoTabs() {
    const items = useRecoilValue(store.filteredItems)
    const viewState = useRecoilValue(store.viewState)

    const handleClick = useRecoilCallback(({ set }) => (view: ViewState) => set(store.viewState, view))

    const getVariant = (view: ViewState) => viewState === view ? 'solid' : 'ghost'

    return (
        <Container>
            <Flex>
                <Button
                    variant={getVariant('all')}
                    onClick={() => handleClick('all')}
                >
                    All
                </Button>
                <Button variant={getVariant('completed')} onClick={() => handleClick('completed')}>
                    Completed
                </Button>
                <Button variant={getVariant('has-description')} onClick={() => handleClick('has-description')}>
                    Descriptive
                </Button>
            </Flex>
            <TodoList items={items} />
        </Container>
    )
}