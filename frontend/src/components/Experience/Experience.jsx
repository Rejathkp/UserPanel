// import React, { useState } from "react";
// import "./Experience.css";
// import { FaTrash } from "react-icons/fa"; // Import trash icon from react-icons

// const Experience = () => {
//   // State to manage the list of experiences
//   const [experiences, setExperiences] = useState([
//     {
//       role: "Software Developer",
//       company: "Tech Innovations Inc., Kozhikode",
//       duration: "January 2021 - Present",
//       projects: ["ASAP CSP", "Kannur International Airport", "Kerala Police"],
//     },
//     {
//       role: "Project Manager",
//       company: "BuildRight Construction Co., Pune",
//       duration: "June 2016 - November 2021",
//       projects: [],
//     },
//   ]);

//   // State to manage modal visibility
//   const [isAddModalOpen, setIsAddModalOpen] = useState(false);
//   const [isEditModalOpen, setIsEditModalOpen] = useState(false);

//   // State to manage form inputs for adding/editing experience
//   const [newExperience, setNewExperience] = useState({
//     role: "",
//     company: "",
//     duration: "",
//     projects: [],
//   });

//   // State to track the index of the experience being edited
//   const [editIndex, setEditIndex] = useState(null);

//   // Function to open the Add modal
//   const openAddModal = () => {
//     setNewExperience({ role: "", company: "", duration: "", projects: [] });
//     setIsAddModalOpen(true);
//   };

//   // Function to close the Add modal
//   const closeAddModal = () => {
//     setIsAddModalOpen(false);
//   };

//   // Function to open the Edit modal
//   const openEditModal = (index) => {
//     setEditIndex(index);
//     setNewExperience(experiences[index]);
//     setIsEditModalOpen(true);
//   };

//   // Function to close the Edit modal
//   const closeEditModal = () => {
//     setIsEditModalOpen(false);
//   };

//   // Function to handle adding a new experience
//   const handleAddExperience = () => {
//     if (newExperience.role.trim() !== "" && newExperience.company.trim() !== "") {
//       setExperiences([...experiences, newExperience]);
//       closeAddModal();
//     }
//   };

//   // Function to handle updating an existing experience
//   const handleUpdateExperience = () => {
//     if (newExperience.role.trim() !== "" && newExperience.company.trim() !== "") {
//       const updatedExperiences = [...experiences];
//       updatedExperiences[editIndex] = newExperience;
//       setExperiences(updatedExperiences);
//       closeEditModal();
//     }
//   };

//   // Function to handle deleting an experience
//   const handleDeleteExperience = (index) => {
//     const updatedExperiences = experiences.filter((_, i) => i !== index);
//     setExperiences(updatedExperiences);
//   };

//   return (
//     <div className="work-experience">
//       {/* Header Section */}
//       <div className="experience-header">
//         <h3>Work Experience</h3>
//         <button className="add-btn" onClick={openAddModal}>
//           Add Experience
//         </button>
//       </div>

//       {/* Experience Content */}
//       <div className="experience-content">
//         {experiences.map((exp, index) => (
//           <div key={index} className="experience-card">
//             <div className="experience-role">
//               <strong>{exp.role}</strong>
//               <div style={{ display: "flex", gap: "5px" }}>
//                 <button className="edit-btn" onClick={() => openEditModal(index)}>
//                   Edit
//                 </button>
//                 <button
//                   className="delete-btn"
//                   onClick={() => handleDeleteExperience(index)}
//                 >
//                   <FaTrash />
//                 </button>
//               </div>
//             </div>
//             <p className="experience-company">{exp.company}</p>
//             <p className="experience-duration">{exp.duration}</p>
//             {exp.projects.length > 0 && (
//               <div className="top-projects">
//                 <strong>Top Projects</strong>
//                 <div className="project-tags">
//                   {exp.projects.map((project, i) => (
//                     <span key={i} className="project-tag">
//                       {project}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             )}
//           </div>
//         ))}
//       </div>

