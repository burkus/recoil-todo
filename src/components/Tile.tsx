import { Container, Flex, Heading, Text } from '@chakra-ui/react'
import store from 'store'
import { useRef, FC, useState, useCallback } from 'react'
import { useRecoilValue } from 'recoil'
import useTile from 'hooks/useTile'

interface TileProps {
    id: string
}

const Tile: FC<TileProps> = ({ id }) => {
    const tileValue = useRecoilValue(store.tile.tiles(id))
    const increment = useTile(id)
    const renderCount = useRef<number>(0)
    const [animate, setAnimate] = useState(false)
    renderCount.current++

    const handleClick = useCallback(() => {
        increment()
        setAnimate(true)
    }, [setAnimate, increment])

    return (
        <Container
            borderWidth={2}
            borderRadius={10}
            borderColor='blackAlpha.100'
            bgColor='gray.300'
            color='black'
            width='120px'
            height='120px'
            mx={0}
            animation={animate ? 'pop 150ms ease-in-out' : ''}
            onAnimationEnd={() => setAnimate(false)}
            cursor='pointer'
        >
            <Flex
                w='full'
                h='full'
                align='center'
                direction='column'
                justify='space-around'
                onClick={handleClick}
            >
                <Heading fontSize='md' pt={3}>
                    {id.substring(0, 4)}
                </Heading>
                <Flex direction='column' pb={3}>
                    <Text fontSize='xs'>
                        Value: {tileValue}
                    </Text>
                    <Text fontSize='xs'>
                        Renders: {renderCount.current}
                    </Text>
                </Flex>
            </Flex>
        </Container>
    )
}

export default Tile