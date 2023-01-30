import { Dispatch, InitialState } from "./appContext"

export default function AppReducer(state: InitialState, action: Dispatch) {
    let newState = {}
    action.type.forEach((type, i) => {
        switch (type) {
            case 'SET_MY_DATA':
                localStorage.setItem('myData', JSON.stringify(action.value?.[i]))
                return newState = { ...newState, ...action.value?.[i] }
        }
    })
    return {
        ...state,
        ...newState
    }
}