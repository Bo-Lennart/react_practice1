import React from "react";

class StatefullGreeting extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            introduction: "Hello!",
            buttonText: "Exit",
            count: 0
        };
    }

    handleClick() {
        this.setState({
            introduction: this.state.introduction === "Hello!" ? "Goodbye!" : "Hello!",
            buttonText: this.state.introduction === "Enter" ? "Enter" : "Exit",
        }, ()=> {
            console.log('NEW STATE', this.state.introduction);
            console.log('NEW STATE', this.state.buttonText);
        });
    }

    incrementClick() {
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.introduction} {this.props.greeting}</h1>
                <button onClick={() => this.handleClick()}>
                    {this.state.buttonText}
                </button>
                <button onClick={() => this.incrementClick()}>
                    Increment
                    </button>
                <p>You clicked {this.state.count} times</p>
            </div>
        )
    }
}

export default StatefullGreeting;