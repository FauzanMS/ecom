import ExploreCard from './ExploreCard/ExploreCard';
import './Explore.css';
import React , {useState} from 'react';
import cart from './cart2.png';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import SearchBar from '../SearchBar/SearchBar';

function Explore(props) {
const [searchResult, setSearchResult] = useState('')
  const changeSearch=(event)=>{
    setSearchResult(event.target.value);
    console.log(searchResult);
  }
  // igKey.title.toLowerCase().includes(searchResult.toLowerCase())
    const pos = props.items.map(igKey=>{
      if(igKey.title.toLowerCase().includes(searchResult.toLowerCase()))  
      return <ExploreCard title={igKey.title} price={igKey.price} url={igKey.url} id={igKey.id} real ={igKey.real} tokenId = {props.token} />
    })

    return (
        <>
<div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="3500" >
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="imgCar" src="https://www.seprun.com/uploads/Nike_Air_Force_Shoes/Air_Force_1_Mid_Flyknit/Nike_Air_Force_1_Mid_Utility_LV8_University_Red_Black_AV3803-600_P1.jpg" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img className="imgCar" src="https://sneakernews.com/wp-content/uploads/2018/12/air-jordan-1-mid-554724-061-1.jpg" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img className="imgCar" src="https://th.bing.com/th/id/R.5cc75cd41abda23e59834b055693ccf2?rik=WLcdhygGhRdhbg&riu=http%3a%2f%2fesq.h-cdn.co%2fassets%2f16%2f13%2f1600x800%2flandscape-1459353483-nike-lunarforce1g-6-native-1600.jpg&ehk=VGc6tp7OwvwqWMaGIxIDJKkxWHZa69LOv94AGmXgt3Y%3d&risl=&pid=ImgRaw&r=0" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img className="imgCar" src="https://image.goat.com/crop/750/attachments/product_template_pictures/images/000/171/437/original/819677_600.png" className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
<SearchBar searchChange={changeSearch} className = "searchbar" />
<div className="explore">
     {pos}
</div>
<div className="cart">
      <Link to={props.purchasedItems.length>0 ? "/cartpage" : '/explore'}><img src={cart} className="cartIcon" style={{width:"100%" , borderRadius:"50%" , border:"1.2px solid black"}} /></Link>
    <div className="counter"><p>{props.purchasedItems.length}</p></div>
</div>
    
    </>
    )
}

const mapStoreToProps  = (state) =>{
  return {
    items : state.items,
    purchasedItems : state.purchasedItems ,
  };
};


export default connect(mapStoreToProps)(Explore);