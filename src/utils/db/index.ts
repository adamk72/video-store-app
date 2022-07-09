import admin from "firebase-admin";
import serviceAccountKey from "./serviceAccountKeyUnsafe.json";

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(
      serviceAccountKey as admin.ServiceAccount
    ),
  });
}

export default admin.firestore();
