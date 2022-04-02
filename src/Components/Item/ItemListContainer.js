import React, { useEffect, useState } from 'react'
import { Loader } from '../Spinner/Loader';
import { ItemList } from './ItemList'
import { useParams } from 'react-router-dom';
import { getFirestoreData } from '../../services/services';

export const ItemListContainer = () => {

  const { category } = useParams();

  useEffect(async () => {
    const firestoreData = await getFirestoreData(category);
    handleStates(firestoreData)
  }, [category])

  const initialState = null;
  const [catalog, setCatalog] = useState(initialState);
  const [load, setLoad] = useState(true);

  const handleStates = ( data) => {

    setCatalog(data)

    setLoad(false);
  };

  return (
    <>
      {
        load
          ? <Loader />
          : <ItemList catalog={catalog} />
      }
    </>
  )
}
