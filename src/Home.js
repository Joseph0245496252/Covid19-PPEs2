//animation-modal
import React from "react";
import data from "./data.json";
import Products from "./components/Products";
import Filter from "./components/Filter";
import Cart from "./components/Cart";
import {Link} from "react-router-dom";

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      products: data.products,
      cartItems: localStorage.getItem("cartItems")
        ? JSON.parse(localStorage.getItem("cartItems"))
        : [],
      size: "",
      sort: ""
    };
  }
  createOrder = order => {
    alert("Need to save order for " + order.name);
  };
  removeFromCart = product => {
    const cartItems = this.state.cartItems.slice();
    this.setState({
      cartItems: cartItems.filter(x => x._id !== product._id)
    });
    localStorage.setItem(
      "cartItems",
      JSON.stringify(cartItems.filter(x => x._id !== product._id))
    );
  };
  addToCart = product => {
    const cartItems = this.state.cartItems.slice();
    let alreadyInCart = false;
    cartItems.forEach(item => {
      if (item._id === product._id) {
        item.count++;
        alreadyInCart = true;
      }
    });
    if (!alreadyInCart) {
      cartItems.push({ ...product, count: 1 });
    }
    this.setState({ cartItems });
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  };
  sortProducts = event => {
    // impl
    const sort = event.target.value;
    console.log(event.target.value);
    this.setState(state => ({
      sort: sort,
      products: this.state.products
        .slice()
        .sort((a, b) =>
          sort === "lowest"
            ? a.price > b.price
              ? 1
              : -1
            : sort === "highest"
            ? a.price < b.price
              ? 1
              : -1
            : a._id < b._id
            ? 1
            : -1
        )
    }));
  };
  filterProducts = event => {
    // impl
    console.log(event.target.value);
    if (event.target.value === "") {
      this.setState({ size: event.target.value, products: data.products });
    } else {
      this.setState({
        size: event.target.value,
        products: data.products.filter(
          product => product.availableSizes.indexOf(event.target.value) >= 0
        )
      });
    }
  };
  render() {
    return (
      <div className="container-fluid">
        <div className="row d-flex flex-column">
          <div className="col">
            <div className="grid-container">
              <main>
                <div className="content">
                  <div className="main">
                    <Filter
                      count={this.state.products.length}
                      size={this.state.size}
                      sort={this.state.sort}
                      filterProducts={this.filterProducts}
                      sortProducts={this.sortProducts}
                    ></Filter>
                    <Products
                      products={this.state.products}
                      addToCart={this.addToCart}
                    ></Products>
                  </div>
                  <div className="sidebar">
                    <Cart
                      cartItems={this.state.cartItems}
                      removeFromCart={this.removeFromCart}
                      createOrder={this.createOrder}
                    />
                  </div>
                </div>
                <div className="bg-success socialIcons">
                      <div className="container">
                        <div className="row py-4 d-flex align-items-center">
                          <div className="col-md-12 text-center">
                            <Link href="https://web.facebook.com/asante.joseph.90"><i className="fab fa-facebook-f text-white mr-4"></i></Link>
                            <Link href="https://twitter.com/ReppyAsante"><i className="fab fa-twitter text-white mr-4"></i></Link>
                            <Link href="#"><i className="fab fa-google-plus-g text-white mr-4"></i></Link>
                            <Link href="https://www.linkedin.com/in/joseph-asante-868799199/"><i className="fab fa-linkedin-in text-white mr-4"></i></Link>
                            {/* <Link href="#"><i className="fab fa-instagram-square text-white mr-4"></i></Link> */}
                          </div>
                        </div>
                      </div>
                    </div>
                <footer className="page-footer bg-dark">
                    

                    <div className="container text-center text-md-left mt-5">
                      <div className="row footerRow">

                      <div className="col-md-3 mx-auto mb-4">
                          <h6 className="text-uppercase font-weight-bold">The Providers</h6>
                          <hr className="bg-success mb-4 mt-0 d-inline-block mx-auto usefullLinks" />
                            <p className="mt-2">God is good all the time and all the time God is good God is good all the time and all the time God is good</p>
                        </div>

                        <div className="col-md-3 mx-auto mb-4" >
                        <h6 className="text-uppercase font-weight-bold">Products</h6>
                        <hr className="bg-success mb-4 mt-0 d-inline-block mx-auto usefullLinks" />

                          <ul className="list-unstyled">
                            <li className="my-2"><Link href="#">HTML 5</Link></li>
                            <li className="my-2"><Link href="#">CSS 3</Link></li>
                            <li className="my-2"><Link href="#">Bootstrap 4</Link></li>
                            <li className="my-2"><Link href="#">JavaScript</Link></li>
                          </ul>
                        </div>
                        
                        <div className="col-md-3 mx-auto mb-4">
                        <h6 className="text-uppercase font-weight-bold">Usefull Links</h6>
                        <hr className="bg-success mb-4 mt-0 d-inline-block mx-auto usefullLinks" />

                        <ul className="list-unstyled">
                            <li className="my-2"><Link href="#">Home</Link> </li>
                            <li className="my-2"><Link href="#">About</Link></li>
                            <li className="my-2"><Link href="#">Service</Link></li>
                            <li className="my-2"><Link href="#">Contact</Link></li>
                          </ul> 
                        </div>

                        <div className="col-md-2 mx-auto mb-4 contactDiv">
                        <h6 className="text-uppercase font-weight-bold ">Contact</h6>
                        <hr className="bg-success mb-4 mt-0 d-inline-block mx-auto usefullLinks" />

                        <ul className="list-unstyled">
                            <li className="my-2"><i className="fas fa-home mr-3"></i>Accra Digital Center</li>
                            <li className="my-2"><i className="far fa-envelope mr-3"></i>freecoding1@gmail.com</li>
                            <li className="my-2"><i className="fas fa-phone mr-3"></i>+233245496252</li>
                            <li className="my-2"><i className="fas fa-print mr-3"></i>+233245696997</li>
                          </ul> 
                        </div>

                        
                        
                      </div>
                    </div>
                    
                  </footer>
                 
                    <div className="footer-copyright text-center py-3 copyright">
                          <p>&copy; Copyright <Link href="#">project@codetrain.com</Link></p>
                          <p>Designed By Joseph Asante</p>
                        </div>
              </main>
  
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
