import React from 'react';

export default class Form extends React.Component {
    state = {
        todo: ''
    };

    handleFormSubmit = (event) => {
        event.preventDefault();

        let newTask = {
            task: this.state.todo,
            id: Date.now(),
            completed: false
        };

        const { onFormSubmitted, history } = this.props;
        onFormSubmitted(newTask);
        history.push("/");
    };


    handleInputChanged = (event) => {
        this.setState({ todo: event.target.value })
    };

    render() {
        return (
            <form className="todos-form" onSubmit={this.handleFormSubmit} >
                <h2>What should be done?</h2>
                <input id="todo" placeholder="Type here" onChange={this.handleInputChanged} />
                <button type="submit">Submit</button>
            </form>
        );
    }
}




