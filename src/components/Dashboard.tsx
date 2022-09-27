import { Heading, Container, Flex } from "@chakra-ui/react"
import AddTodo from "components/AddTodo"
import TodoTabs from "./TodoTabs"
import useLocalStorage from "hooks/useLocalStorage"
import TileContainer from "./TileContainer"

export default function Dashboard() {
    useLocalStorage()
    return (
        <div>
            <Heading
                bg='blue.500'
                padding={5}
                px={20}
                borderBottomRadius={10}
                color='white'
            >
                Another Todo App
            </Heading>
            <Flex width='full' paddingTop={10}>
                <Container centerContent>
                    <Heading size='lg' pb={5}>
                        Independent Rendering!
                    </Heading>
                    <TileContainer />
                </Container>
                <Container
                    borderWidth={0.5}
                    borderRadius={10}
                    padding={5}
                    bgColor='whiteAlpha.100'
                >
                    <AddTodo />
                    <Container width='full' paddingTop='3'>
                        <TodoTabs />
                    </Container>
                </Container>
                <Container>
                    Moar Stonks
                </Container>
            </Flex >
        </div>
    )
}