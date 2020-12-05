import './Home.css';
import Product from "./Product/Product";



const Home=()=> {



    return (

        <div className="home">
            <div>
                <img
                    className="home__image"
                    src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                    alt=""
                />

                <div className="home__row">
                    <Product
                        id="123123"
                        title="The learn Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
                        price={25.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL.AC_SY400_.jpg"
                        rating={5}
                    />
                    <Product
                        id="234234"
                        title="The learn Startup 2: How Constant Innovation Creates Radically Successful Businesses Paperback"
                        price={20.50}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL.AC_SY400_.jpg"
                    />
                </div>

                <div className="home__row">
                    <Product
                        id="345345"
                        title="Smartwatch"
                        price={199.99}
                        rating={3}
                        image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
                    />
                    <Product
                        id="5675677"
                        title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
                        price={98.99}
                        rating={5}
                        image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
                    />
                    <Product
                        id="678678"
                        title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB)-Silver (4th Generation)"
                        price={598.99}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
                    />
                </div>

                <div className="home__row">
                    <Product
                        id="79789"
                        title="Samsung LC4RG90SSUXEN 49' Curved LED Gaming Monitor"
                        price={1094.98}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._ACSX355_.jpg"

                    />
                </div>

            </div>
        </div>
    )
}

export default Home