import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img
                    className="home__image"
                    src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                    alt=""
                />

                <div className="home__row">
                    <Product
                        id="1"
                        title="Gaming Mice"
                        price={11.96}
                        rating={5}
                        image="https://m.media-amazon.com/images/I/61qN9d08hgL._AC_UY218_.jpg"
                    />
                    <Product
                        id="2"
                        title="Gaming Keyboard, 104 Keys All-Metal Panel, Rainbow LED Backlit Quiet Computer Keyboard, Wrist Rest, Multimedia Keys, Anti-ghosting Keys, Waterproof Light Up USB Wired Keyboard for PC Mac Xbox"
                        price={239.0}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/71ud68+jS-L._AC_UY218_.jpg"
                    />
                    <Product
                        id="3"
                        title="BENGOO G9000 Stereo Gaming Headset for PS4 PC Xbox One PS5 Controller, Noise Cancelling Over Ear Headphones with Mic, LED Light, Bass Surround, Soft Memory Earmuffs (Blue)"
                        price={239.0}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/61CGHv6kmWL._AC_UY218_.jpg"
                    />
                </div>

                <div className="home__row">
                    <Product
                        id="4"
                        title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
                        price={199.99}
                        rating={3}
                        image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
                    />
                    <Product
                        id="5"
                        title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
                        price={98.99}
                        rating={5}
                        image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
                    />
                    <Product
                        id="6"
                        title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
                        price={598.99}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
                    />
                </div>

                <div className="home__row">
                    <Product
                        id="7"
                        title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
                        price={1094.98}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
                    />
                </div>
                <div className="home__row">
                    <Product
                        id="8"
                        title="Shop Activity trackers and Smarwatches"
                        price={104.98}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_SmartWatch_1X._SY304_CB639922137_.jpg"
                    />
                    <Product
                        id="9"
                        title="Spiderman Suit"
                        price={40.98}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Figure_1x._SY116_CB667159060_.jpg"
                    />
                    <Product
                        id="10"
                        title="Gaming PC"
                        price={1422.98}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2023/EBF23/Fuji_Desktop_Single_image_EBF_1x_v1._SY304_CB573698005_.jpg"
                    />
                </div>
                <div className="home__row">
                    <Product
                        id="11"
                        title="Remote Control Cars, Transform Robot RC Cars"
                        price={99.99}
                        rating={3}
                        image="https://m.media-amazon.com/images/I/71qONUlf+ZL._AC_UL320_.jpg"
                    />
                    <Product
                        id="12"
                        title="Kids Toys Airplane Toys With Launcher"
                        price={17.99}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/71y-+xNKRgL._AC_UL320_.jpg"
                    />
                    <Product
                        id="13"
                        title="Transformable Fidget Spinners 4 Pcs for Kids"
                        price={9.99}
                        rating={5}
                        image="https://m.media-amazon.com/images/I/71kQtzvJRnL._AC_UL320_.jpg"
                    />
                </div>
                <div className="home__row">
                    <Product
                        id="14"
                        title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
                        price={11.96}
                        rating={5}
                        image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
                    />
                    <Product
                        id="16"
                        title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
                        price={239.0}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
                    />
                </div>
                <div className="home__row">
                    <Product
                        id="17"
                        title="DEWALT 20V MAX Cordless Drill and Impact Driver, Power Tool"
                        price={119.96}
                        rating={5}
                        image="https://m.media-amazon.com/images/I/51RNVWv7bDL._AC_UF226,226_FMjpg_.jpg"
                    />
                    <Product
                        id="18"
                        title="Gerber Bear Grylls Fire Starter [31-000699]"
                        price={13.0}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/61mB7-740RL._AC_UL160_SR160,160_.jpg"
                    />
                    <Product
                        id="19"
                        title="FUNBRO Multitool knife (Red)"
                        price={11.96}
                        rating={5}
                        image="https://m.media-amazon.com/images/I/71Or5W7lSXL._AC_SR160,160_.jpg"
                    />
                    <Product
                        id="20"
                        title="2PCS Bovgero Mini Multitool Pliers 15 in 1, Handmade Multi Tool Plier, Premium Keychain Multitool"
                        price={239.0}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/51vC0NQPu1L._AC_SR320,320_.jpg"
                    />
                </div>
                <div className="home__row">
                    <Product
                        id="21"
                        title="Sony Playstation Classic Console with 20 Playstation Games Pre-Installed Holiday Bundle, Includes Final Fantasy VII, Grand Theft Auto, Resident Evil Director's Cut and More"
                        price={11.96}
                        rating={5}
                        image="https://m.media-amazon.com/images/I/61bvBCSda0L._AC_UY218_.jpg"
                    />
                    <Product
                        id="22"
                        title="Playstation Sony 4, 500GB Slim System [CUH-2215AB01], Black, 3003347"
                        price={239.0}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/51tbWVPtckL._AC_UY218_.jpg"
                    />
                </div>
                <div className="home__row">
                    <Product
                        id="23"
                        title="Dowinx Gaming Chair Breathable Fabric Computer Chair with Pocket"
                        price={11.96}
                        rating={5}
                        image="https://m.media-amazon.com/images/I/51HJ0MFLiQL._AC_UL320_.jpg"
                    />
                    <Product
                        id="24"
                        title="Desk Office Chair 400LBS, Big High Back PU Leather Computer Chair, Executive Office Chair with Leg Rest"
                        price={239.0}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/612URVTDvsL._AC_UL320_.jpg"
                    />
                </div>
                <div className="home__row">
                    <Product
                        id="25"
                        title="Laptop with Backlit Keyboard, Gaming Laptop with AMD Ryzen 7 5700U Processor(8C/16T, Up to 4.3GHz), 16.1-inch FHD Display, 16GB RAM 512GB ROM Laptop Computer Support WiFi 6, 53Wh Battery"
                        price={1599.96}
                        rating={5}
                        image="https://m.media-amazon.com/images/I/71khyvzYUdL._AC_UY218_.jpg"
                    />
                    <Product
                        id="26"
                        title="ASUS TUF Gaming A17 (2023) Gaming Laptop, 17.3” FHD 144Hz Display, GeForce RTX 4050, AMD Ryzen 9 7940HS, 16GB DDR5, 1TB PCIe 4.0 SSD, Wi-Fi 6, Windows 11, FA707XU-EH94"
                        price={1099.0}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/519tAJTfFXL._AC_UY218_.jpg"
                    />
                    <Product
                        id="27"
                        title="Acer Nitro 17 Gaming Laptop AMD Ryzen 7 7840HS Octa-Core CPU 17.3"
                        price={1043.96}
                        rating={5}
                        image="https://m.media-amazon.com/images/I/711+0tgn+6L._AC_UY218_.jpg"
                    />
                </div>
                <div className="home__row">
                    <Product
                        id="28"
                        title="Sunglasses Men Polarized Sunglasses for Mens and Womens,Black Retro Sun Glasses Driving Fishing UV Protection"
                        price={11.96}
                        rating={5}
                        image="https://m.media-amazon.com/images/I/51ABDkq99LL._AC_UL320_.jpg"
                    />
                    <Product
                        id="29"
                        title="DEMIKOS Sunglasses Men Polarized Sunglasses for Womens Trendy Retro Mirror Lens for Driving Fishing UV400 Protection"
                        price={239.0}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/61JWittOUFL._AC_UL320_.jpg"
                    />
                    <Product
                        id="30"
                        title="OMEKOL Two Sizes For Adults and Youth Polarized Sunglasses Men Women Outdoor Sport Baseball Glasses UV400 Cycling Eyewear"
                        price={23.0}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/61Ut7QOCI4L._AC_UL320_.jpg"
                    />
                </div>
                <div className="home__row">
                    <Product
                        id="31"
                        title="Sunzel Flare Leggings, Crossover Yoga Pants with Tummy Control, High-Waisted and Wide Leg"
                        price={11.96}
                        rating={5}
                        image="https://m.media-amazon.com/images/I/61aUZQs50XL._AC_UL640_QL65_.jpg"
                    />
                    <Product
                        id="32"
                        title="https://m.media-amazon.com/images/I/81EpnSkK7IL._AC_UL320_.jpg"
                        price={239.0}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/81EpnSkK7IL._AC_UL320_.jpg"
                    />
                </div>
                <div className="home__row">
                    <Product
                        id="33"
                        title="NE PEOPLE Men's Short Sleeve Cuban Guayabera Button Down Shirts Top S-4XL"
                        price={11.96}
                        rating={5}
                        image="https://m.media-amazon.com/images/I/61SOitrLYFL._AC_UL320_.jpg"
                    />
                    <Product
                        id="34"
                        title="Mens Short Sleeve Guayabera Shirts Linen Cotton Button Down Mexican Embroidered Cuban Wedding Shirt Summer Tops"
                        price={239.0}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/71iDqHskd3L._AC_UL320_.jpg"
                    />
                </div>
                <div className="home__row">
                    <Product
                        id="35"
                        title="Sexy Bikinis for Women 2 Piece Bikini Spaghetti Strap Swimsuits Solid Color Bathing Swimwear Triangle Bathing Suit"
                        price={11.96}
                        rating={5}
                        image="https://m.media-amazon.com/images/I/61tvEfusT-L._MCnd_AC_UL320_.jpg"
                    />
                    <Product
                        id="36"
                        title="Aqua Eve Women Two Piece Bikini High Cut Swimsuit Triangle Bathing Suit Sexy Bikini Set"
                        price={9.0}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/61wB1hFMIDL._MCnd_AC_UL320_.jpg"
                    />
                    <Product
                        id="37"
                        title="Women's Sexy Thong Bottom Two Piece Bikini Double Shoulder Straps Cute Swimsuit Triangle Bathing"
                        price={39.0}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/61t+sJp+aNS._MCnd_AC_UL320_.jpg"
                    />
                    <Product
                        id="38"
                        title="EJsoyo Womens Sexy Thong Bikini Swimsuits String Push up Padded Bathing Suit 2 Piece Cheeky Swimwear with Metal Ring"
                        price={29.0}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/71UKJxk8BWL._MCnd_AC_UL320_.jpg"
                    />
                </div>
                <div className="home__row">
                    <Product
                        id="39"
                        title="Valentino Donna Born In Roma EDP Spray Women 3.4 oz"
                        price={118.96}
                        rating={5}
                        image="https://m.media-amazon.com/images/I/711fdw0zM3L._AC_UL320_.jpg"
                    />
                    <Product
                        id="40"
                        title="Guerlain Shalimar Eau De Parfum Spray for Women, 3 Ounce"
                        price={109.0}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/71Q72wjHpLL._AC_UL320_.jpg"
                    />
                    <Product
                        id="41"
                        title="Women Pheromone Perfume - Long-lasting and Addictive Personal Roll-on Pheromone Perfume Oil"
                        price={99.0}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/61CqGvOdP3L._AC_UL320_.jpg"
                    />
                    <Product
                        id="42"
                        title="Jennifer Lopez Live By Jennifer Lopez For Women. Eau De Parfum Spray 3.4 Oz."
                        price={19.0}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/71mKzdTARmL._AC_UL320_.jpg"
                    />
                </div>
            </div>
        </div>
    );
}

export default Home;