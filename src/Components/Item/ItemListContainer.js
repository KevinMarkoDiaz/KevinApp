import React, { useEffect, useState } from 'react'
import { Loader } from '../Spinner/Loader';
import { ItemList } from './ItemList'
import { useParams } from 'react-router-dom';
import { getFirestoreData } from '../../services/services';
 
export const ItemListContainer = () => {

  const {category} = useParams();

  useEffect(async() => {
  const firestoreData =  await getFirestoreData();
  filterCategory(firestoreData)
  }, [category])

  const initialState = null;
  const [catalog, setCatalog] = useState( initialState );
  const [load, setLoad] = useState( true );

  const handleStates = ( filteredCategory, data ) => {
    
    (filteredCategory < 1 )
      ?    setCatalog( data ) 
      :    setCatalog( filteredCategory );     
    setLoad( false );
  };

  const filterCategory = (data)=>{    
    const filteredCategory = data.filter( item => item.category === category);    
    handleStates( filteredCategory, data );
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
