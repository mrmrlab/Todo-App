import React, { Component } from 'react';
import './TodoList.css';

class TodoList extends Component {
  render() {
    const {
      title,
      description,
      ...props
    } = this.props;

    return (
      <div className="TodoList" {...props}>
        <div className="TodoList-title">{title}</div>
        <div className="TodoList-description">{description}</div>
      </div>
    );
  }
}

export default TodoList;
