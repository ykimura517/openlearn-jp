import { initializeApp } from "firebase/app"
import { getAuth, GoogleAuthProvider, GithubAuthProvider } from "firebase/auth"

// Firebaseの設定
// 実際のアプリケーションでは環境変数から取得します
const firebaseConfig = {
  apiKey: "AIzaSyDummyKeyForMockPurposes",
  authDomain: "openlearn-jp.firebaseapp.com",
  projectId: "openlearn-jp",
  storageBucket: "openlearn-jp.appspot.com",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:web:abcdef1234567890abcdef",
}

// Firebaseの初期化
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()
const githubProvider = new GithubAuthProvider()

export { auth, googleProvider, githubProvider }

