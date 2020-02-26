import Firebase from 'firebase';
let config = {
  apiKey: 'AIzaSyAl7XaQIIDH1P2DS0dpK30PXhGU3X4zjxc',
  authDomain: 'tbccrecords.firebaseapp.com',
  databaseURL: 'https://tbccrecords.firebaseio.com',
  projectId: 'tbccrecords',
  storageBucket: 'tbccrecords.appspot.com',
  messagingSenderId: '779958846678',
  appId: '1:779958846678:web:20616ec0a8264110c9f577',
  measurementId: 'G-ZEJ2V66817',
};
let app = Firebase.initializeApp(config);
export const db = app.database();
