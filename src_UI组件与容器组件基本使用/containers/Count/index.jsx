import CountUI from '../../components/Count'
import {connect} from 'react-redux'
import {IAction, DAction, WaitIAction} from '../../components/redux/count_action'

// get 属性
function mapStateToProps(state){
    return {count: state}
}

// set 属性
function mapDispatchToProps(dispatch){
    return{
        increment: (number)=>{
            dispatch(IAction(number))
        },
        decrement: (number)=>{
            dispatch(DAction(number))
        },
        incrementAsync: (number, time)=>{
            dispatch(WaitIAction(number, time))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CountUI)