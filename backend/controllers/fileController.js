import fs from 'fs';
import path from 'path';
import File from '../models/fileModel.js';

const UPLOAD_DIR = path.join(process.cwd(), 'uploads');

if (!fs.existsSync(UPLOAD_DIR)) {
  fs.mkdirSync(UPLOAD_DIR);
}

export const uploadFile = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'No file uploaded' });
    }

    const { originalname, mimetype, path: filePath } = req.file;

    let existingFile = null;
    if (mimetype.startsWith('video')) {
      existingFile = await File.findOne({ fileType: { $regex: '^video' } });
    } else if (mimetype === 'application/pdf') {
      existingFile = await File.findOne({ fileType: 'application/pdf' });
    }

    if (existingFile) {
      fs.unlinkSync(existingFile.filePath);

      existingFile.fileName = originalname;
      existingFile.filePath = filePath;
      existingFile.fileType = mimetype;
      await existingFile.save();

      return res.status(200).json({ message: 'File overwritten successfully', file: existingFile });
    }

    const file = new File({
      fileName: originalname,
      filePath: filePath,
      fileType: mimetype,
    });

    await file.save();
    res.status(201).json({ message: 'File uploaded successfully', file });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Get all files
export const getFiles = async (req, res) => {
  try {
    const files = await File.find();
    res.status(200).json(files);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Delete file
export const deleteFile = async (req, res) => {
  try {
    const { id } = req.params;
    const file = await File.findById(id);

    if (!file) {
      return res.status(404).json({ message: 'File not found' });
    }

    fs.unlinkSync(file.filePath);

    await File.findByIdAndDelete(id);

    res.status(200).json({ message: 'File deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};