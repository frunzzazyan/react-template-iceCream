import { productsData } from '../Data/DataProducts'
import './Product.css'

const Product = () => {
  return (
    <>
    <div className="info-items product">
        
        <div className="text">
            <h1>Brown Sugar Oatmea</h1>
            <p>Together with McDonalds, Burger King has grown to become synonymous with burgers in the US.Together with McDonalds, Burger King has grown to become synonymous.</p>

            <button>See Details</button>
        </div>
        <div className="info-img">
            <img src="https://static.vecteezy.com/system/resources/previews/024/108/126/original/tasty-colorful-ice-cream-cup-with-syrups-and-fruits-on-transparent-background-png.png" alt="" />
        </div>

    </div>
        <div className="div-products">
            <nav className="nav-name-product">
                <h3>Our Product</h3>
                <ul>
                    <li>ICE CREAM</li>
                    <li>CAYENNE CHOCOLATE</li>
                    <li>CAKE BATTER</li>
                    <li>CANDY CANE</li>
                    <li>PLATTERS</li>
                    <li>DESSERT</li>
                </ul>
            </nav>
            {productsData.map(elem=>{
                return (elem.id % 2 === 0?
                 <div key={elem.id} className="odd">
                    <div className="product-img">
                        <img src={elem.image} alt="" />        
                    </div>
                    <div className="product-text">
                        <h2>{elem.pname}</h2>
                        <p>{elem.ptext}</p>
                        <h5>{elem.price}</h5>
                    </div>
                </div>
                    : 
                 <div key={elem.id} className="even">
                    <div className="product-text">
                        <h2>{elem.pname}</h2>
                        <p>{elem.ptext}</p>
                        <h5>{elem.price}</h5>
                    </div>
                    <div className="product-img">
                        <img src={elem.image} alt="" />
                    </div>
                </div>
                    )
                })}
        </div>
 </>
  )
}

export default Product