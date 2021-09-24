const mongoose = require('mongoose')
const https = require("https")
const session = require('express-session')
const{ count } = require("console")
const express = require("express")
const bodyParser=require("body-parser")
const path = require('path')
const passport = require('passport')
const { createBrotliCompress } = require('zlib')
const User = require("./models/User.js")
const { findOneAndUpdate } = require("./models/User.js")
const stripe = require('stripe')('sk_test_51JcdfPDAXvyPDX6fOgSyamYuNBkv1v58ZSweaOCHFKg63lh9QBM0u8zKqaK04dmFe3eZBhQTAeX9HyoCNswIzkSN00JTZKlIu6')
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy
const validator = require("validator")
mongoose.connect("mongodb+srv://admin-jun:123321@cluster0.h0wfz.mongodb.net/jundb?retryWrites=true&w=majority", { useNewUrlParser: true })
const bcrypt = require('bcryptjs')
const pw = []

// const { response } = require('express')
// const { count } = require('../models/Employee')
// const Employee = require('../models/Employee')
// const mongoose = require('mongoose')


// const morgan = require('morgan')
// const bodyParser = require('body-parser')

// const Schema = mongoose.Schema

// const express = require('express')
// const router = express.Router()

// const EmployeeController = require('../controllers/EmployeeController')


// //show the list of users
// const index = (req, res, next) =>{
//     Employee.find()
//     .then(response =>{
//         res.json({
//             response
//         })
//     })
//     .catch(error=>{

//         res.json({
//             message:'Error occured!'
//         })
//     })
// }

// // show the single employee
// const show = (req, res, next) =>{

//     let employeeID = req.body.employeeID
//     Employee.findById(employeeID)
//     .then(response => {
//         res.json({
//             response
//         })
//     })
//     .catch(error =>{
//         res.json({
//             message: 'An error occurred'
//         })
//     })
// }

// //stroe an student info
// const store = (req, res, next)=>{
//     let employee = new Employee({
//         country: req.body.country,
//         firstName: req.body.firstName,
//         lastName: req.body.lastName,
//         email: req.body.email,
//         password: req.body.password,
//         Cpassword: req.body.Cpassword,
//         address: req.body.address,
//         city: req.body.city,
//         state: req.body.state,
//         zip: req.body.zip,
//         phone: req.body.phone
        
//     })
   
//     employee.save()
//     .then(response=>{
//     res.json({
//         message: 'new account added!!'
//     })
//   })
//    .catch(error =>{
//     res.json({
//         message: 'An error occurred'
//     })
// })
//     // if(password===cpassword){
        
//     // }
//     // else
//     // {
//     //     message: 'Password length have to be more than 8'
//     // }
    
// }

// //update an student info

// const update = (req, res, next) =>{
//     let employeeID = req.body.employeeID

//     let updatedData = {
//         country: req.body.country,
//         firstName: req.body.firstName,
//         lastName: req.body.lastName,
//         email: req.body.email,
//         password: req.body.password,
//         cpassword: req.body.cpassword,
//         address: req.body.address,
//         city: req.body.city,
//         state: req.body.state,
//         zip: req.body.zip,
//         phone: req.body.phone
//     }
//     Employee.findByIdAndUpdate(employeeID,{ $set: updatedData})
//     .then(() =>{
//         res.json({
//             message: 'student info updated !!'
//         })
//     })
//     .catch(error =>{
//         res.json({
//             message: 'An error occured'
//         })
//     })


// }

// // delete an student acc

// const destory = (req, res, next) =>{
//     let employeeID = req.body.employeeID
//     Employee.findByIdAndRemove(employeeID)
//     .then(()=>{
//         res.json({
//             message: 'student account deleted!!'
//         })
//     })
//     .catch(error =>{
//         res.json({
//             message: 'An error occured'
//         })
//     })
// }

// module.exports = {
//     index,show,store,update,destory
// }


// function checkpw(pw, cpw){
//     if(pw === cpw){
//         return true
//     }
//     else return false
// }


// const employeeSchema = new Schema({
//     Country:{
//         type: String,
//         require:true
//     },
//     FirstName:{
//         type: String,
//         require:true
//     },
//     LastName:{
//         type: String,
//         require:true
//     },
//     Email:{
//         type: String,
//         require:true
//     },
//     Password:{
//         type: String,
//         require:true
        
        
         
//        // require: (count(password) >10)
//     },
//     Cpassword:{
//         type: String,
//         require:true
        
