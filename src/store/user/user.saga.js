import { takeLatest, all, call, put } from "redux-saga/effects";
import { USER_ACTION_TYPES } from "./user.types";
import { signInSuccess, signInFailure } from "./user.action";
import {
  getCurrentUser,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

export function* getSnapshotUserAuth(userAuth, addDetails) {
  try {
    const userSnapshot = yield call(
      createUserDocumentFromAuth,
      userAuth,
      addDetails
    );
    yield put(signInSuccess({id: userSnapshot.id, ...userSnapshot.data()}))
  } catch (error) {
    yield signInFailure(error);
  }
}

export function* isUserAuth() {
  try {
    const userAuth = yield call(getCurrentUser, "user");
    if (!userAuth) return;
    yield call(getSnapshotUserAuth, userAuth);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* onCheckUserSession() {
  yield takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION, isUserAuth);
}

export function* userSaga() {
  yield all([call(onCheckUserSession)]);
}
