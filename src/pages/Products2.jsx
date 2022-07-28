import React from "react";

const Products2 = () => {
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
                <h1 className="lg title">Shorts</h1>
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
                        <img src="images/Shorts/A1.jpg" alt="A1" />
                      </div>

                      <div className="col-3">
                        <img src="images/Shorts/B1.jpg" alt="B1" />
                      </div>
                      <div className="col-3">
                        <img src="images/Shorts/C1.jpg" alt="C1" />
                      </div>
                      <div className="col-3">
                        <img src="images/Shorts/D1.jpg" alt="D1" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="categories">
                  <div className="small-container">
                    <div className="row">
                      <div className="col-3">
                        <img src="images/Shorts/E1.jpg" alt="E1" />
                      </div>

                      <div className="col-3">
                        <img src="images/Shorts/F1.jpg" alt="F1" />
                      </div>
                      <div className="col-3">
                        <img src="images/Shorts/G1.jpg" alt="G1" />
                      </div>
                      <div className="col-3">
                        <img src="images/Shorts/H1.jpg" alt="H1" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="categories">
                  <div className="small-container">
                    <div className="row">
                      <div className="col-3">
                        <img src="images/Shorts/I1.jpg" alt="I1" />
                      </div>

                      <div className="col-3">
                        <img src="images/Shorts/I3.jpg" alt="I3" />
                      </div>
                      <div className="col-3">
                        <img src="images/Shorts/J1.jpg" alt="J1" />
                      </div>
                      <div className="col-3">
                        <img src="images/Shorts/K1.jpg" alt="K1" />
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
                <h1 className="lg title">Tank Top</h1>
              </div>
              <div className="product-items">
                <div className="categories">
                  <div className="small-container">
                    <div className="row">
                      <div className="col-3">
                        <img src="images/Tanktop/A1.jpg" alt="A1" />
                      </div>

                      <div className="col-3">
                        <img src="images/Tanktop/B1.jpg" alt="B1" />
                      </div>
                      <div className="col-3">
                        <img src="images/Tanktop/C1.jpg" alt="C1" />
                      </div>
                      <div className="col-3">
                        <img src="images/Tanktop/D1.jpg" alt="D1" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="categories">
                  <div className="small-container">
                    <div className="row">
                      <div className="col-3">
                        <img src="images/Tanktop/E1.jpg" alt="E1" />
                      </div>

                      <div className="col-3">
                        <img src="images/Tanktop/E3.jpg" alt="E3" />
                      </div>
                      <div className="col-3">
                        <img src="images/Tanktop/F1.jpg" alt="F1" />
                      </div>
                      <div className="col-3">
                        <img src="images/Tanktop/F2.jpg" alt="F2" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="categories">
                  <div className="small-container">
                    <div className="row">
                      <div className="col-3">
                        <img src="images/Tanktop/F3.jpg" alt="F3" />
                      </div>

                      <div className="col-3">
                        <img src="images/Tanktop/G1.jpg" alt="G1" />
                      </div>
                      <div className="col-3">
                        <img src="images/Tanktop/H1.jpg" alt="H1" />
                      </div>
                      <div className="col-3">
                        <img src="images/Tanktop/J1.jpg" alt="JJ1" />
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

export default Products2;
