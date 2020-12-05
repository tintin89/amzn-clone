import './Checkout.css'
import Subtotal from "./Subtotal/Subtotal";
import {useStateValue} from "../../context/StateProvider";
import CheckoutProduct from "./CheckoutProduct/CheckoutProduct";
import FlipMove from 'react-flip-move';

const Checkout=()=>{
    const [{basket,user},dispatch]=useStateValue();
    return (
    <div className="checkout">
        <div className="checkout__left">
            <img
            className="checkout__ad"
            src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
            alt=""
            />
            <div>
                <h3>Hola, {user?.email}</h3>
                <h2 className="checkout__title">Tu canasta de compras!</h2>
                <FlipMove>
                    {
                        basket.map(item=>(
                            <CheckoutProduct
                                key={item.id}
                                id={item.id}
                                price={item.price}
                                rating={item.rating}
                                image={item.image}
                                title={item.title}
                            />
                        ))
                    }
                </FlipMove>

            </div>
        </div>
        <div className="checkout__right">
            <Subtotal/>
        </div>
    </div>
)}

export default Checkout


