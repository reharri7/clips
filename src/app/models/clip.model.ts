import firebase from "firebase/compat";

export default interface IClip {
  docID?: string;
  uid: string;
  displayName: string;
  title: string;
  fileName: string;
  url: string;
  screenshotUrl: string;
  timestamp: firebase.firestore.FieldValue;
  screenshotFileName: string;
}
