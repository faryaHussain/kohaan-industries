import React from "react";

const Products = () => {
  return (
    <>
      <div className="header">
        <div className="container">
          <div>
            <nav className="navbar">
              <div className="logo">
                <img src="images/logo.png" width="100px" alt="logo" />
              </div>
              <ul>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/products">Products</a>
                  <ul>
                    <li>
                      <a href="/products">Shirts & Hoodies</a>
                    </li>
                    <li>
                      <a href="/products2">Shorts & TankTop</a>
                    </li>
                    <li>
                      <a href="/products3">SweaterShirts & trackSuits</a>
                    </li>
                  </ul>
                </li>

                <li>
                  <a href="/aboutus">About Us</a>
                </li>
                <li>
                  <a href="/contactus">Contact</a>
                </li>
              </ul>
            </nav>

            <div className="products">
              <div className="container">
                <div className="flex">
                  <h1 className="lg title">Shirts</h1>
                </div>
                <div className="product-items">
                  {/* <!--Single product--> */}
                  {/* <!-- <div className="product">
            <div className="product-content">
              <div className="product-img">
                <img src="images/A2.jpg" alt="product image" />
              </div>
              <div className="product info">
                <div className="product-info-top">
                  <h2 className="sm-title">Red Hodie</h2>
                </div>
              </div>
              <div className="product-img">
                <img src="images/B1.jpg" alt="product image" />
              </div>
              <div className="product info">
                <div className="product-info-top">
                  <h2 className="sm-title">Gray Hodie</h2>
                </div>
              </div>
              <div className="product-img">
                <img src="images/D1.jpg" alt="product image" />
              </div>
              <div className="product info">
                <div className="product-info-top">
                  <h2 className="sm-title">Red Hodie</h2>
                </div>
              </div>
            </div>
          </div>--> */}
                  <div className="categories">
                    <div className="small-container">
                      <div className="row">
                        <div className="col-3">
                          <img src="images/Shirts/H2.jpg" alt="H2" />
                        </div>

                        <div className="col-3">
                          <img src="images/Shirts/A1.jpg" alt="A1" />
                        </div>
                        <div className="col-3">
                          <img src="images/Shirts/B3.jpg" alt="B3" />
                        </div>
                        <div className="col-3">
                          <img src="images/Shirts/C1.jpg" alt="A1C1" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="categories">
                    <div className="small-container">
                      <div className="row">
                        <div className="col-3">
                          <img src="images/Shirts/D1.jpg" alt="AD11" />
                        </div>

                        <div className="col-3">
                          <img src="images/Shirts/G1.jpg" alt="G1A1" />
                        </div>
                        <div className="col-3">
                          <img src="images/Shirts/F1.jpg" alt="A1F1" />
                        </div>
                        <div className="col-3">
                          <img src="images/Shirts/H1.jpg" alt="AH11" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="categories">
                    <div className="small-container">
                      <div className="row">
                        <div className="col-3">
                          <img src="images/Shirts/L1.jpg" alt="AL11" />
                        </div>

                        <div className="col-3">
                          <img src="images/Shirts/I1.jpg" alt="I1A1" />
                        </div>
                        <div className="col-3">
                          <img src="images/Shirts/J3.jpg" alt="J3" />
                        </div>
                        <div className="col-3">
                          <img src="images/Shirts/K1.jpg" alt="AK11" />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- End of single product--> */}
                </div>
              </div>
            </div>
            <div className="products">
              <div className="container">
                <div className="flex">
                  <h1 className="lg title">Hoodies</h1>
                </div>
                <div className="product-items">
                  {/* <!--Single product--> */}
                  {/* <!-- <div className="product">
            <div className="product-content">
              <div className="product-img">
                <img src="images/A2.jpg" alt="product image" />
              </div>
              <div className="product info">
                <div className="product-info-top">
                  <h2 className="sm-title">Red Hodie</h2>
                </div>
              </div>
              <div className="product-img">
                <img src="images/B1.jpg" alt="product image" />
              </div>
              <div className="product info">
                <div className="product-info-top">
                  <h2 className="sm-title">Gray Hodie</h2>
                </div>
              </div>
              <div className="product-img">
                <img src="images/D1.jpg" alt="product image" />
              </div>
              <div className="product info">
                <div className="product-info-top">
                  <h2 className="sm-title">Red Hodie</h2>
                </div>
              </div>
            </div>
          </div>--> */}
                  <div className="categories">
                    <div className="small-container">
                      <div className="row">
                        <div className="col-3">
                          <img src="images/Hoodies/A1.jpg" alt="A1" />
                        </div>

                        <div className="col-3">
                          <img src="images/Hoodies/B1.jpg" alt="B1" />
                        </div>
                        <div className="col-3">
                          <img src="images/Hoodies/C1.jpg" alt="C1" />
                        </div>
                        <div className="col-3">
                          <img src="images/Hoodies/C3.jpg" alt="C3" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="categories">
                    <div className="small-container">
                      <div className="row">
                        <div className="col-3">
                          <img src="images/Hoodies/D1.jpg" alt="D1" />
                        </div>

                        <div className="col-3">
                          <img src="images/Hoodies/E1.jpg" alt="E1" />
                        </div>
                        <div className="col-3">
                          <img src="images/Hoodies/F1.jpg" alt="F1" />
                        </div>
                        <div className="col-3">
                          <img src="images/Hoodies/H1.jpg" alt="H1" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="categories">
                    <div className="small-container">
                      <div className="row">
                        <div className="col-3">
                          <img src="images/Hoodies/H3.jpg" alt="H3" />
                        </div>

                        <div className="col-3">
                          <img src="images/Hoodies/K1.jpg" alt="K1" />
                        </div>
                        <div className="col-3">
                          <img src="images/Hoodies/I1.jpg" alt="I1" />
                        </div>
                        <div className="col-3">
                          <img src="images/Hoodies/J1.jpg" alt="J1" />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- End of single product--> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!----------------- footer ----------> */}
      <div className="foter">
        <div className="inner_foter">
          <div className="logo_container">
            <img src="images/logo.png" alt="logo" />
          </div>

          <div className="foter_third">
            <h2>Information</h2>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/aboutus">About us</a>
              </li>
              <li>
                <a href="/products">Products</a>
              </li>
              <li>
                <a href="/contact us">Contact</a>
              </li>
            </ul>
          </div>
          <div className="foter_third">
            <h2>Products</h2>
            <ul>
              <li>
                <a href="/products">Shirts & Hoodies</a>
              </li>
              <li>
                <a href="/products2">Shorts & TankTop</a>
              </li>
              <li>
                <a href="/products3">SweaterShirts & Tracksuits</a>
              </li>
            </ul>
          </div>
          <div className="foter_third">
            <h2>Follow us</h2>
            <ul>
              <li>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://instagram.com/kohaan_industries?igshid=YmMyMTA2M2Y="
                >
                  Instagram: Kohaan_industies
                </a>
              </li>

              <li>
                <a href="mailto:kohaanindustries@gmail.com">
                  Email: kohaanindustries@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
