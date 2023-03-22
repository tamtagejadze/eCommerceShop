import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import apiRequest from '../../hook/apiRequest';
import Page from "../Page/Page";

export default function Home(){
  const {data} = useQuery("products", () => apiRequest("GET", "products"))


    return(
     <Page>
      <h1 className="title">Our Latest Products</h1>
      <div className="container-home">        
        {(data || []).map(item => {
          if(item.id<22) return (
            <div className='items_div' key={item.id}>
              <div className="items">
                <img className='img' src={item.thumbnail} />
                <span>{item.title}</span>
                <h3>{item.price} $</h3>
                <Link to={"/productDetails/"+ item.id}><button className='details_button'>View More</button></Link>
              </div>
            </div> 
          ); else return ''
        }         
        )}    
      </div>
     </Page>     
    )
}