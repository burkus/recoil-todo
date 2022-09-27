import { Flex } from "@chakra-ui/react";
import { useEffect, useState, useRef } from "react";
import Tile from "./Tile";

export default function TileContainer() {
    const [tileIds, setTileIds] = useState<string[]>([])
    useEffect(() => {
        setTileIds(Array.from({ length: 20 }).map(() => window.crypto.randomUUID()))
    }, [setTileIds])

    return (
        <Flex
            flexWrap='wrap'
            gap={2}
        >
            {tileIds.map((id) => <Tile key={id} id={id} />)}
        </Flex>
    )
}