import React, { Component } from 'react';
import "./omazon.css";

export default class DataCome extends Component{
    constructor(){
        super();
        this.state = {
            check: false,
            productInfo: [],
            rating: []
        }
    }

    componentDidMount() {
        fetch("https://fakestoreapi.com/products/1")
        .then((response) => (response.json()))
        .then((res) => {
            console.log(res)
            
            this.setState({
                productInfo: res,
                rating: res.rating
            })
        })
    }
    handleClick1 = () => {
        this.setState({
            check: true
        })
    }
    handleClick2 = () => {
        this.setState({
            check: !true
        })
    }
    render(){
        return(
            <>
                <header className='header'>
                    <p>Omazon</p>
                    <nav>
                        <ul>
                            <li>Home</li>
                            <li>Products</li>
                            <li>Cart</li>
                        </ul>
                    </nav>
                    <button>SignIn</button>
                </header>
                <main className='main'>
                    <section className='container'>
                        <div className='product-image'>
                            <img src={this.state.productInfo.image} />
                        </div>
                        <div className='product-Info'>
                            <p>{this.state.productInfo.category}</p>
                            <h1>{this.state.productInfo.title}</h1>
                            <div className='product-rating'>
                                <p id='rating'>{this.state.rating.rate}</p>
                                <p>{this.state.rating.count} rating</p>
                            </div>
                            <div className='product-des'>
                                <p><span>Price: </span><span style={{fontSize: "20px", color: "#ff0249", fontWeight: "500"}}><span style={{fontFamily: "times new roman" }}>₹</span> {this.state.productInfo.price}</span></p>

                                <button className='bDescription' onClick={this.handleClick1} hidden={this.state.check === true ? 1 : 0}>Description</button>
                                {this.state.check === true && <p id="description">{this.state.productInfo.description}.</p>}
                                <button className='bDescription' onClick={this.handleClick2} hidden={this.state.check === true ? 0 : 1}>Show Less</button>
                            </div>
                            <div className='checkout'>
                                <div>
                                    <button style={{backgroundColor: "#000249"}}>Add to Cart</button>
                                    <button style={{backgroundColor: "#ff0249"}}>Buy Now</button>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </>
        )
    }
}
