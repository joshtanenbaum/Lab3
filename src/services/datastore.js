import firebase from 'firebase';


// Set the configuration for your app
const firebaseConfig = {
  apiKey: 'AIzaSyDJc1NQVLHhcuRxEs8DknNJG4L9GP13RTE',
  authDomain: 'firenotes-8b033.firebaseapp.com',
  databaseURL: 'https://firenotes-8b033.firebaseio.com',
  projectId: 'firenotes-8b033',
  storageBucket: 'firenotes-8b033.appspot.com',
  messagingSenderId: '663102025937',
  appId: '1:663102025937:web:8209eacd2c18152d4815f0',
  measurementId: 'G-D4YF9ZV0E5',
};
firebase.initializeApp(firebaseConfig);

// Get a reference to the database service
export const database = firebase.database();

export function del(id) {
  database.ref('notes').child(id).remove();
}

export function add(note) {
  database.ref('notes').push(note);
}

export function update(updates) {
  database.ref('notes').update(updates);
}

export function fetchnotes(callback) {
  database.ref('notes').on('value', (snapshot) => {
    const notes = snapshot.val();
    console.log(notes);
    callback(notes);
  });
}
