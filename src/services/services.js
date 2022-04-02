import { db } from '../firebase/firebase';
import { 
  collection, 
  doc, 
  getDoc, 
  getDocs, 
  query, 
  where 
} from "firebase/firestore";

export const getFirestoreData = async ( category ) => {
  try {
    return await getFirestoreDataQuery(category)
  } catch (error) {
    console.log(error);
  }
};

export const getFirestoreDataId = async ( id ) => {
  try {
    const docRef = doc(db, "Products", id);
    const documents = await getDoc(docRef);
    return documents.data()
  } catch (error) {
    console.log(error);
  }
};

const getFirestoreDataQuery = async(category) => {

  const aux = [];
  const storeCollection = collection(db, "Products");

  if ( !category ){ 
   const documents = await getDocs(storeCollection);
   return arrayData(documents, aux)

  }else{   
    const categoryFilter = query(storeCollection, where("category", "==", category))
    const documents = await getDocs(categoryFilter);
    return arrayData(documents, aux)
  } 
}

const arrayData = (documents, aux) =>{
    documents.forEach((document) => {
      const data = {
        id: document.id,
        ...document.data()
      }
      aux.push(data);
    })
    return aux
}