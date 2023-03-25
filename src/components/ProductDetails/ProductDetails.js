import React, { useReducer } from 'react'
import { useQuery } from 'react-query';
import { Link, useParams } from 'react-router-dom';
import apiDetails from '../../hook/apiDetails';
import Page from '../Page/Page';
import {MdFavorite} from 'react-icons/md';
import Comment from './Comment';


function ProductDetails() {
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
                    <Link to={'/registration'}><button className='add_button'>Add to Cart</button></Link>
                    </div>
                    <Link to={'/registration'}>
                        <div className='favorite-div'>
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