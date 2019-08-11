// 初回のタスクを追加するためのオブジェクトかな。
export const inputTask = (task) => ({
  type: 'INPUT_TASK',
  payload: {
    task
  },
});

// タスクを追加するためのオブジェクトかな。
export const addTask = (task) => ({
  type: 'ADD_TASK',
  payload: {
    task
  },
});
