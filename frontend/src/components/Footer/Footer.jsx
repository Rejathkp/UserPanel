import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa6";
import "./Footer.css"; // Import the CSS file

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Section (70%) */}
        <div className="footer-left">
          <div className="logo-wrapper">
            <div className="logo">
              <img src="\src\assets\logo.svg" alt="" />
            </div>
            <div>
              {/* Quick Links */}
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
            {/* Internship & Jobs */}
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

        {/* Right Section (30%) */}
        <div className="footer-right">
          <h3>Are you having any issues?</h3>
          <div className="support-info">
            <p>
              📞 Call Support: <strong>+91 9495999623</strong>
            </p>
            <p>
              📧 Email Support: <strong>info@asapkerala.gov.in</strong>
            </p>
          </div>
          <h3 className="mt-6">ASAP Kerala</h3>
          <p className="mt-2 text-sm">
            KINFRA Film and Video Park, Sainik School P.O, Chanthavila,
            Thiruvananthapuram, Kerala, India-695585
          </p>
          <h3 className="mt-6">Newsletter</h3>
          <p>Never miss a beat with our newsletter updates!</p>
          <div className="newsletter">
            <input type="email" placeholder="Enter your email address" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>

      {/* Social Media Links & Copyright */}
      <div className="bottom">
        <div className="footer-bottom">
          <p>© 2024 ASAP Kerala. All Rights Reserved</p>
          <p>Powered by SRV InfoTech</p>
        </div>
        <div className="social-icons">
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
