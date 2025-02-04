import React from 'react'

function Header() {
  return (
    <div>
           <header>
          {/* container start */}
          <div className="container">
            {/* navigation bar */}
            <nav
                className={`navbar navbar-expand-lg `}
                style={{
                  position: "fixed",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "75px",
                  backgroundColor: "rgba(255, 255, 255, 0.7)", 
                  backdropFilter: "blur(8px)", 
                  WebkitBackdropFilter: "blur(8px)",
                  transition: "transform 0.3s ease-in-out",
                
                }}
          
            >
              <a className="navbar-brand" href="">
                <img
                  src="https://res.cloudinary.com/dx9kqohjf/image/upload/v1737615363/Image_5_1__processed_3_kxlo2n.png"
                  alt="Logo"
                  style={{ marginTop: "8px",  width: 200 , marginLeft: "50px" }}
                />
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon">
                  {/* <i class="icofont-navigation-menu ico_menu"></i> */}
                  <span className="toggle-wrap">
                    <span className="toggle-bar" />
                  </span>
                </span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
                style={{ marginLeft: "48rem" }}
              >
                <ul className="navbar-nav ml-auto">
                  {/* secondery menu start */}
                  <li className="nav-item has_dropdown">
                    <a className="nav-link" href="">
                      <button
                        style={{
                          backgroundColor: "#979a97",
                          color: "white",
                          border: "none",
                          padding: "5px 10px",
                          fontSize: 16,
                          cursor: "pointer",
                          transition: "background-color 0.3s ease",
                          borderRadius: 5,
                          width: 100,
                        }}
                        onMouseOver={(e) =>
                          (e.target.style.backgroundColor = "#fb5b29")
                        }
                        onMouseOut={(e) =>
                          (e.target.style.backgroundColor = "#979a97")
                        }
                      >
                        Home
                      </button>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="https://khanakhazana.genaiapp.io/page/vendor-registration"
                      target="_blank"
                    >
                      <button
                        style={{
                          backgroundColor: "#979a97",
                          color: "white",
                          border: "none",
                          padding: "5px 10px",
                          fontSize: 16,
                          cursor: "pointer",
                          transition: "background-color 0.3s ease",
                          borderRadius: 5,
                          width: 100,
                        }}
                        onMouseOver={(e) =>
                          (e.target.style.backgroundColor = "#fb5b29")
                        }
                        onMouseOut={(e) =>
                          (e.target.style.backgroundColor = "#979a97")
                        }
                      >
                        Merchants
                      </button>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="https://khanakhazana.genaiapp.io/page/driver-registration"
                      target="_blank"
                    >
                      <button
                        style={{
                          backgroundColor: "#979a97",
                          color: "white",
                          border: "none",
                          padding: "5px 10px",
                          fontSize: 16,
                          cursor: "pointer",
                          transition: "background-color 0.3s ease",
                          borderRadius: 5,
                          width: 100,
                        }}
                        onMouseOver={(e) =>
                          (e.target.style.backgroundColor = "#fb5b29")
                        }
                        onMouseOut={(e) =>
                          (e.target.style.backgroundColor = "#979a97")
                        }
                      >
                        Riders
                      </button>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="">
                      <button
                        style={{
                          backgroundColor: "#979a97",
                          color: "white",
                          border: "none",
                          padding: "5px 10px",
                          fontSize: 16,
                          cursor: "pointer",
                          transition: "background-color 0.3s ease",
                          borderRadius: 5,
                          width: 100,
                        }}
                        onMouseOver={(e) =>
                          (e.target.style.backgroundColor = "#fb5b29")
                        }
                        onMouseOut={(e) =>
                          (e.target.style.backgroundColor = "#979a97")
                        }
                      >
                        About Us
                      </button>
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
            {/* navigation end */}
          </div>
          {/* container end */}
        </header>
    </div>
  )
}

export default Header
