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

export default tasksReducer;
