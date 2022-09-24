import { Container, Flex, Heading, Text } from '@chakra-ui/react'

interface TileProps {
    pair: string
    o: number
    c: number
    h: number
    l: number
    v: number
}

export default function Tile(props: TileProps) {
    const {
        pair,
        v,
        o
    } = props

    return (
        <Container
            borderWidth={2}
            borderRadius={10}
            bgColor='gray.300'
            color='black'
            width='120px'
            height='120px'
        >
            <Flex w='full' h='full' align='center' direction='column' justify='space-between'>
                <Heading size='sm' pt={3}>
                    {pair}
                </Heading>
                <Flex direction='column' pb={5}>
                    <Text>
                        {v.toFixed(2)}
                    </Text>
                    <Text>
                        {o.toFixed(2)}
                    </Text>
                </Flex>
            </Flex>
        </Container>
    )
}