//       {/* Add Modal */}
//       {isAddModalOpen && (
//         <div className="modal-overlay">
//           <div className="modal-content">
//             <span className="close-btn" onClick={closeAddModal}>
//               &times;
//             </span>
//             <h2>Add Work Experience</h2>
//             <div className="modal-form">
//               <div className="form-row">
//                 <div className="form-group">
//                   <label>Role</label>
//                   <input
//                     type="text"
//                     placeholder="Enter role..."
//                     value={newExperience.role}
//                     onChange={(e) =>
//                       setNewExperience({ ...newExperience, role: e.target.value })
//                     }
//                   />
//                 </div>
//                 <div className="form-group">
//                   <label>Company</label>
//                   <input
//                     type="text"
//                     placeholder="Enter company..."
//                     value={newExperience.company}
//                     onChange={(e) =>
//                       setNewExperience({ ...newExperience, company: e.target.value })
//                     }
//                   />
//                 </div>
//               </div>
//               <div className="form-row">
//                 <div className="form-group">
//                   <label>Duration</label>
//                   <input
//                     type="text"
//                     placeholder="Enter duration..."
//                     value={newExperience.duration}
//                     onChange={(e) =>
//                       setNewExperience({ ...newExperience, duration: e.target.value })
//                     }
//                   />
//                 </div>
//                 <div className="form-group">
//                   <label>Projects (comma-separated)</label>
//                   <input
//                     type="text"
//                     placeholder="Enter projects..."
//                     value={newExperience.projects.join(",")}
//                     onChange={(e) =>
//                       setNewExperience({
//                         ...newExperience,
//                         projects: e.target.value.split(",").map((p) => p.trim()),
//                       })
//                     }
//                   />
//                 </div>
//               </div>
//             </div>
//             <div className="modal-buttons">
//               <button className="cancel-btn" onClick={closeAddModal}>
//                 Cancel
//               </button>
//               <button className="save-btn" onClick={handleAddExperience}>
//                 Save
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Edit Modal */}
//       {isEditModalOpen && (
//         <div className="modal-overlay">
//           <div className="modal-content">
//             <span className="close-btn" onClick={closeEditModal}>
//               &times;
//             </span>
//             <h2>Edit Work Experience</h2>
//             <div className="modal-form">
//               <div className="form-row">
//                 <div className="form-group">
//                   <label>Role</label>
//                   <input
//                     type="text"
//                     placeholder="Enter role..."
//                     value={newExperience.role}
//                     onChange={(e) =>
//                       setNewExperience({ ...newExperience, role: e.target.value })
//                     }
//                   />
//                 </div>
//                 <div className="form-group">
//                   <label>Company</label>
//                   <input
//                     type="text"
//                     placeholder="Enter company..."
//                     value={newExperience.company}
//                     onChange={(e) =>
//                       setNewExperience({ ...newExperience, company: e.target.value })
//                     }
//                   />
//                 </div>
//               </div>
//               <div className="form-row">
//                 <div className="form-group">
//                   <label>Duration</label>
//                   <input
//                     type="text"
//                     placeholder="Enter duration..."
//                     value={newExperience.duration}
//                     onChange={(e) =>
//                       setNewExperience({ ...newExperience, duration: e.target.value })
//                     }
//                   />
//                 </div>
//                 <div className="form-group">
//                   <label>Projects (comma-separated)</label>
//                   <input
//                     type="text"
//                     placeholder="Enter projects..."
//                     value={newExperience.projects.join(",")}
//                     onChange={(e) =>
//                       setNewExperience({
//                         ...newExperience,
//                         projects: e.target.value.split(",").map((p) => p.trim()),
//                       })
//                     }
//                   />
//                 </div>
//               </div>
//             </div>
//             <div className="modal-buttons">
//               <button className="cancel-btn" onClick={closeEditModal}>
//                 Cancel
//               </button>
//               <button className="save-btn" onClick={handleUpdateExperience}>
//                 Save
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Experience;








import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaTrash } from "react-icons/fa";
import "./Experience.css"

