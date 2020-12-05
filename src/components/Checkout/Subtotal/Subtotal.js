import './Subtotal.css'
import CurrencyFormat from 'react-currency-format'
import {useStateValue} from "../../../context/StateProvider";
import {getBasketSubtotal} from "../../../context/reducer";
import {useHistory} from 'react-router-dom'

const Subtotal=()=>{
    const history=useHistory();
    const [{basket},dispatch]=useStateValue();




    return (
    <div className="subtotal">
        <CurrencyFormat
        renderText={(value)=>(
            <>
                <p>
                    total ({`${basket.length}`} productos):
                <strong>{value}</strong>
                </p>

            </>
        )}
        decimalScale={2}
        value={getBasketSubtotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
        />

        <button onClick={e=>history.push('/payment')}>Realizar Compra</button>

    </div>
)}

export default Subtotal