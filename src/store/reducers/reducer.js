import * as actionTypes from '../actions/action';
const initialState = {
    items :[
        {
            url:"https://cdn.vox-cdn.com/thumbor/pjcUw1kyqVQA8sbGFd1mz2g9pog=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/22406771/Exbfpl2WgAAQkl8_resized.jpeg",
            title:"Nike Lil NasX Devil Shoe",
            price : 45000,
            real : 50000,
            id:1,
            qty : 0,
        },
        {
           url:"https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bmlrZSUyMHNob2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
           title:"Nike Green Training Shoe",
           price : 13354,
           real : 20000,
           id:2,
           qty : 0,
       },
       {
           url:"https://assets.ajio.com/medias/sys_master/root/20210223/5F1Q/60340c1c7cdb8c1f1449b7f6/nike_white_air_max_270_react_ww_high-top_lace-up_shoes.jpg",
           title:"Nike Edward Edition Shoe",
           price : 23453,
           real : 30000,
           id:3, 
           qty : 0,
       },
       {
           url:"https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1533754354-new-nike-shoes-5-1533754347.jpg?crop=1xw:1xh;center,top&resize=480:*",
           title:"Nike Air Edition shoe",
           price : 12943,
           real : 20000,
           id:4,
           qty : 0,
       },
       {
          url:"https://therunningoutlet.co.uk/wp-content/uploads/2018/05/nike-mens-pegasus-35-942851-006-side.jpg",
          title:"Red Nike Woosh Shoe",
          price : 9999,
          real : 15000,
          id:5,
          qty : 0,
      },
      {
        url:"https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/i1-b6543f19-9f77-4fc6-8619-45bc3ab9a440/training-shorts-h98wr1.png",  
        title:"Nike Men Training Shorts",
          price : 823,
          real : 2000,
          id:6,
          qty : 0,
      },
      {
        url:"https://picture-cdn.wheretoget.com/hrtbvc-i.jpg",
        title:"Nike Hoodie Monochrome",
        price : 5263,
        real : 6000,
        id:7,
        qty : 0,
    },
    {
        url:"https://i.pinimg.com/originals/93/8e/44/938e44a3dbadca1d5ef5ddc9c22e6e2b.jpg",
        title:"Orange Nike Hoodie Men",
       price : 7283,
       real : 8000,
       id:8,
       qty : 0,
   },
   {
     url:"https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/13529374/2021/3/5/e81ff770-09a2-43ed-84fe-c68e7fa056d71614948592498-Nike-Sportswear-Tribute-Mens-Joggers-4431614948591041-1.jpg",  
    title:"Nike Men Black Training Pants",
       price : 1223,
       real : 2420,
       id:9,
       qty : 0,
   },
   {
     url:"https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/12182372/2020/9/11/bfbeb94b-49cd-44cd-997a-f42dfca2534f1599807174968-Nike-Swoosh-Womens-Medium-Support-Sports-Bra-493159980717264-1.jpg",   
    title:"Nike Women Sports Bra",
       price : 823,
       real : 1100,
       id:10,
       qty : 0,
   },
   {
    url:"https://www.gabrielprintingcorp.com/wp-content/uploads/2019/12/54.jpg",  
    title:"Nike Women Black Spandex",
      price : 923,
      real : 1560,
      id:11,
      qty : 0,
  },
  {
    url:"https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_3.0/w_300,c_limit/6341fb2d-562b-4f2e-9c32-49f425fd277a/kd14-ep-basketball-shoes-8xhLgp.png",  
    title:"Nike Precision 5 Shoe",
      price : 12923,
      real : 18000,
      id:12,
      qty : 0,
  },
  {
   url:"https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/13898288/2021/3/29/d7dec98b-9c1c-45e8-a8f4-a1a3384508871617005636168NikeDri-FITMensBasketballTop1.jpg",
    title:"Nike Red Training Sleeveless",
    price : 923,
    real : 1200,
    id:13,
    qty : 0,
},
{
   url:"https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/14339146/2021/7/8/9e5b41e6-a227-40f1-9247-fc60d825c5581625722371001-FC-Barcelona-202122-Stadium-Home-Mens-Soccer-Jersey-35162572-1.jpg",
    title:"Nike Original FCB Jersey",
   price : 4323,
   real : 5000,
   id:14,
   qty : 0,
},
{
   url:"https://static.nike.com/a/images/f_auto/dpr_3.0/w_371,c_limit/b458f80d-3682-45dd-bb59-8084caa38ddb/men-s-shoes-clothing-accessories.jpg",
    title:"Nike Football Boot",
   price : 3223,
   real : 5000,
   id:15,
   qty : 0,
},
{
   url:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/921a7b3f-0f99-47a9-ba27-408624cf5e92/wildhorse-7-trail-running-shoes-XdK82N.png",
    title:"Nike SG 5 Shoe",
   price : 6723,
   real : 8000,
   id:16,
   qty : 0,
},
{
  url:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/b5c86553-3c7d-4da5-a992-5c9afe12d984/aeroswift-running-vest-mcbr2n.png",
    title:"Nike Men Pink Training",
  price : 823,
  real : 1300,
  id:17,
  qty : 0,
},
{
  url:"https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_3.0/w_300,c_limit/389b709e-5102-4e55-aa5d-07099b500831/blazer-mid-77-vintage-mens-shoes-nw30B2.png",
    title:"Nike High-Top Sneakers ",
  price : 5423,
  real:7000,
  id:18,
  qty : 0,
},
{
url:"https://media.sssports.com/630x630/media/catalog/product/1/9/193152578005_1.jpg",
    title:"Nike Dual Tone Jacket",
price : 7623,
real : 9000,
id:19,
qty : 0,
},
{
url:"https://www.footasylum.com/images/products/productlistings/126221.jpg",
    title:"Nike Men TrackSuit",
price : 6523,
real : 8000,
id:20,
qty : 0,
},
{
url:"https://i.pinimg.com/736x/f0/ce/1a/f0ce1ad9188f36ee32d7746bcf71a8eb.jpg",
    title:"Nike Red-Black Graphics Hoodie",
price : 5423,
real : 7000,
id:21,
qty : 0,
},
{
url :"https://cdn.shopify.com/s/files/1/0267/9232/9325/products/BV2671-886-1_1024x1024.jpg?v=1579900212",
    title:"Nike Yellow TrackPant",
price : 1823,
real : 3200,
id:22,
qty : 0,
},
{
url:"https://i.pinimg.com/736x/01/6b/23/016b23be7caf1ce42cbaf56dfc790e7c.jpg",
    title:"Nike Dri-Fit Camo",
price : 923,
real : 1450,
id:23,
qty : 0,
},
{
url:"https://i.pinimg.com/474x/2e/a2/d3/2ea2d393e941acfba262b06a543d948d.jpg",
    title:"Nike Men Sweat-Suit ",
price : 3123,
real : 5000,
id:24,
qty : 0,
},
{
   url : "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/c03e0aa8-1de8-4291-a336-5605b01eb24b/dri-fit-strike-short-sleeve-football-top-PrvTKz.png",
    price: 3210,
    title:"William Mathew X Edition",
    real : 5000,
    id : 25,
    qty : 0 ,
}
],
purchasedItems : [],
ordered_items : {},
    item_id: null,
    token : "",
    localId : "",
    singleBuy : null,
}



