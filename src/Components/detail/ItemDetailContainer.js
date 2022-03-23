import React, { useEffect, useState } from 'react'
import { Loader } from '../Spinner/Loader';
import { ItemDetail } from './ItemDetail'
import { storeInventoryPromise } from '../../Mock/Mock'
import { useParams } from 'react-router-dom';

export const ItemDetailContainer = () => {

  const { itemId } = useParams();

  useEffect(() => {
    res();
  }, [itemId])

  const initialState = null;
  const [catalog, setCatalog] = useState(initialState);
  const [load, setLoad] = useState(true);

  const handleStates = (data) => {
    setCatalog(data)
    setLoad(false);
  }
  const filterItem = (data) => {
    const [filteredIyemId] = data.filter(item => item.id == itemId);
    handleStates(filteredIyemId);
  };

  const res = async () => {
    try {
      const data = await storeInventoryPromise;
      filterItem(data);
    } catch (error) {
      console.log(error);
    }
  };

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