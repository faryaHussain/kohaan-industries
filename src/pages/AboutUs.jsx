import React from "react";

const AboutUs = () => {
  return (
    <>
      <div className="header">
        <div className="container">
          <div>
            <nav className="navbar">
              <div className="logo">
                <img src="images/logo.png" width="100px" alt="logu" />
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
                  Our products have excellent workmanship. We are manufacturing
                  and exporting these products to different countries of the
                  World with a high rate of customer satisfaction. Our
                  manufacturing facility is fully equipped with the modern
                  machinery. We always use best material with proper
                  specification in the production so we have flawless
                  workmanship and superb finish.
                  <br />
                  Our quality system is well versed and our products comply with
                  all the requirements of our customers. We are eager to serve
                  your esteemed and prestigious organization on the basis of our
                  best quality products, very reasonable prices, just in time
                  delivery and excellent services, which are also the hallmark
                  of our company.
                </p>

                <p>
                  <br />
                  <br />
                  <br />
                  <br />
                  Social code of conducts :
                  <br />
                  <br />
                  <br />
                  No Child Labour
                  <br />
                  <br />
                  No Forced Labour
                  <br />
                  <br />
                  Health & Safety
                  <br />
                  <br />
                  Freedom of Association & Right of collective bargaining
                  <br />
                  <br />
                  Disciplinary practices
                  <br />
                  <br />
                  Working Hours
                  <br />
                  <br />
                  Remuneration
                  <br />
                  <br />
                  Management System
                </p>
                <p>
                  Thanks for your time and visiting our online catalogue, Should
                  you have any inquiry please feel free to contact with us by
                  email or Hot line call any time. We look forward working with
                  you!!
                  <br />
                  <br />
                  We remain, sincerely yours,
                  <br />
                  <br />
                  <br />
                </p>
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
                <a href="/Product2">Shorts & TankTop</a>
              </li>
              <li>
                <a href="products3">SweaterShirts & Tracksuits</a>
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
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="mailto:kohaanindustries@gmail.com"
                >
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

export default AboutUs;