//     },
//     Address:{
//         type: String,
//         require:true
//     },
//     City:{
//         type: String,
//         require:true
//     },
//     State:{
//         type: String,
//         require:true
//     },
//     zip:{
//         type: String,
//         require:false
//     },
//     MobileNum:{
//         type: Number,
//         require:false
//     }
// },)

// module.exports = Employee



// router.get('/', EmployeeController.index)
// router.post('/show', EmployeeController.show)
// router.post('/store', EmployeeController.store)
// router.post('/update', EmployeeController.update)
// router.post('/delete', EmployeeController.destory)

// module.exports = router







// mongoose.connect('mongodb://localhost:27017/testdb',{useNewUrlParser:true, useUnifiedTopology: true})
// const db = mongoose.connection

// db.on('error',(err)=>{
//     console.log(err)
// })
// db.once('open',()=>{
//     console.log('Database connection establish')
// })
// const app = express()

// app.use(morgan('dev'))
// app.use(bodyParser.urlencoded({extended: true}))
// app.use(bodyParser.json())
// app.use(express.static)

// app.get("/",(req,res)=>{
//     res.sendFile(__dirname+"/index.html")
// })

// app.post("/",(req,res)=>{
       
// })

// const PORT = process.env.PORT || 3000

// app.listen(PORT, ()=>{
//     console.log(`server running on port ${PORT}`)
// })

// app.use('/api/employee', EmployeeRoute)






// const express = require('express')
// const router = express.Router()

// const EmployeeController = require('../controllers/EmployeeController')

// router.get('/', EmployeeController.index)
// router.post('/show', EmployeeController.show)
// router.post('/store', EmployeeController.store)
// router.post('/update', EmployeeController.update)
// router.post('/delete', EmployeeController.destory)

// module.exports = router






// const mongoose = require('mongoose')
// const Schema = mongoose.Schema

// const employeeSchema = new Schema({
//     Country:{
//         type: String,
//         require:true
//     },
//     FirstName:{
//         type: String,
//         require:true
//     },
//     LastName:{
//         type: String,
//         require:true
//     },
//     Email:{
//         type: String,
//         require:true
//     },
//     Password:{
//         type: String,
//         require:true
        
        
         
//        // require: (count(password) >10)
//     },
//     Cpassword:{
//         type: String,
//         require:true
        
//     },
//     Address:{
//         type: String,
//         require:true
//     },
//     City:{
//         type: String,
//         require:true
//     },
//     State:{
//         type: String,
//         require:true
//     },
//     zip:{
//         type: String,
//         require:false
//     },
//     MobileNum:{
//         type: Number,
//         require:false
//     }
// }, {timestamps: true})

// const Employee = mongoose.model('Employee', employeeSchema)
// module.exports = Employee

// // function check(){
// //     if(Password.count()>8){
// //         return Password;
// //     }
// // }





const app = express()
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static("public"))

app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/registration.html")
})
app.route('/experts')
.get((req, res) =>{
    User.find((err,userList)=>
    {
        if(err) {res.send(err)}
        else{res.send(userList)}
    })
})

