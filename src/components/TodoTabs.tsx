import { Container, Flex, Button } from "@chakra-ui/react";
import { useRecoilValue, useRecoilCallback } from "recoil";
import store from "store";
import ViewState from "types/view-state";
import TodoList from "./TodoList";
import { viewStateDescription } from "lib/app";

export default function TodoTabs() {
    const items = useRecoilValue(store.filteredItems)
    const viewState = useRecoilValue(store.viewState)

    const handleClick = useRecoilCallback(({ set }) => (view: ViewState) => set(store.viewState, view))

    const getVariant = (view: ViewState) => viewState === view ? 'solid' : 'ghost'

    return (
        <Container>
            <Flex>
                {['all', 'completed', 'has-description'].map((view) => (
                    <Button
                        variant={getVariant(view as ViewState)}
                        onClick={() => handleClick(view as ViewState)}
                    >
                        {viewStateDescription[view as ViewState]}
                    </Button>
                ))}
            </Flex>
            <TodoList items={items} />
        </Container>
    )
}