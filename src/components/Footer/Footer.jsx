// import React from "react";
// import "./Footer.css";

// const Footer = () => {
//   return (
//     <footer
//       className="text-center text-lg-start text-white"
//       style={{ backgroundColor: "#000000" }}
//     >
//       <section
//         className="d-flex justify-content-between p-4"
//         style={{
//           backgroundColor: "#000000",
//           borderBottom: "1px solid #6351ce",
//         }}
//       >
//         <div className="me-5">
//           <span>Get connected with us on social networks</span>
//         </div>
//         <div>
//           <a href="..." className="text-white me-4">
//             <i className="fab fa-facebook-f"></i>
//           </a>
//           <a href="..." className="text-white me-4">
//             <i className="fab fa-twitter"></i>
//           </a>
//           <a href="..." className="text-white me-4">
//             <i className="fab fa-google"></i>
//           </a>
//           <a href="..." className="text-white me-4">
//             <i className="fab fa-instagram"></i>
//           </a>
//           <a href="..." className="text-white me-4">
//             <i className="fab fa-linkedin"></i>
//           </a>
//           <a href="..." className="text-white me-4">
//             <i className="fab fa-github"></i>
//           </a>
//         </div>
//       </section>
//       <section className="">
//         <div className="container-fluid text-center text-md-start mt-5">
//           <div className="row mt-3">
//             <div className="col-md-4 col-lg-4 col-xl-3 mx-auto mb-4">
//               <h6 className="text-uppercase fs-4 fw-bold">E-Shop</h6>
//               <hr
//                 className="mb-4 mt-0 d-inline-block mx-auto"
//                 style={{
//                   width: "60px",
//                   backgroundColor: "#52057B",
//                   height: "2px",
//                 }}
//               />
//               <p>
//                 Here you can use rows and columns to organize your footer
//                 content. Lorem ipsum dolor sit amet, consectetur adipisicing
//                 elit.
//               </p>
//             </div>
//             <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-md-0 mb-4">
//               <h6 className="text-uppercase fw-semibold">Contact</h6>
//               <hr
//                 className="mb-4 mt-0 d-inline-block mx-auto"
//                 style={{
//                   width: "60px",
//                   backgroundColor: "#52057B",
//                   height: "2px",
//                 }}
//               />
//               {/* <p>e-shop Co., Ltd</p> */}
//               <p>
//                 <i className="fas fa-home mr-3"></i>
//                 1658 Rosewood Lane
//                 <br />
//                 New York city, NY
//               </p>
//               <p>
//                 <i className="fas fa-envelope mr-3"></i> admin@e-shope.com
//               </p>
//               <p>
//                 <i className="fas fa-phone mr-3"></i> 212 929 9953
//               </p>
//               <p>
//                 <i className="fas fa-print mr-3"></i> +01 234 567 89
//               </p>
//             </div>
//             <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
//               <h6 className="text-uppercase fw-semibold">
//                 Co-operation - Association
//               </h6>
//               <hr
//                 className="mb-4 mt-0 d-inline-block mx-auto"
//                 style={{
//                   width: "60px",
//                   backgroundColor: "#52057B",
//                   height: "2px",
//                 }}
//               />
//               <p>
//                 <a
//                   href="#!"
//                   className="text-white"
//                   style={{ textDecoration: "none" }}
//                 >
//                   Operation Regulation of EC-Exchange
//                 </a>
//               </p>
//               <p>
//                 <a
//                   href="#!"
//                   className="text-white"
//                   style={{ textDecoration: "none" }}
//                 >
//                   Return Policy
//                 </a>
//               </p>
//               <p>
//                 <a
//                   href="#!"
//                   className="text-white"
//                   style={{ textDecoration: "none" }}
//                 >
//                   Privacy Policy
//                 </a>
//               </p>
//               <p>
//                 <a
//                   href="#!"
//                   className="text-white"
//                   style={{ textDecoration: "none" }}
//                 >
//                   Selling With e-shope
//                 </a>
//               </p>
//               <p>
//                 <a
//                   href="#!"
//                   className="text-white"
//                   style={{ textDecoration: "none" }}
//                 >
//                   Help
//                 </a>
//               </p>
//             </div>
//             <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
//               <h6 className="text-uppercase fw-semibold">Customer Support</h6>
//               <hr
//                 className="mb-4 mt-0 d-inline-block mx-auto"
//                 style={{
//                   width: "60px",
//                   backgroundColor: "#52057B",
//                   height: "2px",
//                 }}
//               />
//               <p>
//                 <a
//                   href="#!"
//                   className="text-white"
//                   style={{ textDecoration: "none" }}
//                 >
//                   Hotline Customer Service
//                   <br />
//                   212 929 9953
//                 </a>
//               </p>
//               <p>
//                 <a
//                   href="#!"
//                   className="text-white"
//                   style={{ textDecoration: "none" }}
//                 >
//                   Frequently asked Questions
//                 </a>
//               </p>
//               <p>
//                 <a
//                   href="#!"
//                   className="text-white"
//                   style={{ textDecoration: "none" }}
//                 >
//                   Submit Support Request
//                 </a>
//               </p>
//               <p>
//                 <a
//                   href="#!"
//                   className="text-white"
//                   style={{ textDecoration: "none" }}
//                 >
//                   Ordering Guide
//                 </a>
//               </p>
//               <p>
//                 <a
//                   href="#!"
//                   className="text-white"
//                   style={{ textDecoration: "none" }}
//                 >
//                   Shipping Methods
//                 </a>
//               </p>
//             </div>
//             <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
//               <h6 className="text-uppercase fw-semibold">Others</h6>
//               <hr
//                 className="mb-4 mt-0 d-inline-block mx-auto"
//                 style={{
//                   width: "60px",
//                   backgroundColor: "#52057B",
//                   height: "2px",
//                 }}
//               />
//               <p>
//                 <a
//                   href="#!"
//                   className="text-white"
//                   style={{ textDecoration: "none" }}
//                 >
//                   Installment Purchase Guide
//                 </a>
//               </p>
//               <p>
//                 <a
//                   href="#!"
//                   className="text-white"
//                   style={{ textDecoration: "none" }}
//                 >
//                   Import Policy
//                 </a>
//               </p>
//               <p>
//                 <a
//                   href="#!"
//                   className="text-white"
//                   style={{ textDecoration: "none" }}
//                 >
//                   Customer Support <br />
//                   customer@e-shope.com
//                 </a>
//               </p>
//               <p>
//                 <a
//                   href="#!"
//                   className="text-white"
//                   style={{ textDecoration: "none" }}
//                 >
//                   Security Error Report:
//                   <br />
//                   admin@e.shope.com
//                 </a>
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       <div className="text-left p-3" style={{ backgroundColor: "white" }}>
//         <a className="text-black" href="..." style={{ textDecoration: "none" }}>
//           Copyright 2023 © E-Shop
//         </a>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

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
                  className="mt-3 d-block mb-1 text-white"
                >
                  +91 9485874548
                </a>
                <a
                  href="mailto:shah.darshilp@gmail.com"
                  className="mt-2 d-block mb-0 text-white"
                >
                  eshop.ele@gmail.com
                </a>
                {/* <div className="social_icons d-flex align-items-center gap-4 mt-4">
                  <a className="text-white" href="">
                    <BsLinkedin className="fs-4" />
                  </a>
                  <a className="text-white" href="">
                    <BsGithub className="fs-4" />
                  </a>
                  <a className="text-white" href="">
                    <BsYoutube className="fs-4" />
                  </a>
                  <a className="text-white" href="">
                    <BsInstagram className="fs-4" />
                  </a>
                </div> */}
              </div>
            </div>
            <div className="quick-links">
              <h4 className="text-white mb-4">Quick Links</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1">Laptops</Link>
                <Link className="text-white py-2 mb-1">Headphones</Link>
                <Link className="text-white py-2 mb-1">Tablets</Link>
                <Link className="text-white py-2 mb-1">Watch</Link>
              </div>
            </div>
            <div className="info">
              <h4 className="text-white mb-4">Information</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1">Privacy Policy</Link>
                <Link className="text-white py-2 mb-1">Refund Policy</Link>
                <Link className="text-white py-2 mb-1">Shipping Policy</Link>
                <Link className="text-white py-2 mb-1">Terms & Condition</Link>
                <Link className="text-white py-2 mb-1">Blogs</Link>
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
