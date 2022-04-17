import React, { useEffect, useState } from 'react'
import { Loader } from '../Spinner/Loader';
import { ItemDetail } from './ItemDetail'
import { useParams } from 'react-router-dom';
import { getFirestoreDataId } from '../../services/services';

export const ItemDetailContainer = () => {

  const { itemId } = useParams();

  useEffect(async () => {
    const firestoreData = await getFirestoreDataId(itemId);
    handleStates(firestoreData)
  }, [itemId])

  const initialState = null;
  const [catalog, setCatalog] = useState(initialState);
  const [load, setLoad] = useState(true);

  const handleStates = (data) => {
    setCatalog(data)
    setLoad(false);
  }

  return (
    <>
      {
        load
          ? <Loader />
          : <ItemDetail product={catalog} />
      }
    </>
  )
}