import { db } from '../firebase/firebase';
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  serverTimestamp,
  where
} from "firebase/firestore";
import { errorAlert } from '../Alert/Alert';

export const getFirestoreData = async (category) => {
  try {
    return await getFirestoreDataQuery(category)
  } catch (error) {
    errorAlert(error);
  }
};

export const getFirestoreDataId = async (id) => {
  try {
    const docRef = doc(db, "Products", id);
    const documents = await getDoc(docRef);
    return documents.data()
  } catch (error) {
    errorAlert(error);
  }
};

const getFirestoreDataQuery = async (category) => {
  try {
    const aux = [];
    const storeCollection = collection(db, "Products");

    if (!category) {
      const documents = await getDocs(storeCollection);
      return arrayData(documents, aux)
    } else {
      const categoryFilter = query(storeCollection, where("category", "==", category))
      const documents = await getDocs(categoryFilter);
      return arrayData(documents, aux)
    }
  } catch (error) {
    errorAlert(error);
  }
}

const arrayData = (documents, aux) => {
  try {
    documents.forEach((document) => {
      const data = {
        id: document.id,
        ...document.data()
      }
      aux.push(data);
    })
    return aux
  } catch (error) {
    errorAlert(error);
  }
}
export const handleBuy = async ({ name, phoneNumber, email, address }, cart, total) => {
  try {
    const orderDetails = {
      buyer: {
        name: name,
        phoneNumber: phoneNumber,
        email: email,
        address: address
      },
      items: cart,
      date: serverTimestamp(),
      total: total
    }
    const storeCollection = collection(db, "Orders");
    const order = await addDoc(storeCollection, orderDetails)
  } catch (error) {
    errorAlert(error);
  }
};
