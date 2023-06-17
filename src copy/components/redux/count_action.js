import {INCREMENT, DECREMENT} from './constant'
import store from './store'
// function createIAction(data){
//     return {type: 'increment', data}
// }

// function createDAction(data){
//    return {type: 'decrement', data}
// }



export const IAction = (data) =>({type: INCREMENT, data})

export const DAction = (data) =>({type: DECREMENT, data})

export const WaitIAction = (data, time) => {
    // console.log('111')
    // setTimeout(()=>{
    //     store.dispatch(IAction(data));
    // }, time)
    return ()=>{
        setTimeout(()=>{
            store.dispatch(IAction(data));
        }, time)
    }
}



