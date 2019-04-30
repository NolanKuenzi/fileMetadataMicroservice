const express = require('express');
const path = require('path');

const app = express();


const multer  = require('multer');
const storage = multer.memoryStorage()
const upload = multer({ storage: storage })

app.use('/', express.static(path.join(__dirname, 'public')));

app.post('/api/fileanalyse', upload.single('upfile'), function(req, res) {
  if (req.file === undefined) {
    res.send('No file chosen');
    return;
  } 
  res.json({name: req.file.originalname, type: req.file.mimetype, size: req.file.size});
});

const port = process.env.PORT || 3000;
const listener = app.listen(port);


 