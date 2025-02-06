// import React from "react";
// import "./Skills.css";

// const Skills = () => {
//   const skills = [
//     "Communication", "UI Designing", "UI Development", "Leadership",
//     "Human Resource", "php", "Accounting", "Data Science"
//   ];

//   return (
//     <div className="skills-container">
//       <div className="header">
//         <h3>Key Skills</h3>
//         <button className="update-btn">Update Skills</button>
//       </div>
//       <div className="skills-list">
//         {skills.map((skill, index) => (
//           <span key={index} className="skill-item">{skill}</span>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Skills;

















// import React, { useState } from "react";
// import "./Skills.css";

// const Skills = () => {
//   // State to manage the list of skills
//   const [skills, setSkills] = useState([
//     "Communication",
//     "UI Designing",
//     "UI Development",
//     "Leadership",
//     "Human Resource",
//     "php",
//     "Accounting",
//     "Data Science",
//   ]);

//   // State to manage modal visibility
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   // State to manage the new skill input
//   const [newSkill, setNewSkill] = useState("");

//   // Function to open the modal
//   const openModal = () => {
//     setIsModalOpen(true);
//   };

//   // Function to close the modal
//   const closeModal = () => {
//     setIsModalOpen(false);
//     setNewSkill(""); // Clear the input field when closing the modal
//   };

//   // Function to handle adding a new skill
//   const handleAddSkill = () => {
//     if (newSkill.trim() !== "") {
//       setSkills([...skills, newSkill.trim()]); // Add the new skill to the list
//       setNewSkill(""); // Clear the input field
//       closeModal(); // Close the modal after adding
//     }
//   };

//   return (
//     <div className="skills-container">
//       {/* Header Section */}
//       <div className="header">
//         <h3>Key Skills</h3>
//         <button className="update-btn" onClick={openModal}>
//           Add Skill
//         </button>
//       </div>

//       {/* Skills List */}
//       <div className="skills-list">
//         {skills.map((skill, index) => (
//           <span key={index} className="skill-item">
//             {skill}
//           </span>
//         ))}
//       </div>

//       {/* Modal */}
//       {isModalOpen && (
//         <div className="modal-overlay">
//           <div className="modal">
//             <span className="close-btn" onClick={closeModal}>
//               &times;
//             </span>
//             <h2>Add New Skill</h2>
//             <input
//               type="text"
//               placeholder="Enter a new skill..."
//               value={newSkill}
//               onChange={(e) => setNewSkill(e.target.value)}
//             />
//             <div className="modal-actions">
//               <button className="cancel-btn" onClick={closeModal}>
//                 Cancel
//               </button>
//               <button className="save-btn" onClick={handleAddSkill}>
//                 Save
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Skills;


















// import React, { useState } from "react";
// import "./Skills.css";

// const Skills = () => {
//   // State to manage the list of skills
//   const [skills, setSkills] = useState([
//     "Communication",
//     "UI Designing",
//     "UI Development",
//     "Leadership",
//     "Human Resource",
//     "php",
//     "Accounting",
//     "Data Science",
//   ]);

//   // State to manage modal visibility
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   // State to manage the new skill input
//   const [newSkill, setNewSkill] = useState("");

//   // Function to open the modal
//   const openModal = () => {
//     setIsModalOpen(true);
//   };

//   // Function to close the modal
//   const closeModal = () => {
//     setIsModalOpen(false);
//     setNewSkill(""); // Clear the input field when closing the modal
//   };

//   // Function to handle adding a new skill
//   const handleAddSkill = () => {
//     if (newSkill.trim() !== "") {
//       setSkills([...skills, newSkill.trim()]); // Add the new skill to the list
//       setNewSkill(""); // Clear the input field
//       closeModal(); // Close the modal after adding
//     }
//   };

//   // Function to handle deleting a skill
//   const handleDeleteSkill = (skillToDelete) => {
//     setSkills(skills.filter((skill) => skill !== skillToDelete)); // Remove the skill from the list
//   };

//   return (
//     <div className="skills-container">
//       {/* Header Section */}
//       <div className="header">
//         <h3>Key Skills</h3>
//         <button className="update-btn" onClick={openModal}>
//           Add Skill
//         </button>
//       </div>

//       {/* Skills List */}
//       <div className="skills-list">
//         {skills.map((skill, index) => (
//           <span key={index} className="skill-item">
//             {skill}
//             <span
//               className="delete-btn"
//               onClick={() => handleDeleteSkill(skill)}
//             >
//               &times;
//             </span>
//           </span>
//         ))}
//       </div>

//       {/* Modal */}
//       {isModalOpen && (
//         <div className="modal-overlay">
//           <div className="modal">
//             <span className="close-btn" onClick={closeModal}>
//               &times;
//             </span>
//             <h2>Add New Skill</h2>
//             <input
//               type="text"
//               placeholder="Enter a new skill..."
//               value={newSkill}
//               onChange={(e) => setNewSkill(e.target.value)}
//             />
//             <div className="modal-actions">
//               <button className="cancel-btn" onClick={closeModal}>
//                 Cancel
//               </button>
//               <button className="save-btn" onClick={handleAddSkill}>
//                 Save
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Skills;
















import React, { useState, useEffect } from "react";
import axios from "axios"; // Import axios
import "./Skills.css";

const Skills = () => {
  // State to manage the list of skills
  const [skills, setSkills] = useState([]);

  // State to manage modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  // State to manage the new skill input
  const [newSkill, setNewSkill] = useState("");

  // Function to fetch skills from the backend
  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/skills");
        setSkills(response.data); // Set the fetched skills
      } catch (error) {
        console.error("Error fetching skills:", error);
      }
    };
    fetchSkills();
  }, []);

  // Function to open the modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
    setNewSkill(""); // Clear the input field when closing the modal
  };

  // Function to handle adding a new skill
  const handleAddSkill = async () => {
    if (newSkill.trim() !== "") {
      try {
        const response = await axios.post("http://localhost:4000/api/skills", { skill: newSkill.trim() });
        setSkills([...skills, response.data.skill]); // Add the new skill to the list
        setNewSkill(""); // Clear the input field
        closeModal(); // Close the modal after adding
      } catch (error) {
        console.error("Error adding skill:", error);
      }
    }
  };

  // Function to handle deleting a skill
  const handleDeleteSkill = async (skillToDelete) => {
    try {
      await axios.delete(`http://localhost:4000/api/skills/${encodeURIComponent(skillToDelete)}`);
      setSkills(skills.filter((skill) => skill !== skillToDelete)); // Remove the skill from the list
    } catch (error) {
      console.error("Error deleting skill:", error);
    }
  };

  return (
    <div className="skills-container">
      {/* Header Section */}
      <div className="header">
        <h3>Key Skills</h3>
        <button className="update-btn" onClick={openModal}>
          Add Skill
        </button>
      </div>

      {/* Skills List */}
      <div className="skills-list">
        {skills.map((skill, index) => (
          <span key={index} className="skill-item">
            {skill}
            <span
              className="delete-btn"
              onClick={() => handleDeleteSkill(skill)}
            >
              &times;
            </span>
          </span>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <span className="close-btn" onClick={closeModal}>
              &times;
            </span>
            <h2>Add New Skill</h2>
            <input
              type="text"
              placeholder="Enter a new skill..."
              value={newSkill}
              onChange={(e) => setNewSkill(e.target.value)}
            />
            <div className="modal-actions">
              <button className="cancel-btn" onClick={closeModal}>
                Cancel
              </button>
              <button className="save-btn" onClick={handleAddSkill}>
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Skills;