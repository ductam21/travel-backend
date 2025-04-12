const express = require('express');
const { cloudinary } = require('../utils/cloudinary');
const multer = require('multer');
const router = express.Router();
const fs = require('fs')

// Multer configuration — storing file locally in /uploads
const upload = multer({ dest: 'uploads/' });

router.post('/api/upload', upload.single('file'), async (req, res) => {
    try {
        const filePath = req.file.path;

        // Upload to Cloudinary
        const result = await cloudinary.uploader.upload(filePath, {
            folder: 'uploads', // optional folder
        });

        // Remove file from local after upload
        fs.unlinkSync(filePath);

        res.json({
            url: result.secure_url,
            public_id: result.public_id,
        });
    } catch (error) {
        console.error('Upload error:', error);
        res.status(500).json({ error: 'Upload failed' });
    }
});




module.exports = router; 