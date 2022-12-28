import { initializeApp } from "firebase/app";
import {
  getFirestore,
  doc,
  getDoc,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD8ZPMTy-lTgWSHeGGCbMOZqbd_2MC2PfM",
    authDomain: "comision40295.firebaseapp.com",
    projectId: "comision40295",
    storageBucket: "comision40295.appspot.com",
    messagingSenderId: "464034253322",
    appId: "1:464034253322:web:b615f9c40c4045c1a52df3"
  };

const app = initializeApp(firebaseConfig);

const DB = getFirestore(app);

export async function getSingleItem(id) {
  //1. referencia
  let docRef = doc(DB, "products", id);

  //2. obtenemos la respuesta async de getDoc
  let docSnapshot = await getDoc(docRef);

  //3. retornamos la respuesta.data()
  let item = docSnapshot.data();
  item.id = docSnapshot.id;

  return item;
}

export async function getItems() {
  let collectionRef = collection(DB, "products");
  let docsSnapshot = await getDocs(collectionRef);

  let docsArray = docsSnapshot.docs;

  /* let dataDocs = docsArray.map((doc) => {
    let item = doc.data();
    item.id = doc.id;
    return item;
  }); */

  let dataDocs = docsArray.map((doc) => {
    return { ...doc.data(), id: doc.id };
  });

  return dataDocs;
}

export async function getItemsCategory(categoryID) {
  let collectionRef = collection(DB, "products");

  let q = query(collectionRef, where("category", "==", categoryID));

  let docsSnapshot = await getDocs(q);
  let docsArray = docsSnapshot.docs;

  let dataDocs = docsArray.map((doc) => {
    return { ...doc.data(), id: doc.id };
  });

  return dataDocs;
}