import { initializeApp, getApps } from "firebase-admin/app";

var serviceAccount = require("../secret/tiklipy-firebase-private-key.json");

const config = { credential: admin.credential.cert(serviceAccount) };
const apps = getApps();
const firebase = !apps.length ? initializeApp(config) : apps[0];

export {
    firebase
};

