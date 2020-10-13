import React from 'react';
import './css/App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Form from '../pages/Form/Form';
import ListTodos from '../components/ListTodos/ListTodos';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          task: undefined,
          id: undefined,
          completed: undefined
        }
      ],
      newTask: undefined,

    }
  }

  handleFormSubmit = (newTask) => {
    this.setState(
      {
        todos: [...this.state.todos, newTask],

      },
      () => {
        localStorage.setItem("todos", JSON.stringify(this.state.todos));
      }
    );
  }

  handleTruthChanged = (id) => {
    console.log(id);
    const todos = this.state.todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo
    });
    this.setState({ todos, todo: '' },
      () => {
        localStorage.setItem("todos", JSON.stringify(this.state.todos));
      })
    // this.setState({ isTrue: newTruth });
  };

  componentDidMount() {
    const todos = localStorage.getItem("todos");
    if (todos) this.setState({ todos: JSON.parse(todos) });
  }


  deleteFromArray = id => {
    console.log(id);
    this.setState(state => {
      const todos = state.todos.filter(todo => todo.id !== id);
      return {
        todos,
      };
    },
      () => {
        localStorage.setItem("todos", JSON.stringify(this.state.todos));
      },
    );

  };

  render() {
    return (
      <Router>
        <div className='App'>
          <div>
            <h1 className="big-headline">GET <span>SH</span>IT DONE.</h1>
          </div>
          <nav>
            <ul>
              <Link className="nav-link" to="/">my list</Link>
            </ul>
            <ul>
              <Link className="nav-link" to="/form">+ add new one</Link>
            </ul>
          </nav>
          <Switch>
            <Route exact path="/">
              <div className="list-todo">
                {this.state.todos && this.state.todos.map((todo, id) => (
                  <ListTodos key={"todo" + id} id={todo.id} completed={todo.completed} task={todo.task} findToDelete={this.deleteFromArray} onTruthChanged={this.handleTruthChanged} />
                ))}
              </div>
            </Route>
            <Route path="/form" component={(props) =>
              <Form {...props} onFormSubmitted={(this.handleFormSubmit)}
              />
            }
            >
            </Route>
          </Switch>
        </div>
      </Router >

    );
  }
}


export default App;



