import React, { Component } from 'react'

export class Incrementer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            n: props.start,
            timer: null
        }
        this.toggle = this.toggle.bind(this)
        this.reset = this.reset.bind(this)
    }

    componentDidMount() {
        this.play()
    }

    // Il ne faut pas appeller setState au niveau de cet évènement
    componentWillUnmount() {
        window.clearInterval(this.state.timer)
    }

    increment() {
        this.setState((state, props) => ({ n: state.n + props.step }))
    }

    pause(e) {
        window.clearInterval(this.state.timer)
        this.setState({
            timer: null
        })
    }

    play() {
        window.clearInterval(this.state.timer)
        this.setState({
            timer: window.setInterval(this.increment.bind(this), 1000)
        })
    }

    toggle() {
        return this.state.timer ? this.pause() : this.play()
    }

    label() {
        return this.state.timer ? 'Pause' : 'Play'
    }

    reset() {
        this.pause()
        this.play()
        this.setState((state, props) => ({ n: props.start }))
    }

    render() {
        return <div>
            Valeur : {this.state.n}
            <button onClick={this.toggle}>{this.label()}</button>
            <button onClick={this.reset}>Reinitialize</button>
            {/* {this.state.timer ?
          <button onClick={this.pause.bind(this)}>Pause</button> :
          <button onClick={this.play.bind(this)}>Play</button>
        } */}
        </div>
    }
}

Incrementer.defaultProps = {
    start: 0,
    step: 1
}