.post((req,res)=>{
        const Country= req.body.country
        const FirstName= req.body.firstName
        const LastName= req.body.lastName
        const Email= req.body.email
        const Password= req.body.password
        const rePassword= req.body.rePassword
        const Address= req.body.address
        const City= req.body.city
        const State= req.body.state
        const zip= req.body.zip
        const MobileNum= req.body.phone

        // const saltRounds = 10
        // const salt = bcrypt.genSaltSync(saltRounds);
        // const hash = bcrypt.hashSync(Password, salt);
        // console.log(hash);
        // pw[Password] = hash;

        
        const data1 = new User({
            Country: Country,
            FirstName: FirstName,
            LastName: LastName,
            Email: Email,
            Password: Password,
            rePassword: rePassword,
            Address: Address,
            City: City,
            State: State,
            zip: zip,
            MobileNum: MobileNum
        })

        data1.save((err) =>{
            if(err){
               console.log(err)
            }
            else{
                console.log("user account added succefful")
            }
        })


        const apiKey = "63b015c4b59cb1a8bb80720191c0b9d3-us5"   
        const aud_id = "fd9f7fe40a"
        const apidata = {
            members:[{
                email_address: Email,
                status: "subscribed",
                merge_fields:{
                    FNAME:FirstName,
                    LNAME:LastName
                }
            }]
        }

        jsonData = JSON.stringify(apidata)

        const url = "https://us5.api.mailchimp.com/3.0/lists/fd9f7fe40a"  // us5: last three charactors of apiKey  fd9f7fe40a: list_id
        const options={
            method:"POST",
            auth:"azi:63b015c4b59cb1a8bb80720191c0b9d3" // 63b015c4b59cb1a8bb80720191c0b9d3: the first part of the apiKey
        }

        const request = https.request(url,options,(response) =>{
            response.on("apidata",(apidata)=>{
                Console.log(JSON.parse(apidata))
            })
        })

        request.write(jsonData)
        request.end()
        console.log(FirstName,LastName,Email)



})
.delete((req,res)=>{
    User.deleteMany((err)=>{
        if(err){res.send(err)}
        else{res.send('Successfully deleted all users')}
    })
})
app.route('/experts/:id')
.put((req,res)=>{
    var user_id = req.params.id
    User.updateOne(
        {_id:user_id},
        { $set: { Country: req.body.country,
             FirstName: req.body.firstName,
             LastName: req.body.lastName,
             Email: req.body.email,
             Password: req.body.password,
             rePassword: req.body.rePassword,
             Address: req.body.address,
             City: req.body.city,
             State: req.body.state,
             zip: req.body.zip,
             MobileNum: req.body.phone,
    } },
        {overwrite:true},
        (err) =>{
            if(err) {res.send(err)}
            else{res.send("Successfully updated!")}
        }
        )
})
.get((req,res)=>{
    var user_id = req.params.id
    User.find({_id:user_id},(err,foundUser)=>{
        if(foundUser){res.send(foundUser)}
        else{res.send("No user found")}
    })
})
.delete((req,res)=>{
    var user_id = req.params.id
    User.deleteOne(
        {_id:user_id},
        (err)=>{
            if(err) {res.send(err)}
            else {res.send("Successfully deleted")}
        }
    )
})
.patch((req,res)=>{
    var user_id = req.params.id
    User.update(
        {_id:user_id},
        {$set:{
            Password: req.body.password,
            rePassword: req.body.rePassword,
            Address: req.body.address,           
            MobileNum: req.body.phone,}},
        {multi: true},
        (err) => {
            if(err) {res.send(err)}
            else {res.send("Successfully updated")}
        }
    )
})

app.get('/login.html', (req,res)=>{
    res.sendFile(__dirname + "/login.html")
})

app.post('/login.html', (req,res)=>{
    const email = req.body.email
    const Password = req.body.password

    data.findOne({Email: email}, function(error, foundUser){
        if(!error){
            if(foundUser){
                //if(bcrypt.compareSync(Password, pw[Password])){
                    res.sendFile(__dirname + "/custtask.html")
               // }
            }
            else{
                res.sendFile(__dirname + "/Error.html")
            }
        }
    })
})


// google login express server

app.set('view engine','ejs')

app.use(session({
    resave:false,
    saveUninitialized: true,
    secret:'SECRET'
}));

app.get('/',function(req,res){
    res.render('pages/auth');
});

// google login passport setup


var userProfile

app.use(passport.initialize());
app.use(passport.session());

app.set('view engine','ejs');

app.get('/success',function(req,res){
    res.redirect("https://morning-forest-71134.herokuapp.com/index.html")
});

app.get('/error',function(req,res){
    res.send('error');
});

passport.serializeUser(function(user,cb){
    cb(null, user);
});

passport.deserializeUser(function(obj,cb){
    cb(null, obj)
});

// google login Oauth 2.0

const GOOGLE_CLIENT_ID = '98776371956-2fe4hfek183fq3bst3jmnsg3l2bd3et8.apps.googleusercontent.com';
const GOOGLE_CLIENT_SECRET = 'UNMyqijMB5krzI9BFE11nHBn';

passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL:"https://morning-forest-71134.herokuapp.com/auth/google/callback"
    },
    function(accessToken,refreshToken,profile,done){
        userProfile = profile;
        return done(null,userProfile);
    }
));

app.get('/auth/google',passport.authenticate('google',{scope:['profile','email']}));

app.get('/auth/google/callback',passport.authenticate('google',{failureRedirect:'/error'}),
    function(req,res){
        res.redirect('/success');
    }
);




// stripe payment page



app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use(express.static(path.join(__dirname, './views')));

app.post('/charge', (req, res) => {
    try {
        stripe.customers.create({
            name: req.body.name,
            email: req.body.email,
            source: req.body.stripeToken
        }).then(customer => stripe.charges.create({
            amount: req.body.amount * 100,
            currency: 'usd',
            customer: customer.id,
            description: 'Thank you for your generous donation.'
        })).then(() => res.render('complete.html'))
            .catch(err => console.log(err))
    } catch (err) { res.send(err) }
})


let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}
 app.listen(port, (req,res)=>{
     console.log("server is running");
})

