import React from 'react';
import { render } from 'react-dom';
import tasksReducer from './reducers/tasks';
import TodoApp from './components/TodoApp';
import { createStore } from 'redux';


// 状態を監理するためのstoreを定義
const store = createStore(tasksReducer);
store.subscribe(() => console.log(store.getState()));

function renderApp(store) {
  render(
    <TodoApp store={store} />,
    document.getElementById('root')
  );
}
// // viewに描画する。
store.subscribe(() => renderApp(store));
// // 初回表示するために呼び出しが必要
renderApp(store);
