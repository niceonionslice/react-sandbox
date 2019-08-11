import { createStore } from 'redux';


// Taskの初期状態
const initialState = {
  tasks: [],
};

// tasksReducerの定義
// Reduxの第一引数には現在の状態を示すstateオブジェクトが渡ってきます。
// 初期状態としてinitialStateを代入します。
// Actionオブジェクトが渡されている。actionで渡されるオブジェクトはこんな感じ
// {
//   type: 'ADD_TASK',
//   payload: {
//     task: 'Reducerを学ぶ'
//   }
// }
function tasksReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TASK':
      return {
        ...state,
        // tasks: state.tasks.concat([action.task]) //← 教科書はこれですが、payloadオブジェクトの中を追加するので下に記述を変更
        tasks: state.tasks.concat([action.payload.task])
      };
    default:
      return state;
  }
};

// ReduxにはcreateStoreという関数を持っており、これを実行することでStoreを生成することができます。
// これで作成されたStoreはアプリケーションで唯一のものとなります。
// アプリケーション全体をこのStoreで管理することになります。
const store = createStore(tasksReducer);

// ActionCreatorを定義する
const addTask = (task) => ({
  type: 'ADD_TASK',
  payload: {task}
});

// subscribe...申し込みとか購読するという意味
store.dispatch(addTask('Storeをもっと学ぶ'));

function handleChange() {
  console.log(store.getState());
};

// これはStoreが変更担った時に呼び出すことができるコーブバック関数を定義する。
// 今回はhandleChange関数を登録して内部でconsole.logを呼び出す。
store.subscribe(handleChange);

store.dispatch(addTask('もっとStoreを学ぶ'));
store.dispatch(addTask('もっともっとStoreを学ぶ'));
store.dispatch(addTask('もっともっともっとStoreを学ぶ'));
store.dispatch(addTask('もっともっともっともっとStoreを学ぶ'));
store.dispatch(addTask('もっともっともっともっともっとStoreを学ぶ'));
store.dispatch(addTask('もっともっともっともっともっともっともっとStoreを学ぶ'));
