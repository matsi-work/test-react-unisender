
import axios from 'axios';
import { useEffect, useReducer } from 'react';

enum ActionListEnum {
    MAKE_REQUEST = 'MAKE_REQUEST',
    GET_DATA = 'GET_DATA',
    GET_DATA_USER = 'GET_DATA_USER',
    ERROR = 'ERROR'
}

type UserAction = 
    { type: ActionListEnum.MAKE_REQUEST } | 
    { type: ActionListEnum.GET_DATA, payload: { users: object[]} } | 
    { type: ActionListEnum.GET_DATA_USER, payload: { profile: any} } | 
    { type: ActionListEnum.ERROR, payload: { error: string} }

type State = {
    users: object[];
    profile: any;
    loading: boolean;
    error?: string;
}

const BASE_URL = 'https://api.github.com/';

function reducer(state: State, action: UserAction): State {
    switch (action.type) {
        case ActionListEnum.MAKE_REQUEST:
            console.log('work')
            return { loading: true, users: [], profile: [] }
        case ActionListEnum.GET_DATA:
            return { ...state, loading: false, users: action.payload.users }
        case ActionListEnum.GET_DATA_USER:
            return { ...state, loading: false, profile: action.payload.profile }
        case ActionListEnum.ERROR:
            return { ...state, loading: false, error: action.payload.error, users: [], profile: '' }
        default:
            return state;
    }
}

export function useFetchUsers(page: number = 1, login: string | undefined = undefined) {
    const [state, dispatch] = useReducer(reducer, { users: [], loading: true, profile: [] });

    useEffect(() => {
        dispatch({ type: ActionListEnum.MAKE_REQUEST });
        let apiUrl = BASE_URL + 'users?since=' + page + '&per_page=10';
        if(login) {
            apiUrl = BASE_URL + 'users/' + login
        }
        axios.get(apiUrl).then(res => {
            if(login) {
                dispatch({ type: ActionListEnum.GET_DATA_USER, payload: { profile: res.data } })
            } else {
                dispatch({ type: ActionListEnum.GET_DATA, payload: { users: res.data } })
            }
        }).catch(e => {
            if (axios.isCancel(e)) return;
            dispatch({ type: ActionListEnum.ERROR, payload: { error: e } })
        })
    }, [page, login])

    return state;
}