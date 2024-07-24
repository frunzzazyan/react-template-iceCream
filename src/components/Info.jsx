import  './Info.css'
import ItemsForHomePage from './ItemsForHomePage'

const Info = () => {
  return (
    <>
    <div className="info-items">

        <div className="text">
            <h5>Sweet fun, full of milk</h5>
            <h1>Feel inside cold with our delicious <span>ice-cream</span></h1>
            <p>Some food has looked so awful that it's looked like something that the dog's brought home, yet after one mouthful I've been left eating my thoughts, my words.</p>

            <button>Buy Now</button>
        </div>
        <div className="info-img">
            <img src="https://png.pngtree.com/png-vector/20230321/ourmid/pngtree-ice-cream-cone-summer-white-background-transparent-png-image_6656577.png" alt="" />
        </div>
    </div>
    
   <ItemsForHomePage/>
    </>
  )
}

export default Info