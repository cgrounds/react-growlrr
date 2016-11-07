import firebase from 'firebase';
// Set the configuration for your app
 // TODO: Replace with your project's config object
 var config = {
   apiKey: '<your-api-key>',
   authDomain: '<your-auth-domain>',
   databaseURL: '<your-database-url>',
   storageBucket: 'gs://growlrr-34f6b.appspot.com'
 };
 firebase.initializeApp(config);

 // Get a reference to the storage service, which is used to create references in your storage bucket
 var storage = firebase.storage();

export default Storage;
