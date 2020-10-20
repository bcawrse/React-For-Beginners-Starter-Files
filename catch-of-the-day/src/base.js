import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyA8fzCd2xL6YVVlHI5fm15cuWPtTVzsW_w",
  authDomain: "catch-of-the-day-52bad.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-52bad.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export.
export { firebaseApp };

// This is a default export.
export default base;