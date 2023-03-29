import React , {useReducer } from 'react'
import Cartcontext from './cartcontext';

const defaultCartState = {
  items: [],
  totalAmount: 0
}

{ /* reducer function */ }
const cartReducer = (state , action ) => {
if ( action.type === 'ADD_ITEM'  ) {
  const updatedItems = state.items.concat(action.item); { /* state represente cartState , action.item grab the sent item , concat create a new array with adding the new item */ }
  const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount ;
  return {
    items : updatedItems ,
    totalAmount : updatedTotalAmount
  };
}

if ( action.type === 'REMOVE_ITEM'  ) {


}



  return ( defaultCartState  ); 
}


function CartProvider(props) {

  const [cartState , dispatchCartAcion ] = useReducer(cartReducer , defaultCartState); { /* reducer function , initial value */ }

  const addItemTocartHandler = item => {
    dispatchCartAcion( {type : 'ADD_ITEM' , item : item } );
  };

  const removeItemFromcartHandler = id => {
    dispatchCartAcion( {type : 'REMOVE_ITEM' , id : id } );
   };


  const cartcontext = {
    items: [],
    totalAmount: 0,
    addItem: addItemTocartHandler,
    removeItem: removeItemFromcartHandler
  };

  return (
    <Cartcontext.Provider value={cartcontext} >

      {props.children}

    </Cartcontext.Provider>
  );
}

export default CartProvider