import { initializeApp } from "firebase/app";
import {
  getFirestore,
  doc,
  getDoc,
  collection,
  getDocs,
  query,
  where,
  addDoc,
  documentId,
  writeBatch,

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
  
  let docRef = doc(DB, "products", id);
 
  let docSnapshot = await getDoc(docRef);
 
  let item = {
    id:docSnapshot.id,
    ...docSnapshot.data()
  }
  
  return item;
}

export async function getItems() {
  let collectionRef = collection(DB, "products");
  let docsSnapshot = await getDocs(collectionRef);

  let docsArray = docsSnapshot.docs;

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


export async function createBuyOrder(order) {
  const colectionRef = collection(DB, "orders");

  let newOrder = await addDoc(colectionRef, order);
  return newOrder.id;
}

export async function createBuyOrder_WithStockControl(order) {
  const colectionRef = collection(DB, "orders");
  const colectionProductsRef = collection(DB, "products");

  let batch = writeBatch(DB);

  let arrayIds = order.items.map((itemInCart) => itemInCart.id);
  const q = query(colectionProductsRef, where(documentId(), "in", arrayIds));
  let snapshot = await getDocs(q);

  snapshot.docs.forEach((doc) => {
    let stockDispoible = doc.data().stock;

    let ItemInCart = order.items.find((item) => item.id === doc.id);
    let countItemInCart = ItemInCart.count;

    if (stockDispoible < countItemInCart)
      throw new Error(
        `Stock no disponible para el producto para el producto ${doc.id}`
      );
    else batch.update(doc.ref, { stock: stockDispoible - countItemInCart });
  });

  await batch.commit();
  let newOrder = await addDoc(colectionRef, order);
  return newOrder.id;
}


export async function exportItemsToFirestore() {
  const products = [
    {
      id: 1,
      category:"Calzados",
      stock: 5,
      title: "Zapatillas Urbano ",
      price: 20000,
      img:"https://http2.mlstatic.com/D_NQ_NP_616451-MLA50187978324_062022-O.webp  ",
      description: "Zapatillas para hombre color blanco",
      discount: 50,
    },
    {
      id: 2,
      title:"Hawaianas dual",
      description:"Ojotas hawaianas para hombres en varios colores ",
      price: 8999,
      stock: 15,
      category: "Calzados",
      img: "https://http2.mlstatic.com/D_Q_NP_905067-MLA51281300091_082022-W.webp",
    },
    {
      id: 4,
      title:"Hawaianas Slim fina mujer",
      description:"Ojotas Hawaianas para mujer en vaarios colores",
      price: 8980,
      stock: 12,
      category: "Calzados",
      img: "https://http2.mlstatic.com/D_Q_NP_644462-MLA49326597252_032022-W.webp  ",
    },
    {
      id: 5,
      title: "Sandalias Gravbna",
      description:"Sandalias negras de cueros para mujer",
      price: 10000,
      stock: 10,
      category: "Calzados",
      img:  "https://http2.mlstatic.com/D_Q_NP_612561-MLA52110440626_102022-W.webp ",
    },
    {
      id:6,
      title:"Chomba Lacoste",
      description:"Chomba roja de hombre",
      price:4000,
      stock:8,
      category: "Remeras",
      img: " https://http2.mlstatic.com/D_Q_NP_723368-MLA52626930653_112022-W.webp ",
    },
    {
      id: 7,
      title: "Babucha deportiva",
      description:"babucha deportiva de hombre",
      price: 15000,
      stock: 50,
      category: "Pantalones",
      img:"https://http2.mlstatic.com/D_NQ_NP_697340-MLA45393217065_032021-W.webp ",
    },
    {
      id: 8,
      title:"Overside mujer",
      description:"Pantalon overside mujer color rustico.",
      price: 14999,
      stock: 68,
      category: "Pantalones",
      img: "https://http2.mlstatic.com/D_NQ_NP_834381-MLA52525603263_112022-W.webp  ",
      discount: 30,

    },
    {
      id: 9,
      title:"Rusty Sensei",
      description:"Pantalon Rusty hombre",
      price: 11999,
      stock: 2,
      category: "Pantalones",
      img:"https://http2.mlstatic.com/D_NQ_NP_686327-MLA52416261369_112022-W.webp",
      discount: 25,
    },
    {
      id: 10,
      title: "Fila Sugar ",
      description:
        "Pantalon gris mujer",
      price: 13999,
      stock: 1,
      category: "Pantalones",
      img:"https://http2.mlstatic.com/D_NQ_NP_755608-MLA52747703574_122022-W.webp",
      discount:25,
    },
    {
      id: 11,
      title: "Liso deportivo babucha",
      description:"Pantalon hombre friza",
      price: 13000,
      stock: 6,
      category: "Pantalones",
      img: "  https://http2.mlstatic.com/D_NQ_NP_772829-MLA41759047785_052020-W.webp",
      discount:30
    },
    {
      id: 12,
      title: "Remera personalizadas",
      description: "Estampados frente y dorso o a eleccion",
      price: 4500,
      stock: 52,
      category: "Remeras",
      img: " https://http2.mlstatic.com/D_NQ_NP_736964-MLA41953802357_052020-W.webp",
    },
    {
      id: 13,
      title: "Remeras Futura Mamá",
      description:
        " Remera para embarazdas talles grandes",
      price: 4500,
      stock: 61,
      category:  "Remeras",
      img: "https://http2.mlstatic.com/D_NQ_NP_622743-MLA41406178573_042020-W.webp",
    },
    {
      id: 14,
      title: "Sudadera GyM Mujer",
      description:
        "Remeras musculosas deportiva",
      price: 3500,
      stock: 10,
      category: "Remeras",
      img: " https://http2.mlstatic.com/D_NQ_NP_805320-MLA52579006752_112022-W.webp",
      discount:10,
    },
  ];

  const colectionRef = collection(DB, "products");

  for (let item of products) {
   

    let newItem = await addDoc(colectionRef, item);
    console.log(newItem.id);
  }
  }