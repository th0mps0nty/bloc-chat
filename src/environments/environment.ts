// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyBz8rzKYpOB32_atcqnard2LMMExzBEWU8",
    authDomain: "bloc-chat-ng4.firebaseapp.com",
    databaseURL: "https://bloc-chat-ng4.firebaseio.com",
    projectId: "bloc-chat-ng4",
    storageBucket: "bloc-chat-ng4.appspot.com",
    messagingSenderId: "839992221649"
  }
};
