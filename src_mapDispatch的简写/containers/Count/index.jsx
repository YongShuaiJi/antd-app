import CountUI from '../../components/Count'
import {connect} from 'react-redux'
import {IAction, DAction, WaitIAction} from '../../components/redux/count_action'

// get 属性
const mapStateToProps = (state) =>{
    return {count: state}
}

// set 属性
const mapDispatchToProps = (dispatch) =>{
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

// export default connect(mapStateToProps, mapDispatchToProps)(CountUI)

// 来自框架API 提供的简写方式
export default connect(
    state => ({count: state}),
    {
        increment: IAction,
        decrement: DAction,
        incrementAsync: WaitIAction
    }
)(CountUI)

