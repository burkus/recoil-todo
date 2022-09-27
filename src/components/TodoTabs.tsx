import { Container, Tabs, TabList, Tab } from "@chakra-ui/react";
import { useRecoilValue, useRecoilCallback } from "recoil";
import store from "store";
import ViewState from "types/view-state";
import TodoList from "./TodoList";

export default function TodoTabs() {
    const items = useRecoilValue(store.filteredItems)

    const handleChange = useRecoilCallback(
        ({ set }) =>
            (index: number) =>
                set(store.viewState, ['all', 'completed', 'has-description'][index] as ViewState))

    return (
        <Container>
            <Tabs onChange={handleChange}>
                <TabList>
                    <Tab>All</Tab>
                    <Tab>Completed</Tab>
                    <Tab>Has Description</Tab>
                </TabList>
            </Tabs>
            <TodoList items={items} />
        </Container>
    )
}