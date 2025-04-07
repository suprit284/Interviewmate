import { initializeApp, getApps, cert, App } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";
import { getFirestore } from "firebase-admin/firestore"; // ✅ Use firebase-admin/firestore (not firebase/firestore)

let firebaseAdminApp: App; // Store Firebase Admin instance

if (!getApps().length) {
  firebaseAdminApp = initializeApp({
    credential: cert({
      projectId: process.env.FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
    }),
  });
} else {
  firebaseAdminApp = getApps()[0]; // Reuse existing instance
}

export const auth = getAuth(firebaseAdminApp);
export const db = getFirestore(firebaseAdminApp); // ✅ Corrected to use Admin SDK
