const slugify = require("slugify");
const admin = require("firebase-admin");
const serviceAccount = require("./serviceAccountKey.json");

const bootstrapData = [
  { title: "The Good, the Bad and the Ugly", likes: 1 },
  { title: "Seven Samurai " },
  { title: "Kill la Kill", likes: 12 },
  { title: "The Empire Strikes Back" },
];

/**
 * Run this from the command line to populate the Firestore DB:
 * `node src/utils/db/bootstrapFirebase.js`
 * @remarks
 * This function purges the database of existing data, then writes the bootstrap data.
 */
async function bootstrapFirebase() {
  if (!admin.apps.length) {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    });
  }

  const db = admin.firestore();

  await deleteCollection(db, "movies", 100);

  const batch = db.batch();
  bootstrapData.forEach((el) => {
    const doc = {
      ...el,
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

/**
 * @see {@link https://firebase.google.com/docs/firestore/manage-data/delete-data}
 */
async function deleteCollection(db, collectionPath, batchSize) {
  const collectionRef = db.collection(collectionPath);
  const query = collectionRef.orderBy("__name__").limit(batchSize);

  return new Promise((resolve, reject) => {
    deleteQueryBatch(db, query, resolve).catch(reject);
  });
}

/**
 * @see {@link https://firebase.google.com/docs/firestore/manage-data/delete-data}
 */
async function deleteQueryBatch(db, query, resolve) {
  const snapshot = await query.get();

  const batchSize = snapshot.size;
  if (batchSize === 0) {
    // When there are no documents left, we are done
    resolve();
    return;
  }

  // Delete documents in a batch
  const batch = db.batch();
  snapshot.docs.forEach((doc) => {
    batch.delete(doc.ref);
  });
  await batch.commit();

  // Recurse on the next process tick, to avoid
  // exploding the stack.
  process.nextTick(() => {
    deleteQueryBatch(db, query, resolve);
  });
}
