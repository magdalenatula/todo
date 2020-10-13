import React from 'react';

export default class TodoList extends React.Component {

    handleButtonClicked = () => {
        // console.log(this.props.id);
        this.props.onTruthChanged(this.props.id);
    };
    removeButtonClicked = () => {
        // console.log(this.props.id);
        this.props.findToDelete(this.props.id);
    };

    render() {

        return (
            <ul className='single-todo'>
                <li>
                    <div onClick={this.handleButtonClicked} >
                        <p>{this.props.completed == true ? "👏" : "😱"}</p> <p className={this.props.completed == false ? "todo-active" : "todo-completed"}> {this.props.task}</p>
                    </div>
                    <button onClick={this.removeButtonClicked}>🗑</button>
                </li>
            </ul>
        );
    }
}
