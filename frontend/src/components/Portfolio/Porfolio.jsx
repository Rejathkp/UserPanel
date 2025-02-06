// import React, { useState } from "react";
// import "./Portfolio.css";

// const Portfolio = () => {
//   const [links, setLinks] = useState([
//     { title: "GitHub", url: "https://github.com/abhishekshankar" },
//     { title: "Behance", url: "https://www.behance.net/abhishekshankar" },
//     { title: "Personal Website", url: "http://www.abhishekshankar.info" },
//   ]);

//   return (
//     <div className="portfolio-card">
//       <div className="portfolio-header">
//         <h3>Portfolio</h3>
//         <button className="update-btn">Update Portfolio</button>
//       </div>
//       <div className="portfolio-content">
//         {links.map((link, index) => (
//           <div key={index} className="portfolio-item">
//             <strong>{link.title}</strong>
//             <a href={link.url} target="_blank" rel="noopener noreferrer">
//               {link.url}
//             </a>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Portfolio;
















// import React, { useState } from "react";
// import "./Portfolio.css";

// const Portfolio = () => {
//   // State to manage the list of portfolio links
//   const [links, setLinks] = useState([
//     { title: "GitHub", url: "https://github.com/abhishekshankar" },
//     { title: "Behance", url: "https://www.behance.net/abhishekshankar" },
//     { title: "Personal Website", url: "http://www.abhishekshankar.info" },
//   ]);

//   // State to manage modal visibility
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   // State to manage the form inputs for the modal
//   const [newLink, setNewLink] = useState({ title: "", url: "" });

//   // Function to open the modal
//   const openModal = () => {
//     setIsModalOpen(true);
//   };

//   // Function to close the modal
//   const closeModal = () => {
//     setIsModalOpen(false);
//     setNewLink({ title: "", url: "" }); // Reset form fields
//   };

//   // Function to handle adding a new link
//   const handleAddLink = () => {
//     if (newLink.title.trim() !== "" && newLink.url.trim() !== "") {
//       setLinks([...links, { title: newLink.title.trim(), url: newLink.url.trim() }]);
//       closeModal(); // Close the modal after adding
//     }
//   };

//   // Function to handle deleting a link
//   const handleDeleteLink = (index) => {
//     setLinks(links.filter((_, i) => i !== index)); // Remove the link at the given index
//   };

//   return (
//     <div className="portfolio-card">
//       {/* Header Section */}
//       <div className="portfolio-header">
//         <h3>Portfolio</h3>
//         <button className="update-btn" onClick={openModal}>
//           {links.length === 0 ? "Add" : "Update"}
//         </button>
//       </div>

//       {/* Portfolio Content */}
//       <div className="portfolio-content">
//         {links.length > 0 ? (
//           links.map((link, index) => (
//             <div key={index} className="portfolio-item">
//               <strong>{link.title}</strong>
//               <a href={link.url} target="_blank" rel="noopener noreferrer">
//                 {link.url}
//               </a>
//               <span
//                 className="delete-btn"
//                 onClick={() => handleDeleteLink(index)}
//               >
//                 &times;
//               </span>
//             </div>
//           ))
//         ) : (
//           <p>No portfolio links added yet.</p>
//         )}
//       </div>

//       {/* Modal */}
//       {isModalOpen && (
//         <div className="modal-overlay">
//           <div className="modal">
//             <span className="close-btn" onClick={closeModal}>
//               &times;
//             </span>
//             <h2>{links.length === 0 ? "Add Portfolio Link" : "Update Portfolio Link"}</h2>
//             <div className="form-group">
//               <label>Title</label>
//               <input
//                 type="text"
//                 placeholder="Enter title..."
//                 value={newLink.title}
//                 onChange={(e) => setNewLink({ ...newLink, title: e.target.value })}
//               />
//             </div>
//             <div className="form-group">
//               <label>URL</label>
//               <input
//                 type="url"
//                 placeholder="Enter URL..."
//                 value={newLink.url}
//                 onChange={(e) => setNewLink({ ...newLink, url: e.target.value })}
//               />
//             </div>
//             <div className="modal-actions">
//               <button className="cancel-btn" onClick={closeModal}>
//                 Cancel
//               </button>
//               <button className="save-btn" onClick={handleAddLink}>
//                 Save
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Portfolio;



















// import React, { useState, useEffect } from "react";
// import axios from "axios"; // Import axios
// import "./Portfolio.css";

// const Portfolio = () => {
//   // State to manage the list of portfolio links
//   const [links, setLinks] = useState([]);

//   // State to manage modal visibility
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   // State to manage the form inputs for the modal
//   const [newLink, setNewLink] = useState({ title: "", url: "" });

//   // Function to fetch portfolio links from the backend
//   useEffect(() => {
//     const fetchPortfolioLinks = async () => {
//       try {
//         const response = await axios.get("http://localhost:4000/api/portfolio");
//         setLinks(response.data); // Set the fetched links
//       } catch (error) {
//         console.error("Error fetching portfolio links:", error);
//       }
//     };
//     fetchPortfolioLinks();
//   }, []);

