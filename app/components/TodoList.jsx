var React = require('react');
var Todo = require('Todo');
var TodoList = React.createClass({

  render: function() {
    var {todos} = this.props;
    var renderTodos = () => {
      return todos.map((todo) => {
        return (
          // onToggle gets passed to Todo
          <Todo key={todo.id} {...todo} onToggle={this.props.onToggle} />
        );
      });
    };

    return (
      <div>
        {renderTodos()}
      </div>
    );
  }
});

module.exports = TodoList;