const reducer = (state=initialState , action)=>{
    switch(action.type){
        case (actionTypes.BUY_ITEM) :
            return{
                ...state,
                item_id : action.id,
            };
        case (actionTypes.ADD_TOKENID) :
            return{
                ...state,
                token : state.token,
            };

        case (actionTypes.ADD_LOCALID):
            return{
                ...state,
                localId:state.localId,
            };
        case (actionTypes.ADD_TO_CART):
                console.log(action.item);
                let boolme = true ;
                console.log(state.purchasedItems);
                if(boolme){
                return{
                    ...state,
                purchasedItems : [...state.purchasedItems , action.item-1],
                };  
            }
            break;
        case (actionTypes.REMOVE_FROM_CART):
            console.log(state.purchasedItems);
                    return{
                        ...state,
                        purchasedItems : state.purchasedItems.filter(item=>{
                            if(item+1!== action.item){
                                return item;
                            }
                        })
                    };
        case (actionTypes.PLACE_ORDER):   
         return {
                  ...state,
                  ordered_items : state.purchasedItems.map(item=>{
                      return item
                  })
            };  
        case (actionTypes.SINGLE_BUY):   
         return {
                     ...state,
                    singleBuy : action.item,
               }; 
        case (actionTypes.LOGIN_START):   
               return {
                           ...state,
                          token : action.token,
                          localId : action.userId,
                     };
        case (actionTypes.LOGOUT):   
                return {
                      ...state,
                      token : "",
                    localId : ""
                           };  
        
        default:
            return state;
    }
}
export default reducer;