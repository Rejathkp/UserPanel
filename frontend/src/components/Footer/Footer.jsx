import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa6";
import "./Footer.css";
import { assets } from "../../assets/assets";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <div className="logo-wrapper">
            <div className="logo">
              <img src={assets.logo} alt="" />
            </div>
            <div>
              <h3>Quick Links</h3>
              <br />
              <div className="quick-links">
                {[
                  "About Us",
                  "Careers",
                  "Blogs",
                  "Press Release",
                  "Jobs",
                  "FAQ’s",
                  "Internship",
                  "Job Fair",
                  "Placement",
                  "Testimonials",
                  "Grievances",
                  "Contact Us",
                  "Privacy Policy",
                  "Terms & Conditions",
                  "Sitemap",
                ].map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="footer-sections">
            <div>
              <h3>Internship by Stream</h3>
              <ul>
                {[
                  "Computer Science",
                  "Electronics",
                  "Marketing",
                  "Finance",
                  "Civil",
                  "Chemical",
                  "View all Internship",
                ].map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3>Jobs by Stream</h3>
              <ul>
                {[
                  "Marketing",
                  "Web Development",
                  "Sales",
                  "Finance",
                  "Digital Marketing",
                  "Content Writing",
                  "View all Jobs",
                ].map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3>Guaranteed Courses</h3>
              <ul>
                {[
                  "HR Management",
                  "Digital Marketing",
                  "Electric Vehicle",
                  "UI/UX Design",
                  "Product Management",
                  "Full Stack Development",
                  "Data Science",
                ].map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3>Explore Companies</h3>
              <ul>
                {[
                  "Top Companies",
                  "IT Companies",
                  "MNC’s",
                  "Startup",
                  "Product Based",
                  "Govt. PSU",
                  "View all Companies",
                ].map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-right">
          <h3>Are you having any issues?</h3>
          <div className="support-info">
            <div className="footer-icon">
              <img src={assets.headset} alt="" />
              <p>
                Call Support: <strong>+91 9495999623</strong>
              </p>
            </div>
            <div className="footer-icon">
              <img src={assets.mail} alt="" />
              <p>
                Email Support: <strong>info@asapkerala.gov.in</strong>
              </p>
            </div>
          </div>
          <h3 className="mt-6">ASAP Kerala</h3>
          <p className="mt-2 text-sm">
            KINFRA Film and Video Park, Sainik School P.O, Chanthavila,
            Thiruvananthapuram, Kerala, India-695585
          </p>
          <h3 className="mt-6">Newsletter</h3>
          <p>Never miss a beat with our newsletter updates!</p>
          <div className="newsletter">
            <div className="newsletter-input-container">
              <input type="email" placeholder="Enter your email address" />
              <button>Subscribe</button>
            </div>
          </div>
        </div>
      </div>

      <div className="bottom">
        <div className="footer-bottom">
          <p>© 2024 ASAP Kerala. All Rights Reserved</p>
          <p>Powered by SRV InfoTech</p>
        </div>

        <div className="social-icons">
          <p>Stay Connected with Us</p>
          <FaFacebookF />
          <FaInstagram />
          <FaXTwitter />
          <FaLinkedinIn />
          <FaYoutube />
        </div>
      </div>
    </footer>
  );
}
