import store from 'store'
import { useRecoilState } from 'recoil'
import { useMemo, useCallback } from 'react'

const cssFilter = 'blur(0.5px)'

export default function useHighlight(id: string) {
    const [highlightedTodoId, setHighlightedTodoId] = useRecoilState(store.highlightedTodo)
    const setHighlight = useCallback(() => setHighlightedTodoId(id), [setHighlightedTodoId, id])
    const removeHighlight = useCallback(() => setHighlightedTodoId(''), [setHighlightedTodoId, id])
    const filter = useMemo(() => {
        const highlighted = highlightedTodoId === id
        return highlightedTodoId.length > 0 ? highlighted ? '' : cssFilter : ''
    }, [id, highlightedTodoId])

    return {
        filter,
        setHighlight,
        removeHighlight
    }
}