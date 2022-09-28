import { useSetRecoilState } from "recoil";
import store from "store";
import { increment } from "lib/number";
import { useCallback } from "react";

export default function useTile(id: string) {
    const setTile = useSetRecoilState(store.tile.tiles(id))
    return useCallback(() => setTile(increment), [setTile])
}