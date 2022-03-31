import { db } from '../firebase/firebase';
import { collection, getDocs } from "firebase/firestore"; 

export const getFirestoreData = async () => {

    try {
      const aux = [];
      const storeCollection =  collection(db, "Products");
      const documents = await getDocs(storeCollection);

      documents.forEach((document)=>{

      const data = {
          id: document.id,
          ...document.data()
        }
        aux.push(data);
      })
    return aux

    } catch ( error ) {
      console.log( error );
    }
};
