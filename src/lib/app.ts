import ViewState from "types/view-state"


export const compose = (f: any, g: any) => (x: any) => f(g(x))

export const pipe = (...fns: any[]) => (x: any) => fns.reduce((y, f) => f(y), x)

export const viewStateDescription: Record<ViewState, string> = {
    completed: 'Completed',
    all: 'All',
    'has-description': 'Has Description'
}