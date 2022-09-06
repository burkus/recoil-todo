import { Heading, Container } from "@chakra-ui/react"
import AddTodo from "components/AddTodo"
import TodoTabs from "./TodoTabs"

export default function Dashboard() {
    return (
        <div>
            <Heading bg='gray.200' paddingTop={2} paddingLeft={5} paddingBottom={5}>
                Another Todo App
            </Heading>
            <Container maxW='2xl' paddingTop={10}>
                <Container paddingBottom={3}>
                    <AddTodo />
                </Container>
                <TodoTabs />
            </Container >
        </div>
    )
}