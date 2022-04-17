import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup
} from "firebase/auth";
import { errorAlert } from "../Alert/Alert";

const authUser = {}

export const startRegisterWithEmailAndPassword = async (email, password, name) => {
  try {
    const auth = getAuth();
    const { user } = await createUserWithEmailAndPassword(auth, email, password)
    authUser.name = name
    authUser.uid = user.uid
    window.localStorage.setItem('user', authUser);
    return authUser
  } catch (error) {
    errorAlert(error);
  }
};

export const startLoginWithEmailAndPassword = async (email, password) => {
  try {
    const auth = getAuth();
    const { user } = await signInWithEmailAndPassword(auth, email, password)
    authUser.uid = user.uid
    window.localStorage.setItem('user', user.uid);
    return authUser
  } catch (error) {
    errorAlert(error);
  }
};

export const startLoginWithGoogle = async () => {
  try {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    const result = await signInWithPopup(auth, provider)
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.user;
    authUser.name = user.displayName
    authUser.uid = user.uid
    window.localStorage.setItem('user', user.uid);
    return authUser
  } catch (error) {
    errorAlert(error);
  }
};