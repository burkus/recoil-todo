import { createContext, useMemo, useEffect, useState } from "react";
import { websocketClient } from "@polygon.io/client-js";

interface SocketContextParams {
    socket: WebSocket | null
}

interface SocketProviderProps {
    children: JSX.Element | JSX.Element[]
}

export const socketContext = createContext<SocketContextParams>({
    socket: null
})

export default function SocketProvider({ children }: SocketProviderProps) {
    const [socket, setSocket] = useState<WebSocket | null>(null)
    useEffect(() => {
        const client = websocketClient('h61Kasq_tUUppdCWnVhjAkjMf_oIppMy').crypto()
        setSocket(client)
    }, [setSocket])

    const value = useMemo(() => ({
        socket
    }), [socket])

    return (
        <socketContext.Provider
            value={value}
        >
            {children}
        </socketContext.Provider>
    )
}