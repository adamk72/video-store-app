const slugify = require("slugify");
const admin = require("firebase-admin");
const serviceAccount = require("./serviceAccountKey.json");

const bootstrapData = [
  { title: "The Good, the Bad and the Ugly" },
  { title: "Seven Samurai " },
  { title: "Kill la Kill" },
  { title: "The Empire Strikes Back" },
];

async function bootstrapFirebase() {
  if (!admin.apps.length) {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    });
  }

  const db = admin.firestore();
  const batch = db.batch();
  bootstrapData.forEach((el) => {
    const doc = {
      title: el.title,
      slug: slugify(el.title, { lower: true }),
      created: new Date().toISOString(),
    };
    const docRef = db.collection("movies").doc();
    batch.set(docRef, doc);
  });

  try {
    await batch.commit();
  } catch (e) {
    console.error(e);
  }
}

bootstrapFirebase();
