import {useStateValue} from "../../context/StateProvider";
import './Home.css';
import Product from "./Product/Product";


const SearchResults=()=>{
    const [{searchResult},dispatch] = useStateValue();
    return (
        <div className="home__container">
            {searchResult.map(p=>{
                return <Product
                    id={p.id}
                    key={p.id}
                    title={p.title}
                    image={p.image}
                    price={p.price}
                    rating={p.rating}

                        />
            })}
        </div>
    )
}

export default SearchResults
