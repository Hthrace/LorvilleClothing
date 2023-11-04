import { takeLatest, all, call, put } from "redux-saga/effects";
import { USER_ACTION_TYPES } from "./user.types";
import {
  signInSuccess,
  signInFailure,
  signUpFailure,
  signUpSuccess,
  signOutSuccess,
  signOutFailure
} from "./user.action";
import {
  getCurrentUser,
  createUserDocumentFromAuth,
  signInWithGooglePopup,
  signInAuthWithEmailAndPassword,
  signOutUser,
  createAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";

export function* getSnapshotUserAuth(userAuth, additionalDetails) {
  try {
    const userSnapshot = yield call(
      createUserDocumentFromAuth,
      userAuth,
      additionalDetails
    );
    yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
  } catch (error) {
    yield signInFailure(error);
  }
}

export function* signInGoogle() {
  try {
    const { user } = yield call(signInWithGooglePopup);
    if (!user) return;
    yield call(getSnapshotUserAuth, user);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* signInAfterSignUp({ payload: { user, additionalDetails } }) {
  yield call(getSnapshotUserAuth, user, additionalDetails);
}

export function* signUp({ payload: { email, password, displayName } }) {
  try {
    const { user } = yield call(
      createAuthUserWithEmailAndPassword,
      email,
      password
    );
    yield put(signUpSuccess(user, { displayName }));
  } catch (error) {
    yield put(signUpFailure(error));
  }
}

export function* onSignUpSuccess() {
  yield takeLatest(USER_ACTION_TYPES.SIGN_UP_SUCCESS, signInAfterSignUp);
}

export function* signUpStart() {
  yield takeLatest(USER_ACTION_TYPES.SIGN_UP_START, signUp);
}

export function* singInEmail({ payload: { email, password } }) {
  try {
    const { user } = yield call(
      signInAuthWithEmailAndPassword,
      email,
      password
    );
    if (!user) return;
    yield call(getSnapshotUserAuth, user);
  } catch (error) {
    yield put(signInFailure(error));
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

export function* onGoogleSignInStart() {
  yield takeLatest(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START, signInGoogle);
}

export function* onEmailSignInStart() {
  yield takeLatest(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, singInEmail);
}

export function* onCheckUserSession() {
  yield takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION, isUserAuth);
}

export function* signOut() {
  try {
    yield call(signOutUser);
    yield put(signOutSuccess())
  } catch (error) {
    yield put(signOutFailure(error));
  }
}

export function* onSignOutStart() {
  yield takeLatest(USER_ACTION_TYPES.SIGN_OUT_START, signOut);
}

export function* userSaga() {
  yield all([
    call(onCheckUserSession),
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(onSignOutStart),
    call(signUpStart),
    call(onSignUpSuccess),
  ]);
}
