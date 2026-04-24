import "server-only";

function cleanEnv(value: string | undefined) {
  return value?.trim();
}

export const firebaseConfig = {
  // Prefer server-only env vars and keep NEXT_PUBLIC_* only as fallback for compatibility.
  apiKey:
    cleanEnv(process.env.FIREBASE_API_KEY) ??
    cleanEnv(process.env.NEXT_PUBLIC_FIREBASE_API_KEY),
  authDomain:
    cleanEnv(process.env.FIREBASE_AUTH_DOMAIN) ??
    cleanEnv(process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN),
  projectId:
    cleanEnv(process.env.FIREBASE_PROJECT_ID) ??
    cleanEnv(process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID),
  storageBucket:
    cleanEnv(process.env.FIREBASE_STORAGE_BUCKET) ??
    cleanEnv(process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET),
  messagingSenderId:
    cleanEnv(process.env.FIREBASE_MESSAGING_SENDER_ID) ??
    cleanEnv(process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID),
  appId:
    cleanEnv(process.env.FIREBASE_APP_ID) ??
    cleanEnv(process.env.NEXT_PUBLIC_FIREBASE_APP_ID),
  measurementId:
    cleanEnv(process.env.FIREBASE_MEASUREMENT_ID) ??
    cleanEnv(process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID)
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
