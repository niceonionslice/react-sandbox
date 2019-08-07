import React, { Component } from 'react';

class TodoInput extends Component {
  render() {
    return (
      <div>
        <input placeholder='新規TODOを入力してください' className='todoinput-form__input' />
        <button>登録</button>
      </div>
    );
  }
}

export default TodoInput;
