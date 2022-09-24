import { atomFamily, atom } from "recoil";
import Subscription from "types/subscription";

const subscriptions = atom<Subscription[]>({
    key: 'subscriptions',
    default: []
})