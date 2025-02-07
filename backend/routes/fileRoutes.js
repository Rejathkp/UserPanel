import express from 'express';
import multer from 'multer';
import { uploadFile, getFiles, deleteFile } from '../controllers/fileController.js';

const router = express.Router();

// Configure multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

// Routes
router.post('/upload', upload.single('file'), uploadFile);
router.get('/files', getFiles);
router.delete('/files/:id', deleteFile);

export default router;