import ViewState from "types/view-state"

export const compose = <T>(f: any, g: any) => (x: T) => f(g(x))

export const pipe = <T>(...fns: any[]) => (x: T) => fns.reduce((y, f) => f(y), x)

export const viewStateDescription: Record<ViewState, string> = {
    completed: 'Completed',
    all: 'All',
    'has-description': 'Has Description'
}