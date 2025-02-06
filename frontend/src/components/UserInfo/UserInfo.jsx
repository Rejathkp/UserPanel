import React, { useState, useEffect } from "react";
import axios from "axios"; // Import Axios
import "./UserInfo.css";

const UserInfo = () => {
  const [userData, setUserData] = useState(null); // Store user data from backend
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({});

  // Fetch dummy user data from backend using Axios
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/users");
        setUserData(response.data);
        setFormData(response.data); // Initialize form data with fetched data
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    fetchUserData();
  }, []);

  const handleUpdateClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleGenderChange = (gender) => {
    setFormData({ ...formData, gender });
  };

  // Save changes using Axios
  const handleSaveChanges = async () => {
    try {
      const response = await axios.put("/api/users", formData);
      setUserData(response.data); // Update local state with saved data
      setIsModalOpen(false);
    } catch (error) {
      console.error("Error saving changes:", error);
    }
  };

  if (!userData) return <p>Loading...</p>; // Show loading state

  return (
    <div className="info-container">
      <div className="header">
        <h3>Basic Information</h3>
        <button className="update-btn" onClick={handleUpdateClick}>
          Update
        </button>
      </div>
      <div className="info-card">
        {/* Full Name, DOB, and Gender in one line */}
        <div className="info-row">
          <div className="info-group">
            <p>
              <strong>Full Name:</strong>
            </p>
            <p>
              {userData.firstName} {userData.lastName}
            </p>
          </div>
          <div className="info-group">
            <p>
              <strong>Date of Birth:</strong>
            </p>
            <p>
              {new Date(userData.dob).toLocaleDateString("en-GB", {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
              })}
            </p>
          </div>
          <div className="info-group">
            <p>
              <strong>Gender:</strong>
            </p>
            <p>{userData.gender}</p>
          </div>
        </div>

        {/* Mobile and Email in one line */}
        <div className="info-row">
          <div className="info-group">
            <p>
              <strong>Mobile:</strong>
            </p>
            <p>{userData.mobile} ✅</p>
          </div>
          <div className="info-group">
            <p>
              <strong>Email:</strong>
            </p>
            <p>{userData.email} ✅</p>
          </div>
        </div>

        {/* Aadhar */}
        <div className="info-row">
          <div className="info-group">
            <p>
              <strong>Aadhar:</strong>
            </p>
            <p>{userData.aadhar} ⚠</p>
          </div>
        </div>

        {/* Address */}
        <div className="info-row">
          <div className="info-group">
            <p>
              <strong>Address:</strong>
            </p>
            <p>
              {userData.address}, {userData.district}, {userData.state} -{" "}
              {userData.pincode}
            </p>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <span className="close-btn" onClick={handleCloseModal}>
              &times;
            </span>
            <h3>Basic Information</h3>
            <div className="user-modal-form">
              {/* First Name and Last Name */}
              <div className="form-row">
                <div className="form-group">
                  <label>First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName || ""}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label>Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName || ""}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              {/* DOB and Gender */}
              <div className="form-row">
                <div className="form-group">
                  <label>Date of Birth</label>
                  <input
                    type="date"
                    name="dob"
                    value={formData.dob || ""}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label>Gender</label>
                  <div className="gender-group">
                    <button
                      className={formData.gender === "Male" ? "selected" : ""}
                      onClick={() => handleGenderChange("Male")}
                    >
                      Male
                    </button>
                    <button
                      className={formData.gender === "Female" ? "selected" : ""}
                      onClick={() => handleGenderChange("Female")}
                    >
                      Female
                    </button>
                    <button
                      className={
                        formData.gender === "Non-Binary" ? "selected" : ""
                      }
                      onClick={() => handleGenderChange("Non-Binary")}
                    >
                      Non-Binary
                    </button>
                  </div>
                </div>
              </div>

              {/* Mobile and Email */}
              <div className="form-row">
                <div className="form-group">
                  <label>Mobile</label>
                  <input
                    type="text"
                    name="mobile"
                    value={formData.mobile || ""}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email || ""}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              {/* Aadhar and Address */}
              <div className="form-row">
                <div className="form-group">
                  <label>Aadhar</label>
                  <input
                    type="text"
                    name="aadhar"
                    value={formData.aadhar || ""}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label>Address</label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address || ""}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              {/* State, District, and Pincode */}
              <div className="form-row">
                <div className="form-group">
                  <label>State</label>
                  <select
                    name="state"
                    value={formData.state || ""}
                    onChange={handleInputChange}
                  >
                    <option>Kerala</option>
                    <option>Tamil Nadu</option>
                    <option>Karnataka</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>District</label>
                  <select
                    name="district"
                    value={formData.district || ""}
                    onChange={handleInputChange}
                  >
                    <option>Thiruvananthapuram</option>
                    <option>Kollam</option>
                    <option>Kochi</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Pincode</label>
                  <input
                    type="text"
                    name="pincode"
                    value={formData.pincode || ""}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              {/* Parent/Guardian Details */}
              <div className="form-row">
                <div className="form-group">
                  <label>Parent/Guardian Name</label>
                  <input
                    type="text"
                    name="parentName"
                    value={formData.parentName || ""}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label>Parent/Guardian Mobile</label>
                  <input
                    type="text"
                    name="parentMobile"
                    value={formData.parentMobile || ""}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              {/* Modal Buttons */}
              <div className="modal-buttons">
                <button className="cancel-btn" onClick={handleCloseModal}>
                  Cancel
                </button>
                <button className="save-btn" onClick={handleSaveChanges}>
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserInfo;