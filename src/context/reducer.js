
export const initialState = {
      productos : [
        {
            id: "123123",
            title: "The learn Startup: How Constant Innovation Creates Radically Successful Businesses Paperback",
            price: 25.99,
            image: "https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL.AC_SY400_.jpg",
            rating: 5
        },
        {
            id:"234234",
            title:"The learn Startup 2: How Constant Innovation Creates Radically Successful Businesses Paperback",
            price:20.50,
            rating:4,
            image:"https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL.AC_SY400_.jpg"
        },
        {
            id:"345345",
            title:"Smartwatch",
            price:199.99,
            rating:3,
            image:"https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
        },
        {
            id:"5675677",
            title:"Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric",
            price:98.99,
            rating:5,
            image:"https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
        },
        {
            id:"678678",
            title:"New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB)-Silver (4th Generation)",
            price:598.99,
            rating:4,
            image:"https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
        },
        {
            id:"79789",
            title:"Samsung LC4RG90SSUXEN 49' Curved LED Gaming Monitor",
            price:1094.98,
            rating:4,
            image:"https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._ACSX355_.jpg"
        }
    ],
    basket:[],
    user:null,
    searchResult:[]
};

export const getBasketSubtotal=(basket)=>basket.reduce((acumulador,item)=>item.price+acumulador,0);



const reducer = (state,action) =>{
    switch (action.type) {
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket:[...state.basket,action.item]
            };

        case 'EMPTY_BASKET':
            return {
                ...state,
                basket:[]
            }

        case 'REMOVE_FROM_BASKET':
            const index = state.basket.findIndex(basketItem=>basketItem.id === action.id)
            let newBasket = [...state.basket];
            if(index >= 0){
                newBasket.splice(index,1);
            }else{alert("index not found")}
            return {
                ...state,
                basket:newBasket

            }

        case 'SET_USER':
            return {
                ...state,
                user:action.user
            }

        case 'SET_SEARCH_RESULT':
            return {
                ...state,
                searchResult:action.searchR
            }

        default:
            return state;

    }
}

export default reducer;