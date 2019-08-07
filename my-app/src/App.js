import React, { Component } from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import "./App.css"

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        { title: 'デフォルトTODO', id:0 },
      ],
      uniqueId: 1,
    };

    // addTodoメソッドで適切にstateを変更するための処理を追加
    // 今のところを意味がよくわかっていないが、コードを読む限りですが、this.addTodo.bindで自分自身のオブジェクトを渡している。
    // ↓ stateを変更するために用意したこのaddTodoメソッドはAppコンポーネントではなく別のコンポーネントが呼びます。この時呼び出し側がAppコンポーネントではないので
    // stateもtodoListもないという状態になってしまいます。bind(this)を呼び出すことで常にAppコンポーネントを参照することを強制することができるようです。
    this.addTodo = this.addTodo.bind(this);
    this.resetTodo = this.resetTodo.bind(this);
  }

  // todoをすべてクリアーするためにメソッド
  resetTodo() {
    this.setState({
      tasks: []
    })
  }

  // addTaskメソッドはTodoInputでもTodoListでもなくAppコンポーネントに定義する。
  // 理由はTaskはTodoアプリに紐づく情報のため。
  addTodo(title) {
    // オブジェクト型のこれはthis.stateの情報を保持するオブジェクトでaddTodoが
    // 呼び出される毎にthis.stateの情報の最新を保持する。
    const {
      tasks,
      uniqueId,
    } = this.state;

    // tasks.pushを利用して新規のtaskをtasksリストに追加する。
    // uniqueIdについてはid:になぜそのままのuniqueIdを追加しているのか不明。（サンプルの誤記？）
    // だとするとユニークなIDにするためにそのままuniqueIdを付与するのではなくインクリメントしたidを渡すが正解。
    tasks.push({
      title,
      // クラス内部のメソッドを利用する場合はインスタンスメソッドであることを明示的に宣言してあげる。つまりthis.をつけて呼ぶ
      id: this.inclimentId(uniqueId),
    });

    // 配列のpushメソッドはもともとの変数に値を追加するメソッドなので、実際にはpushした時点でstareの状態は変更しています。
    // ですが、同じ配列に値を追加しているだけなので配列自体は変化していません。
    // 変更があったことを通知するためにsetStateを呼び出しています。
    this.setState({
      tasks,
      uniqueId: uniqueId + 1,
    });

  }

  inclimentId(id) {
    return id + 1;
  }

  render() {
    const tasks = [
    ];

    // 関数もpropsに渡すことができますので、Add.addTodo関数をTodoInputに渡します。
    return (
      <div className="App">
        <h1>TODO App</h1>
        <button onClick={this.resetTodo}>クリア</button>
        <TodoInput addTodo={this.addTodo}/>
        <TodoList tasks={this.state.tasks} />
      </div>
    );
  }
}

export default App;
