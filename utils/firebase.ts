import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from 'firebase/auth'
import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
  Timestamp,
  GeoPoint,
  updateDoc,
} from 'firebase/firestore'

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCndHjOXXRBW1c-P0he7kxPDb48IuJFIjw',
  authDomain: 'study-spot-38af9.firebaseapp.com',
  projectId: 'study-spot-38af9',
  storageBucket: 'study-spot-38af9.appspot.com',
  messagingSenderId: '836580954967',
  appId: '1:836580954967:web:cac78856eeffc4b241e412',
  measurementId: 'G-JG504MSE1L',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
// const analytics = getAnalytics(app)

const auth = getAuth(app)
const db = getFirestore(app)

const googleProvider = new GoogleAuthProvider()
const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider)
    const user = res.user
    const q = query(collection(db, 'users'), where('uid', '==', user.uid))
    const docs = await getDocs(q)
    if (docs.docs.length === 0) {
      await addDoc(collection(db, 'users'), {
        uid: user.uid,
        name: user.displayName,
        authProvider: 'google',
        email: user.email,
      })
    }
  } catch (err: any) {
    console.error(err)
    alert(err.message)
  }
}

const uploadLog = async (data: any) => {
  try {
    await addDoc(collection(db, 'logs'), data)
  } catch (err: any) {
    console.error(err)
    alert(err.message)
  }
}

const getLogs = async (userId: string) => {
  try {
    const q = query(collection(db, 'logs'), where('uid', '==', userId))
    const docs = await getDocs(q)
    return docs.docs.map((doc) => doc.data())
  } catch (err: any) {
    console.error(err)
    alert(err.message)
  }
}

// const getUserData = async (userId: string) => {
//   try {
//     const q = query(collection(db, 'logs'), where('uid', '==', userId))
//     const docs = await getDocs(q)

//     if (docs.docs.length === 0) {
//       await addUser(userId)

//       getUserData(userId)
//     }

//     return docs.docs[0].data()

//   } catch (err: any) {
//     console.error(err)
//     alert(err.message)
//   }
// }

// const logInWithEmailAndPassword = async (email: string, password: string) => {
//   try {
// await signInWithEmailAndPassword(auth, email, password)
//   } catch (err: any) {
//     console.error(err)
//     alert(err.message)
//   }
// }

// const registerWithEmailAndPassword = async (
//   name: string,
//   email: string,
//   password: string
// ) => {
//   try {
//     const res = await createUserWithEmailAndPassword(auth, email, password)
//     const user = res.user
//     await addDoc(collection(db, 'users'), {
//       uid: user.uid,
//       name,
//       authProvider: 'local',
//       email,
//     })
//   } catch (err: any) {
//     console.error(err)
//     alert(err.message)
//   }
// }

const logout = () => {
  signOut(auth)
}

export { auth, db, signInWithGoogle, logout, uploadLog, getLogs }
