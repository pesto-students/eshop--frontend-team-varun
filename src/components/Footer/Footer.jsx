import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer className="py-4 px-5">
        <div className="container">
          <div className="footer-section">
            <div className="contact-info">
              <h3 className="text-white mb-4 fw-bolder">Eshop</h3>
              <div>
                <address className="text-white fs-6">
                  Hno: 277 Near Vill chopal, <br /> Sonipat, Haryana <br />
                  Pincode: 131101
                </address>
                <a
                  href="tel:+91 9558048508"
                  className="mt-3 d-block mb-1 text-white text-decoration-none"
                >
                  +91 9485874548
                </a>
                <a
                  href="mailto:shah.darshilp@gmail.com"
                  className="mt-2 d-block mb-0 text-white text-decoration-none"
                >
                  eshop.ele@gmail.com
                </a>
              </div>
            </div>
            <div className="quick-links">
              <h4 className="text-white mb-4">Quick Links</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1 text-decoration-none">
                  Laptops
                </Link>
                <Link className="text-white py-2 mb-1 text-decoration-none">
                  Headphones
                </Link>
                <Link className="text-white py-2 mb-1 text-decoration-none">
                  Tablets
                </Link>
                <Link className="text-white py-2 mb-1 text-decoration-none">
                  Watch
                </Link>
              </div>
            </div>
            <div className="info">
              <h4 className="text-white mb-4">Information</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1 text-decoration-none">
                  Privacy Policy
                </Link>
                <Link className="text-white py-2 mb-1 text-decoration-none">
                  Refund Policy
                </Link>
                <Link className="text-white py-2 mb-1 text-decoration-none">
                  Shipping Policy
                </Link>
                <Link className="text-white py-2 mb-1 text-decoration-none">
                  Terms & Condition
                </Link>
                <Link className="text-white py-2 mb-1 text-decoration-none">
                  Blogs
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center mb-0 text-white">
                &copy; {new Date().getFullYear()}; Powered by Developer's corner
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
