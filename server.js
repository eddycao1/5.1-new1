const mongoose = require('mongoose')
const https = require("https")

const express = require("express")
const bodyParser=require("body-parser")
const validator = require("validator")
mongoose.connect("mongodb://localhost:27017/TestDB", { useNewUrlParser: true })
const bcrypt = require('bcryptjs')

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





const userSchema = new mongoose.Schema({
    Country: {
        type: String,
        require: true,

    },
    FirstName: {
        type: String,
        require: true,
        minlength:1

    },
    LastName: {
        type: String,
        require: true,
        minlength:1
    },
    Email: {
        type: String,
        require: true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Email is not valid")
            }
        }
    },
    Password: {
        type: String,
        require: true,
        minlength:8
        
    },
    rePassword: {
        type: String,
        require: true,
        minlength: 8,
        validate(value){
            if(!validator.equals(value, this.Password)){
                throw new Error("the re-typed is not match as password")
            }
        }
    },
    Address: {
        type: String,
        require: true
    },
    City: {
        type: String,
        require: true
    },
    State: {
        type: String,
        require: true
    },
    zip: {
        type: String,
        require: false
    },
    MobileNum: {
        type: Number,
        require: false
    }
})


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

const data = mongoose.model('data', userSchema)



const app = express()
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static("public"))

app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/registration.html")
})

app.post('/',(req,res)=>{
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

        const saltRounds = 10
        bcrypt.genSalt(saltRounds, function (err, salt){
            bcrypt.hash(Password, salt, function(err, hash){
                    Password == hash;
            })      
        })

        
        const data1 = new data({
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



app.get('/login.html', (req,res)=>{
    res.sendFile(__dirname + "/login.html")
})

app.post('/login.html', (req,res)=>{
    const email = req.body.email
    const password = req.body.password

    data.findOne({Email: email}, function(error, foundUser){
        if(!error){
            if(foundUser){
                if(foundUser.Password == password){
                    res.sendFile(__dirname + "/custtask.html")
                }
            }
            else{
                res.sendFile(__dirname + "/Error.html")
            }
        }
    })
})

let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}
 app.listen(port, (req,res)=>{
     console.log("server is running");
})

