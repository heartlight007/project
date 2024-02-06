
const Hero = () => {
    return (
        <div className="Hero">
            <div className="Hero-content">
                <div className="hero-left-text">
                    <h1>YOUR FEET DESERVE THE BEST</h1>
                    <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
                    <div className="buttons">
                        <button>Shop Now</button>
                        <button className="cat-btn">Category</button>
                    </div>
                    <div>
                        <p className="p">Also Available On</p>
                        <div className="shop-img">
                            <div><img src="Images/amazon.png" alt="amazonlogo" /></div>
                            <div><img src="Images/flipkart.png" alt="flipkartlogo" /></div>
                        </div>
                    </div>

                </div>
                <div className="hero-right-photo">
                    <img src="Images/shoe_image.png" alt="shoe Image" />
                </div>
            </div>
        </div>
    )
}

export default Hero;