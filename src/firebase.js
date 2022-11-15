//firebase.js
import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAxeKkFdYfckuD6AhvWSCtSO7u11iCd8yU",
    authDomain: "pa-bi-28617.firebaseapp.com",
    projectId: "pa-bi-28617",
    storageBucket: "pa-bi-28617.appspot.com",
    messagingSenderId: "135707992263",
    appId: "1:135707992263:web:af6c66fefd304475db1ee2"
  };

// firebaseConfig 정보로 firebase 시작
firebase.initializeApp(firebaseConfig);

// firebase의 firestore 인스턴스를 변수에 저장
const firestore = firebase.firestore();

// 필요한 곳에서 사용할 수 있도록 내보내기
export { firestore };