// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, collection, getDocs,  Timestamp, addDoc} from "firebase/firestore"


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDp6WoneMPyO0EPXWhd9CKAMkiGkkm1APk",
  authDomain: "drishti-f1198.firebaseapp.com",
  projectId: "drishti-f1198",
  storageBucket: "drishti-f1198.appspot.com",
  messagingSenderId: "739987732377",
  appId: "1:739987732377:web:c16fa9ce0119659ff38508",
  measurementId: "G-4XQR869L47"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const database = getFirestore(app)

export const logInWithEmailAndPassword = async (email:string, password:string) => {
    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
    } catch (err:any) {
      alert(err.message);
    }
};


export const getActions = async (database:any) => {
    try{
        const actionsCol = collection(database, 'data');
        const actionSnapshot = await getDocs(actionsCol);
        const actionList = actionSnapshot.docs.map(doc => doc.data());
        console.log("data ub actuib", actionList)
        return actionList;
    }catch(err:any){
        console.log("data ub eorr", err)
        console.error(err);
    }
}

export const setActions = async (database:any) => {
    try{
        await addDoc(database, {
            name: "HJ",
            age: 20
          });
    }catch(err:any){
        console.error(err);
    }
}

