import React from "react";

const Products3 = () => {
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
          </div>
          <div className="products">
            <div className="container">
              <div className="flex">
                <h1 className="lg title">Sweater Shirts</h1>
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
                        <img src="images/Sweatshirts/A1.jpg" alt="Aa1" />
                      </div>

                      <div className="col-3">
                        <img src="images/Sweatshirts/B1.jpg" alt="Bb1" />
                      </div>
                      <div className="col-3">
                        <img src="images/Sweatshirts/C1.jpg" alt="C21" />
                      </div>
                      <div className="col-3">
                        <img src="images/Sweatshirts/C2.jpg" alt="C22" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="categories">
                  <div className="small-container">
                    <div className="row">
                      <div className="col-3">
                        <img src="images/Sweatshirts/C3.jpg" alt="C3" />
                      </div>

                      <div className="col-3">
                        <img src="images/Sweatshirts/D1.jpg" alt="D1" />
                      </div>
                      <div className="col-3">
                        <img src="images/Sweatshirts/D2.jpg" alt="D2" />
                      </div>
                      <div className="col-3">
                        <img src="images/Sweatshirts/E1.jpg" alt="E1" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="categories">
                  <div className="small-container">
                    <div className="row">
                      <div className="col-3">
                        <img src="images/Sweatshirts/H1.jpg" alt="H1" />
                      </div>

                      <div className="col-3">
                        <img src="images/Sweatshirts/K1.jpg" alt="K1" />
                      </div>
                      <div className="col-3">
                        <img src="images/Sweatshirts/I1.jpg" alt="I1" />
                      </div>
                      <div className="col-3">
                        <img src="images/Sweatshirts/J1.jpg" alt="J1" />
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
                <h1 className="lg title">Track Suits</h1>
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
                        <img src="images/Tracksuits/A1.jpg" alt="Aa1" />
                      </div>

                      <div className="col-3">
                        <img src="images/Tracksuits/B1.jpg" alt="B1" />
                      </div>
                      <div className="col-3">
                        <img src="images/Tracksuits/C1.jpg" alt="C1" />
                      </div>
                      <div className="col-3">
                        <img src="images/Tracksuits/D1.jpg" alt="D1" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="categories">
                  <div className="small-container">
                    <div className="row">
                      <div className="col-3">
                        <img src="images/Tracksuits/E1.jpg" alt="E1" />
                      </div>

                      <div className="col-3">
                        <img src="images/Tracksuits/F1.jpg" alt="F1" />
                      </div>
                      <div className="col-3">
                        <img src="images/Tanktop/F1.jpg" alt="FF1" />
                      </div>
                      <div className="col-3">
                        <img src="images/Tracksuits/G2.jpg" alt="G2" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="categories">
                  <div className="small-container">
                    <div className="row">
                      <div className="col-3">
                        <img src="images/Tracksuits/H1.jpg" alt="H1" />
                      </div>

                      <div className="col-3">
                        <img src="images/Tracksuits/I1.jpg" alt="I1" />
                      </div>
                      <div className="col-3">
                        <img src="images/Tracksuits/J1.jpg" alt="J1" />
                      </div>
                      <div className="col-3">
                        <img src="images/Tracksuits/K1.jpg" alt="K1" />
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
                <a href="/contactus">Contact</a>
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

export default Products3;
