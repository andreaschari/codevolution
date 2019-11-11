import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count : 0
        }
    }
    
    increment(){
        this.setState(prevState => ({ count : ++prevState.count}))
    }

    render() {
        return (
            <div>
                <div>Count  - {this.state.count}</div>
                <button onClick={() => this.increment()}>Click Me</button>
            </div>

        )
    }
}

export default Counter
