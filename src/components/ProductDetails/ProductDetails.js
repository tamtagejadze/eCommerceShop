import React, { useReducer } from 'react'
import { useQuery } from 'react-query';
import { Link, useParams } from 'react-router-dom';
import apiDetails from '../../hook/apiDetails';
import Page from '../Page/Page';
import {MdFavorite} from 'react-icons/md';
import Comment from './Comment';
// import productReducer from '../../hook/product.reducer';


function ProductDetails() {
    // const [state, dispatch] = useReducer(productReducer,{ count: 1 })  
    const param = useParams();
    const {data, isLoading} = useQuery(["products", param.productId], () => apiDetails("GET",  param.productId))

   
    if(isLoading){
        return <div className="loader"></div>
      } 
  return (
    <Page>
         <div className='product-container'>
            <div className='container-details'>
                <div>
                    <img src={data.thumbnail} />
                </div>
                <div>
                    <h2>{data.title}</h2>
                    <h4>{data.brand}</h4>
                    <span>{data.category}</span>
                    <p>{data.description}</p>                    
                </div>
                <div>
                    <h1>{data.price} $</h1>
                    <div>
                    {/* <div className='product-qty'>
                      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
                      <span>{state.count}</span>
                      <button onClick={() => dispatch({type: 'increment'})}>+</button>
                    </div> */}
                    <button className='add_button'>Add to Cart</button>
                    </div>
                    <Link to={'/registration'}>
                        <div className='favorite-div'>
                            {/* <p>Add to Favorites</p> */}
                            <MdFavorite className='favorite'/>
                        </div>
                    </Link>
                </div>
            </div>
            <Comment/>
        </div>
       
    </Page>
  )
}

export default ProductDetails