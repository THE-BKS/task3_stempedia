// import { Reducer } from 'react';
// import { handleInput } from '../actions/actions'

// import { store } from "../Store/store";

export default function inputData(state = [], action) {
    // let valueO.
    // console.log(action.data);

    switch (action.type) {
        case 'inputVal':
            return { inputval: action.data }
            break;
        default:
            return state;
    }

}