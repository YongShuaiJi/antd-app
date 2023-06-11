
import {INCREMENT, DECREMENT} from './constant'
// function createIAction(data){
//     return {type: 'increment', data}
// }

// function createDAction(data){
//    return {type: 'decrement', data}
// }



export const IAction = (data) =>({type: INCREMENT, data})

export const DAction = (data) =>({type: DECREMENT, data})



