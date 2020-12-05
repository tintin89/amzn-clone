import './Header.css';
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import {Link,useHistory} from 'react-router-dom'
import {useStateValue} from "../../context/StateProvider";
import {auth} from "../../firebase";
import {useState} from "react";

const Header =()=> {
    const [{productos,basket,user},dispatch]=useStateValue();
    const history=useHistory();
    const [query,setQuery] = useState('');



    const handleSearch=()=>{
        const temp=[];
        productos.forEach(p=>{
            if(p.title.toLowerCase().indexOf(query) > -1){
                temp.push(p);
            }
        })

        dispatch({
            type:'SET_SEARCH_RESULT',
            searchR:temp
        })
        history.push('/search');

    }

    const handleAuthentication=()=>{
        if(user){
            auth.signOut();
            dispatch({
                type:'EMPTY_BASKET'
            })
            history.push('/');

        }
    }

    const handleOnchange=e=>{
        setQuery(e.target.value.toString().toLocaleLowerCase());

    }

    return (
        <div className="header">
            <Link to="/">
                <img
                    className="header__logo"
                    src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                    alt=""
                />
            </Link>
            <div className="header__search">
                <input
                    className="header__searchInput"
                    type="text"
                    onChange={handleOnchange}
                    value={query}
                />
                <SearchIcon
                    className="header__searchIcon"
                    onClick={handleSearch}
                />
            </div>
            <div className="header__nav">
                <Link to={!user && '/login'}>
                    <div onClick={handleAuthentication} className="header__navOption">
                        <span className="header__optionLineOne">Hola {!user ? 'Bienvenido/a' : user.email}</span>
                        <span className="header__optionLineTwo">{user ? 'Salir' : 'Entrar'}</span>
                    </div>
                </Link>


                <Link to="/orders">
                    <div className="header__navOption">
                        <span className="header__optionLineOne">Retornos</span>
                        <span className="header__optionLineTwo">& Ordenes</span>
                    </div>
                </Link>




                <Link to={!user ? "/login" : "/checkout"}>
                    <div className="header__optionBasket">
                        <ShoppingBasketIcon/>
                        <span className="header__optionLineTwo header__basketCount">
                            {basket?.length}
                </span>
                    </div>
                </Link>

            </div>
        </div>
    )
}

export default Header