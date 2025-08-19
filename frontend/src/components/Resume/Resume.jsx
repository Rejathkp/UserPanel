import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaTrash } from 'react-icons/fa'; 
import './Resume.css';

function Resume() {
  const [pdfFile, setPdfFile] = useState(null); 
  const [videoFile, setVideoFile] = useState(null); 

  useEffect(() => {
    fetchFiles();
  }, []);

  const fetchFiles = async () => {
    try {
      const response = await axios.get('https://userpanel-backend.onrender.com/api/files');
      const pdf = response.data.find((file) => file.fileType === 'application/pdf');
      const video = response.data.find((file) => file.fileType.startsWith('video'));
      setPdfFile(pdf || null);
      setVideoFile(video || null);
    } catch (error) {
      console.error('Error fetching files:', error);
    }
  };

  const handleUpload = async (e, type) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append('file', file);

    try {
      await axios.post('https://userpanel-backend.onrender.com/api/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      fetchFiles(); 
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://userpanel-backend.onrender.com/api/files/${id}`);
      fetchFiles();
    } catch (error) {
      console.error('Error deleting file:', error);
    }
  };

  return (
    <div className="resume-container">
      <h3>Resume</h3>
      <div className="upload-section">
        <div className={`upload-box ${pdfFile ? 'has-preview' : ''}`}>
          {pdfFile && (
            <div className="file-preview">
              <span className="file-name">{pdfFile.fileName}</span>
              <button className="delete-icon" onClick={() => handleDelete(pdfFile._id)}>
                <FaTrash />
              </button>
            </div>
          )}
          <label className="upload-btn">
            {pdfFile ? 'Update Resume' : 'Upload Resume'}
            <input
              type="file"
              accept=".pdf"
              onChange={(e) => handleUpload(e, 'pdf')}
              hidden
            />
          </label>
        </div>

        <div className={`upload-box ${videoFile ? 'has-preview' : ''}`}>
          {videoFile && (
            <div className="file-preview">
              <span className="file-name">{videoFile.fileName}</span>
              <button className="delete-icon" onClick={() => handleDelete(videoFile._id)}>
                <FaTrash />
              </button>
            </div>
          )}
          <label className="upload-btn">
            {videoFile ? 'Update Video Resume' : 'Upload Video Resume'}
            <input
              type="file"
              accept="video/*"
              onChange={(e) => handleUpload(e, 'video')}
              hidden
            />
          </label>
        </div>
      </div>
    </div>
  );
}

export default Resume;
