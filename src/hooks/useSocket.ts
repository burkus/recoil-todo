import { socketContext } from "context/SocketContext";
import { useContext } from "react";

export default function useSocket() {
    const { socket } = useContext(socketContext)
    return socket
}