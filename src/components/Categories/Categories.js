import axios from 'axios'
import React from 'react'
import { useQuery } from 'react-query'
import { Link } from 'react-router-dom'
import apiDetails from '../../hook/apiDetails'
import Page from '../Page/Page'

function Categories() {
  const {data} = useQuery("categories", () => apiDetails("GET", "categories"))


  return (
    <Page>
        <div>
        {(data || []).map(item => {
           return (
            <div className='categories-div' key={item.id}>              
                <button>{item}</button>
            </div> 
          ); 
        }         
        )}    
        </div>
    </Page>
  )
}

export default Categories