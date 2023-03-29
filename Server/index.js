const express = require('express');
const cors  = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));
var jwt = require('jsonwebtoken');
const multer  = require('multer');
const path = require('path');
const bodyparser = require('body-parser');
const bcrypt = require ('bcrypt');
require("dotenv").config();
const RegisterDB = require('./Model/RegisterModel')
const mongoose = require('mongoose');

    mongoose.set('strictQuery', false)
    mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })

    .then(() => {
        console.log("SUCCESS DB CONNECTED");
    })

    .catch(err => {
        console.log("DB CONNECTION FAILED");
        console.log(err);
    })

    
    app.use(express.static("./public"))
    app.use(cors({
        origin: '*'
    }));
    // body-parser middleware use
    
    app.use(bodyparser.json())
    app.use(bodyparser.urlencoded({
        extended: true
    }))


    app.use('/register', express.static('public/images'))
    
    const storage = multer.diskStorage({
      destination: function (req, file, cb) {
        cb(null, 'public/images/');
      },
      filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
      },
    });
    
    const upload = multer({ storage: storage });
    
    app.post('/login', async(req,res) => {
        try {
          const { email, password } = req.body;
          const user = await RegisterDB.findOne({ email: email });
          if (!user) {
            return res.status(400).json({ message: "Invalid Credentials" });
          }
          const isMatch = await bcrypt.compare(password, user.password);
          if (!isMatch) {
            return res.status(400).json({ message: "Invalid Credentials" });
          }
          const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
            expiresIn: "1h",
          });
          const imagepath = user.image;
          const fullname = user.fullname;
          res.status(200).json({
            message: "Login Successful",
            token: token,
            fullname : fullname,
            image: imagepath       
          });
      
      }
        catch (error) {
          res.status(500).json({ message: error.message });
        }
      });

      app.post("/register", upload.single("image"), (req, res) => {
        const { fullname, email, password ,repeatpassword } = req.body;
        var imgsrc = 'http://localhost:3001/register/' + req.file.filename;
    
        if (!fullname || !email || !password || !repeatpassword ) {
          console.log("Fill empty fields");
        }
        //Confirm Passwords
        if (password !== repeatpassword) {
          console.log("Password must match");
        } else {
          //Validation
          RegisterDB.findOne({ email: email }).then((user) => {
            if (user) {
              console.log("email already exists");
              return res.status(404).send({
                auth: false,
                message: "Email already exists"
              });
            } else {
              //Validation
              const newUser = new RegisterDB({
                fullname,
                email,
                password,
                repeatpassword,
                image:imgsrc 
              });
              //Password Hashing
              bcrypt.genSalt(10, (err, salt) =>
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                  if (err) throw err;
                  newUser.password = hash;
                  newUser.repeatpassword = hash;
                  newUser
                    .save()
                    .then(res.status(200).send({
                      auth: true,
                    }))
                    // .then(res.redirect("/login"))
                    .catch((err) => console.log(err));
                })
              );
            }
          });
        }
      });


app.listen(3001,()=>{
    console.log("Running on port 3001...");
});