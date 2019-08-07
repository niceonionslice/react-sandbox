import React, { Component } from 'react';

class TodoInput extends Component {

  // コンストラクタ
  constructor(props) {
    super(props);

    // フォームの初期値
    this.state = {
      inputValue: "",
    }

    // bindで呼び出しのメソッドのコンテキストが自分自信であること明示的に宣言
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  // フォームを入力する毎にstateの情報を更新する
  handleChange(e) {
    this.setState({
      inputValue: e.target.value,
    })
  }

  // 引数のeはブラウザから受け取れEventオブジェクトである。
  handleClick(e) {
    const inputValue = this.state.inputValue;
    this.props.addTodo(inputValue);
    this.state.inputValue = '';
  }

  // レンダリングの作業があるので入力する毎にinputタグのvalue属性が更新されている。ブラウザで確認すると入力毎にvalueが更新されていることが確認できる。
  render() {
    return (
      <div>
        <input placeholder='新規TODOを入力してください' className='todoinput-form__input' value={this.state.inputValue} onChange={this.handleChange} />
        <button onClick={this.handleClick} >登録</button>
      </div>
    );
  }
}

export default TodoInput;
