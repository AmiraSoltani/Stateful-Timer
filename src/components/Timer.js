import React from 'react'
import ElapsedTime from './ElapsedTime'
import Buttons from '../components/Buttons'

class Timer extends React.Component {
    constructor(props){
        super (props)
        this.state={
            timingEvents:[]
        }
    }
    addTimerEvent(){
        this.setState({
            timingEvents:[
                ...this.state.timingEvents,
                new Date()
            ]
        })
    }
    render (){
    return (
       <div>
           <ElapsedTime />
           <Buttons />
       </div>
    )
    }
}

export default Timer