//   // Function to open the modal
//   const openModal = () => {
//     setIsModalOpen(true);
//   };

//   // Function to close the modal
//   const closeModal = () => {
//     setIsModalOpen(false);
//     setNewLink({ title: "", url: "" }); // Reset form fields
//   };

//   // Function to handle adding a new link
//   const handleAddLink = async () => {
//     if (newLink.title.trim() !== "" && newLink.url.trim() !== "") {
//       try {
//         const response = await axios.post("http://localhost:4000/api/portfolio", newLink);
//         setLinks([...links, response.data.link]); // Add the new link to the list
//         closeModal(); // Close the modal after adding
//       } catch (error) {
//         console.error("Error adding portfolio link:", error);
//       }
//     }
//   };

//   // Function to handle deleting a link
//   const handleDeleteLink = async (id) => {
//     try {
//       await axios.delete(`http://localhost:4000/api/portfolio/${id}`);
//       setLinks(links.filter((link) => link._id !== id)); // Remove the link from the list
//     } catch (error) {
//       console.error("Error deleting portfolio link:", error);
//     }
//   };

//   return (
//     <div className="portfolio-card">
//       {/* Header Section */}
//       <div className="portfolio-header">
//         <h3>Portfolio</h3>
//         <button className="update-btn" onClick={openModal}>
//           {links.length === 0 ? "Add" : "Update"}
//         </button>
//       </div>

//       {/* Portfolio Content */}
//       <div className="portfolio-content">
//         {links.length > 0 ? (
//           links.map((link) => (
//             <div key={link._id} className="portfolio-item">
//               <strong>{link.title}</strong>
//               <a href={link.url} target="_blank" rel="noopener noreferrer">
//                 {link.url}
//               </a>
//               <span
//                 className="delete-btn"
//                 onClick={() => handleDeleteLink(link._id)}
//               >
//                 &times;
//               </span>
//             </div>
//           ))
//         ) : (
//           <p>No portfolio links added yet.</p>
//         )}
//       </div>

//       {/* Modal */}
//       {isModalOpen && (
//         <div className="modal-overlay">
//           <div className="modal">
//             <span className="close-btn" onClick={closeModal}>
//               &times;
//             </span>
//             <h2>{links.length === 0 ? "Add Portfolio Link" : "Update Portfolio Link"}</h2>
//             <div className="form-group">
//               <label>Title</label>
//               <input
//                 type="text"
//                 placeholder="Enter title..."
//                 value={newLink.title}
//                 onChange={(e) => setNewLink({ ...newLink, title: e.target.value })}
//               />
//             </div>
//             <div className="form-group">
//               <label>URL</label>
//               <input
//                 type="url"
//                 placeholder="Enter URL..."
//                 value={newLink.url}
//                 onChange={(e) => setNewLink({ ...newLink, url: e.target.value })}
//               />
//             </div>
//             <div className="modal-actions">
//               <button className="cancel-btn" onClick={closeModal}>
//                 Cancel
//               </button>
//               <button className="save-btn" onClick={handleAddLink}>
//                 Save
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Portfolio;
















import React, { useState, useEffect } from "react";
import axios from "axios"; // Import axios
import "./Portfolio.css";

const Portfolio = () => {
  // State to manage the list of portfolio links
  const [links, setLinks] = useState([]);

  // State to manage modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  // State to manage the form inputs for the modal
  const [newLink, setNewLink] = useState({ title: "", url: "" });

  // Function to fetch portfolio links from the backend
  useEffect(() => {
    const fetchPortfolioLinks = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/portfolio");
        setLinks(response.data); // Set the fetched links
      } catch (error) {
        console.error("Error fetching portfolio links:", error);
      }
    };
    fetchPortfolioLinks();
  }, []);

  // Function to open the modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
    setNewLink({ title: "", url: "" }); // Reset form fields
  };

  // Function to handle adding a new link
  const handleAddLink = async () => {
    if (newLink.title.trim() !== "" && newLink.url.trim() !== "") {
      try {
        const response = await axios.post("http://localhost:4000/api/portfolio", newLink);
        setLinks([...links, response.data.link]); // Add the new link to the list
        closeModal(); // Close the modal after adding
      } catch (error) {
        console.error("Error adding portfolio link:", error);
      }
    }
  };

  // Function to handle deleting a link
  const handleDeleteLink = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/api/portfolio/${id}`);
      setLinks(links.filter((link) => link._id !== id)); // Remove the link from the list
    } catch (error) {
      console.error("Error deleting portfolio link:", error);
    }
  };

  return (
    <div className="portfolio-card">
      {/* Header Section */}
      <div className="portfolio-header">
        <h3>Portfolio</h3>
        <button className="update-btn" onClick={openModal}>
          Add
        </button>
      </div>

      {/* Portfolio Content */}
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

      {/* Modal */}
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