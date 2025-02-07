import React, { useState, useEffect } from "react";
import axios from "axios"; 
import "./Portfolio.css";

const Portfolio = () => {
  const [links, setLinks] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newLink, setNewLink] = useState({ title: "", url: "" });

  useEffect(() => {
    const fetchPortfolioLinks = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/portfolio");
        setLinks(response.data);
      } catch (error) {
        console.error("Error fetching portfolio links:", error);
      }
    };
    fetchPortfolioLinks();
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setNewLink({ title: "", url: "" }); 
  };

  const handleAddLink = async () => {
    if (newLink.title.trim() !== "" && newLink.url.trim() !== "") {
      try {
        const response = await axios.post("http://localhost:4000/api/portfolio", newLink);
        setLinks([...links, response.data.link]); 
        closeModal();
      } catch (error) {
        console.error("Error adding portfolio link:", error);
      }
    }
  };

  const handleDeleteLink = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/api/portfolio/${id}`);
      setLinks(links.filter((link) => link._id !== id)); 
    } catch (error) {
      console.error("Error deleting portfolio link:", error);
    }
  };

  return (
    <div className="portfolio-card">
      <div className="portfolio-header">
        <h3>Portfolio</h3>
        <button className="update-btn" onClick={openModal}>
          Add
        </button>
      </div>

      <div className="portfolio-content">
        {links.length > 0 ? (
          links.map((link) => (
            <div key={link._id} className="portfolio-item">
              <strong>{link.title}</strong>
              <a href={link.url} target="_blank" rel="noopener noreferrer">
                {link.url}
              </a>
              <span
                className="delete-btn"
                onClick={() => handleDeleteLink(link._id)}
              >
                &times;
              </span>
            </div>
          ))
        ) : (
          <p>No portfolio links added yet.</p>
        )}
      </div>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <span className="close-btn" onClick={closeModal}>
              &times;
            </span>
            <h2>Add Portfolio Link</h2>
            <div className="form-group">
              <label>Title</label>
              <input
                type="text"
                placeholder="Enter title..."
                value={newLink.title}
                onChange={(e) => setNewLink({ ...newLink, title: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label>URL</label>
              <input
                type="url"
                placeholder="Enter URL..."
                value={newLink.url}
                onChange={(e) => setNewLink({ ...newLink, url: e.target.value })}
              />
            </div>
            <div className="modal-actions">
              <button className="cancel-btn" onClick={closeModal}>
                Cancel
              </button>
              <button className="save-btn" onClick={handleAddLink}>
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;