import * as functions from 'firebase-functions';
const emailjs = require('emailjs/email');
const pdfDocument = require('pdfkit');

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

exports.sendMailFn = functions.database.ref('/sendmail/{emailkey}').onWrite(event => {
    var doc = new pdfDocument();
    var email = event.
  }
)