const Experience = () => {
  // State to manage the list of experiences
  const [experiences, setExperiences] = useState([]);

  // State to manage modal visibility
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  // State to manage form inputs for adding/editing experience
  const [newExperience, setNewExperience] = useState({
    role: "",
    company: "",
    duration: "",
    projects: [],
  });

  // State to track the ID of the experience being edited
  const [editId, setEditId] = useState(null);

  // Fetch experiences from the backend
  useEffect(() => {
    const fetchExperiences = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/experiences");
        setExperiences(response.data);
      } catch (error) {
        console.error("Error fetching experiences:", error);
      }
    };
    fetchExperiences();
  }, []);

  // Function to open the Add modal
  const openAddModal = () => {
    setNewExperience({ role: "", company: "", duration: "", projects: [] });
    setIsAddModalOpen(true);
  };

  // Function to close the Add modal
  const closeAddModal = () => {
    setIsAddModalOpen(false);
  };

  // Function to open the Edit modal
  const openEditModal = (experience) => {
    setEditId(experience._id);
    setNewExperience(experience);
    setIsEditModalOpen(true);
  };

  // Function to close the Edit modal
  const closeEditModal = () => {
    setIsEditModalOpen(false);
  };

  // Function to handle adding a new experience
  const handleAddExperience = async () => {
    if (newExperience.role.trim() !== "" && newExperience.company.trim() !== "") {
      try {
        const response = await axios.post("http://localhost:4000/api/experiences", newExperience);
        setExperiences([...experiences, response.data.experience]);
        closeAddModal();
      } catch (error) {
        console.error("Error adding experience:", error);
      }
    }
  };

  // Function to handle updating an existing experience
  const handleUpdateExperience = async () => {
    if (newExperience.role.trim() !== "" && newExperience.company.trim() !== "") {
      try {
        const response = await axios.put(
          `http://localhost:4000/api/experiences/${editId}`,
          newExperience
        );
        const updatedExperiences = experiences.map((exp) =>
          exp._id === editId ? response.data.experience : exp
        );
        setExperiences(updatedExperiences);
        closeEditModal();
      } catch (error) {
        console.error("Error updating experience:", error);
      }
    }
  };

  // Function to handle deleting an experience
  const handleDeleteExperience = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/api/experiences/${id}`);
      setExperiences(experiences.filter((exp) => exp._id !== id));
    } catch (error) {
      console.error("Error deleting experience:", error);
    }
  };

  return (
    <div className="work-experience">
      {/* Header Section */}
      <div className="experience-header">
        <h3>Work Experience</h3>
        <button className="add-btn" onClick={openAddModal}>
          Add Experience
        </button>
      </div>

      {/* Experience Content */}
      <div className="experience-content">
        {experiences.length > 0 ? (
          experiences.map((exp) => (
            <div key={exp._id} className="experience-card">
              <div className="experience-role">
                
                  <p>{exp.role}</p>
                  <div style={{ display: "flex" }}>
                    <button className="edit-btn" onClick={() => openEditModal(exp)}>
                      Edit
                    </button>
                    <button
                      className="delete-btn"
                      onClick={() => handleDeleteExperience(exp._id)}
                    >
                      <FaTrash />
                    </button>
                  </div>
                
                
              </div>
              <p className="experience-company">{exp.company}</p>
              <p className="experience-duration">{exp.duration}</p>
              {exp.projects.length > 0 && (
                <div className="top-projects">
                  <p>Top Projects</p>
                  <div className="project-tags">
                    {exp.projects.map((project, i) => (
                      <span key={i} className="project-tag">
                        {project}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))
        ) : (
          <p>No work experiences added yet.</p>
        )}
      </div>

      {/* Add Modal */}
      {isAddModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <span className="close-btn" onClick={closeAddModal}>
              &times;
            </span>
            <h2>Add Work Experience</h2>
            <div className="modal-form">
              <div className="form-row">
                <div className="form-group">
                  <label>Role</label>
                  <input
                    type="text"
                    placeholder="Enter role..."
                    value={newExperience.role}
                    onChange={(e) =>
                      setNewExperience({ ...newExperience, role: e.target.value })
                    }
                  />
                </div>
                <div className="form-group">
                  <label>Company</label>
                  <input
                    type="text"
                    placeholder="Enter company..."
                    value={newExperience.company}
                    onChange={(e) =>
                      setNewExperience({ ...newExperience, company: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Duration</label>
                  <input
                    type="text"
                    placeholder="Enter duration..."
                    value={newExperience.duration}
                    onChange={(e) =>
                      setNewExperience({ ...newExperience, duration: e.target.value })
                    }
                  />
                </div>
                <div className="form-group">
                  <label>Projects (comma-separated)</label>
                  <input
                    type="text"
                    placeholder="Enter projects..."
                    value={newExperience.projects.join(",")}
                    onChange={(e) =>
                      setNewExperience({
                        ...newExperience,
                        projects: e.target.value.split(",").map((p) => p.trim()),
                      })
                    }
                  />
                </div>
              </div>
            </div>
            <div className="modal-buttons">
              <button className="cancel-btn" onClick={closeAddModal}>
                Cancel
              </button>
              <button className="save-btn" onClick={handleAddExperience}>
                Save
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Edit Modal */}
      {isEditModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <span className="close-btn" onClick={closeEditModal}>
              &times;
            </span>
            <h2>Edit Work Experience</h2>
            <div className="modal-form">
              <div className="form-row">
                <div className="form-group">
                  <label>Role</label>
                  <input
                    type="text"
                    placeholder="Enter role..."
                    value={newExperience.role}
                    onChange={(e) =>
                      setNewExperience({ ...newExperience, role: e.target.value })
                    }
                  />
                </div>
                <div className="form-group">
                  <label>Company</label>
                  <input
                    type="text"
                    placeholder="Enter company..."
                    value={newExperience.company}
                    onChange={(e) =>
                      setNewExperience({ ...newExperience, company: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Duration</label>
                  <input
                    type="text"
                    placeholder="Enter duration..."
                    value={newExperience.duration}
                    onChange={(e) =>
                      setNewExperience({ ...newExperience, duration: e.target.value })
                    }
                  />
                </div>
                <div className="form-group">
                  <label>Projects (comma-separated)</label>
                  <input
                    type="text"
                    placeholder="Enter projects..."
                    value={newExperience.projects.join(",")}
                    onChange={(e) =>
                      setNewExperience({
                        ...newExperience,
                        projects: e.target.value.split(",").map((p) => p.trim()),
                      })
                    }
                  />
                </div>
              </div>
            </div>
            <div className="modal-buttons">
              <button className="cancel-btn" onClick={closeEditModal}>
                Cancel
              </button>
              <button className="save-btn" onClick={handleUpdateExperience}>
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Experience;