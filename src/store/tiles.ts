import { atomFamily } from "recoil";

const tiles = atomFamily<number, string>({
    key: 'Tiles',
    default: 0
})

export default {
    tiles
}