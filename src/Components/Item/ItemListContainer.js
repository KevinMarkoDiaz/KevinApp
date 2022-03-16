import React, { useEffect, useState } from 'react'
import { Loader } from '../Spinner/Loader';
import { ItemList } from './ItemList'
import { storeInventoryPromise } from '../../Mock/Mock'
import { useParams } from 'react-router-dom';

export const ItemListContainer = () => {

  const {category} = useParams();

  useEffect(() => {
    res();
  }, [category])

  const initialState = null;
  const [catalog, setCatalog] = useState( initialState );
  const [load, setLoad] = useState( true );

  const handleStates = ( data ) => {
    setCatalog( data )
    setLoad( false );
  }
  const filterCategory = (data)=>{    
    const filteredCategory = data.filter( item => item.category === category);
    handleStates( filteredCategory );
  };

  const res = async () => {
    try {
      const data = await storeInventoryPromise;      
      filterCategory(data);      
    } catch ( error ) {
      console.log( error );
    }
  };

  return (
    <>
      {
        load
          ? <Loader />
          : <ItemList catalog={ catalog } />
      }
    </>
  )
}
