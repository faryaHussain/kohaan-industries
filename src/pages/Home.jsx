import React from "react";

const Home = () => {
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

            <div className="row">
              <div className="col-2">
                <h1>Give Your Workout A New Style!</h1>
                <p>
                  kohaan Industries is the name of multiple manufacturing
                  products. Nowadays,Many Brands are introducing in the market
                  and they play their role in the market as they want to grow or
                  as they put the effort on it.
                  <br />
                  kohaan Industries Pakistan Manufacturing company gives you an
                  authority to ask custom products along with custom logo and
                  material. We manufacture lots of products including Boxing
                  Gear, FitnessWear Accessories, Martial Arts, Sports Wear and
                  team wear, all range of gloves along fitness apparel.
                </p>
              </div>
              <div className="col-2">
                <img src="images/j2.jpg" alt="" />
              </div>
            </div>
            <a href="/products" className="btn">
              Explore Now &#8594;
            </a>
          </div>
        </div>
      </div>

      {/* <!------ featured catagories -------> */}
      <div className="categories">
        <div className="small-container">
          <div className="row">
            <div className="col-3">
              <img src="images/Hoodies/G1.jpg" alt="G1" />
            </div>

            <div className="col-3">
              <img src="images/Shirts/K3.jpg" alt="K3" />
            </div>
            <div className="col-3">
              <img src="images/Sweatshirts/E1.jpg" alt="E1" />
            </div>
          </div>
        </div>
      </div>
      {/* <!------ featured products -------> */}
      <div className="small-container">
        <h2 className="title">Featured Products</h2>
        <div className="row">
          <div className="col-4">
            <img src="images/Hoodies/F1.jpg" alt="F1" />

            <div className="rating"></div>
          </div>

          <div className="col-4">
            <img src="images/Shirts/F1.jpg" alt="F11" />

            <div className="rating"></div>
          </div>
          <div className="col-4">
            <img src="images/Shorts/J2.jpg" alt="J2" />

            <div className="rating"></div>
          </div>
          <div className="col-4">
            <img src="images/Tracksuits/I1.jpg" alt="I1" />

            <div className="rating"></div>
          </div>
        </div>
      </div>
      {/* <!----------------- footer ----------> */}
      <div className="foter">
        <div className="inner_foter">
          <div className="logo_container">
            <img src="images/logo.png" alt="loogo" />
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

export default Home;
