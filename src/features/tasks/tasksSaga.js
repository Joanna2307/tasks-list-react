import { takeLatest, call, put } from "redux-saga/effects";
import { getExampleTasks } from "./getExampleTasks";
import { fetchExampleTasks, setTasks, setError } from "./tasksSlice";

function* fetchExampleTasksHandler() {
  try {
   
    yield put(fetchExampleTasks());
    const exampleTasks = yield call(getExampleTasks);
    
    yield put(setTasks(exampleTasks));
  } catch (error) {
    
    yield put(setError());
    yield call(alert, "Coś poszło nie tak!");
  }
}

export function* tasksSaga() {
  yield takeLatest(fetchExampleTasks.type, fetchExampleTasksHandler);
}
