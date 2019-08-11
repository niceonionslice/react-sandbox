import { createStore, replaceReducer } from 'redux';

// タスクの初期化を実施
const initialState = {
  tasks: [],
};


// Reducerを２つ定義します。

// 追加系のタスク
function addReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TASK':
        return {
          ...state,
          tasks: state.tasks.concat([action.payload.task])
        };
      break;
    default:
      return state;
  }
}

// リセット系のタスク
function resetReducer(state = initialState, action) {
  switch (action.type) {
    case 'RESET_TASK':
        return {
          ...state,
          tasks: []
        };
      break;
    default:
      return state;
  }
}

const store = createStore(addReducer);

const addTask = (task) => ({
  type: 'ADD_TASK',
  payload: {
    task
  }
});

store.subscribe(() => console.log(store.getState()));
store.dispatch(addTask('Storeを学ぶ'));
store.dispatch(addTask('もっとStoreを学ぶ'));
store.dispatch(addTask('もっともっともっともっとStoreを学ぶ'));
store.dispatch(addTask('もっともっともっともっともっとStoreを学ぶ'));
store.dispatch(addTask('もっともっともっともっともっともっとStoreを学ぶ'));

// resetReducerに入れ替えて、RESET_TASKというtypeを持つActionを発行する
// 状態管理する処理自体を置き換えることができる。
store.replaceReducer(resetReducer);
console.log(store.getState().tasks);

const resetTask = () => ({
  type: 'RESET_TASK'
});

store.dispatch(resetTask());

// reducerを入れ替えているのでADD_TASKの状態変更については受け付けない。
store.dispatch(addTask('もっともっともっともっともっともっともっともっとStoreを学ぶ'));
