import React, { useEffect, useState } from 'react'
import { Loader } from '../Spinner/Loader';
import { ItemDetail } from './ItemDetail'
import { storeInventoryPromise } from '../../Mock/Mock'

export const ItemDetailContainer = () => {

  useEffect(() => {
    res();
  }, [])

  const initialState = null;
  const [catalog, setCatalog] = useState( initialState );
  const [load, setLoad] = useState( true );

  const handleStates = ( data ) => {
    setCatalog( data )
    setLoad( false );
  }


  const res = async () => {
    try {
      const data = await storeInventoryPromise;
      handleStates( data[0] );
    } catch ( error ) {
      console.log( error );
    }
  };

  return (
    <>
      {
        load
          ? <Loader />
          : <ItemDetail product={ catalog } />
      }
    </>
  )
}