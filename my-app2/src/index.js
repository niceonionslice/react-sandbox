import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';

// 監理するものの初期状態
const initialState =  {
  task: '',
  tasks: [],
};

// Reducerを定義する。状態としてINPUT_TASKとADD_TASKを定義
function tasksReducer(state = initialState, action) {
  // 状態監理というからこの形にしたけど、全部switchで定義するとなると人間の頭がおかしくなるよね。
  switch (action.type) {
    case 'INPUT_TASK':
    return {
      ...state,
      task: action.payload.task
    };
    case 'ADD_TASK':
    return {
      ...state,
      tasks: state.tasks.concat([action.payload.task])
    };
    default:
    return state;
  }
}

// 状態を監理するためのstoreを定義
const store = createStore(tasksReducer);
store.subscribe(() => console.log(store.getState()));



// 初回のタスクを追加するためのオブジェクトかな。
const inputTask = (task) => ({
  type: 'INPUT_TASK',
  payload: {
    task
  },
});

// タスクを追加するためのオブジェクトかな。
const addTask = (task) => ({
  type: 'ADD_TASK',
  payload: {
    task
  },
});


// renderで表示するためのviewを定義
//textを入力する毎にStoreのtaskが状態変化する。
//buttonをクリックしたタイミングでtasksのリストにタスクを追加する。
function TodoApp({ store }) {
  const { task, tasks } = store.getState();
  return (
    <div>
    <input type='text' onChange={(e) => store.dispatch(inputTask(e.target.value))} />
    <input type='button' value='add' onClick={(e) => store.dispatch(addTask(task))} />
    <ul>
      {
        tasks.map(function(item, i) {
          return (
            <li key={i}>{item}</li>
          );
        })
      }
    </ul>
    </div>
  );
}


function renderApp(store) {
  render(
    <TodoApp store={store} />,
    document.getElementById('root')
  );
}
// viewに描画する。
store.subscribe(() => renderApp(store));
// 初回表示するために呼び出しが必要
renderApp(store);
