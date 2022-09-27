import store from 'store'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { useMemo, useCallback } from 'react'

const cssFilter = 'blur(0.5px)'

export default function useHighlight(id: string) {
    const highlightedTodoId = useRecoilValue(store.highlightedTodo)
    const setHighlightedTodo = useSetRecoilState(store.highlightedTodo)
    const setHighlight = useCallback(() => setHighlightedTodo(id), [setHighlightedTodo, id])
    const removeHighlight = useCallback(() => setHighlightedTodo(''), [setHighlightedTodo, id])
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