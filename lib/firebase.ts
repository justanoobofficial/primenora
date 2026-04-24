import "server-only";

export const firebaseConfig = {
  // Prefer server-only env vars and keep NEXT_PUBLIC_* only as fallback for compatibility.
  apiKey:
    process.env.FIREBASE_API_KEY ?? process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain:
    process.env.FIREBASE_AUTH_DOMAIN ?? process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId:
    process.env.FIREBASE_PROJECT_ID ?? process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket:
    process.env.FIREBASE_STORAGE_BUCKET ?? process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId:
    process.env.FIREBASE_MESSAGING_SENDER_ID ??
    process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID ?? process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId:
    process.env.FIREBASE_MEASUREMENT_ID ?? process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
};

export const hasFirebaseEnv = Boolean(
  firebaseConfig.apiKey &&
    firebaseConfig.authDomain &&
    firebaseConfig.projectId &&
    firebaseConfig.storageBucket &&
    firebaseConfig.messagingSenderId &&
    firebaseConfig.appId
);

export const firestoreCollectionPath = `projects/${firebaseConfig.projectId}/databases/(default)/documents/products`;

export const productDocumentShape = {
  name: "Premium Long Grain Rice",
  price: 68500,
  category: "Foodstuff",
  description: "Clean, stone-free long grain rice ideal for homes, events, and retail supply.",
  image: "https://your-storage-image-url",
  featured: true,
  createdAt: "2026-04-01"
};
