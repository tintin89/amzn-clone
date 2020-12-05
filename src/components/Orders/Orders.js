import './Orders.css'
import {useEffect, useState} from "react";
import {db} from '../../firebase'
import {useStateValue} from "../../context/StateProvider";
import Order from './Order/Order'


const Orders =()=>{
    const [{basket,user},dispatch] = useStateValue();
    const [orders,setOrders] = useState([]);

    useEffect(()=>{
        if(user){
            db
                .collection('users')
                .doc(user?.uid)
                .collection('orders')
                .orderBy('created','desc')
                .onSnapshot(snapshot=>{
                    setOrders(snapshot.docs.map(doc=>({
                            id:doc.id,
                            data:doc.data()
                        })
                    ))
                })
        }else{
            setOrders([]);
        }

    },[user])



    return (
        <div className="orders">
            <h1>Tus Ordenes de Compras</h1>
            <div className="orders__order">
                {orders?.map(o=>{
                    return <Order order={o}/>
                })}
            </div>
        </div>
    )
}

export default Orders