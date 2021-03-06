const axios = require('axios');

const INITIAL_STATE = {
    name: 'Hung',
    datastamp: [],
    count: 0,
    load: false,
    add: false
};

export const GET_DATA = () => ({
    type: 'getData'
});

export const SET_COUNTING = (num) => ({ type: 'counter', number: num });

export const ASYNC_SETDATA = (type) => dispatch => {
    axios.get("http://localhost:3000/timestamp")
        .then(response => {
            dispatch({ type: 'setData', data: response.data })
        },
            reject => dispatch({ type: 'setData', data: [] })
        );
};

export const ASYNC_ADD_DATA = (data) => dispatch => {
    axios.post("http://localhost:3000/timestamp", data)
        .then(
            () => {
                dispatch(ASYNC_SETDATA('set'));
            }
        )
}

export const ASYNC_REMOVE_DATA = (id) => dispatch => {
    axios.delete("http://localhost:3000/timestamp/" + id)
        .then(() => {
            dispatch(ASYNC_SETDATA('set'));
        });
}

export default function reducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'setData':
            return { ...state, datastamp: action.data, add: true };
        case 'getData':
            return { ...state, oke: 'oke' }
        case 'insert':
            const datastamppush = [...state.datastamp, ...action.data];
            return { ...state, datastamp: datastamppush, load: !state.load }
        case 'counter':
            return { ...state, count: state.count + action.number }
        default:
            return state
    }
}