import * as firebase from 'firebase';

const prodConfig = {
	apiKey: "AIzaSyBXBmxNE1Wfu4MnQOkNO4-QOEOObresfi4",
	authDomain: "react-puppeteer.firebaseapp.com",
	databaseURL: "https://react-puppeteer.firebaseio.com",
	projectId: "react-puppeteer",
	storageBucket: "react-puppeteer.appspot.com",
	messagingSenderId: "988866756272"
};

const devConfig = {
	apiKey: "AIzaSyBXBmxNE1Wfu4MnQOkNO4-QOEOObresfi4",
	authDomain: "react-puppeteer.firebaseapp.com",
	databaseURL: "https://react-puppeteer.firebaseio.com",
	projectId: "react-puppeteer",
	storageBucket: "react-puppeteer.appspot.com",
	messagingSenderId: "988866756272"
};

const config = process.env.NODE_ENV === 'production'
  ? prodConfig
  : devConfig;

if (!firebase.apps.length) {
	firebase.initializeApp(config);
}

const db = firebase.database();
const auth = firebase.auth();

export {
	db,
	auth,
};
