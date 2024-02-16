const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      let path = `${process.env.FILE_PATH}`;
      console.log('path', path)

      cb(null, path); 
    },
    filename: (req, file, cb) => {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    },
  });
  
const upload = multer({ storage });

module.exports = { upload }

