import { Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Tile from "./Tile";



export default function TileContainer() {
    const [tiles, setTiles] = useState<{
        pair: string
        o: number
        c: number
        h: number
        l: number
        v: number
    }[]>([])

    useEffect(() => {
        const randomTile = () => ({
            pair: 'BTC-USD',
            o: Math.random() * 10000,
            c: Math.random() * 10000,
            h: Math.random() * 10000,
            l: Math.random() * 10000,
            v: Math.random() * 10000,
        })
        setTiles(
            Array.from({ length: 100 }).map(() => randomTile())
        )
    }, [])


    return (
        <Flex
            flexWrap='wrap'
            gap={2}
        >
            {tiles.map((tile, index) => <Tile key={index} {...tile} />)}
        </Flex>
    )
}