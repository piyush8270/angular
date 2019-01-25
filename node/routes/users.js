var express = require('express');
var router = express.Router();
var bcrypt = require('bcryptjs');
var mysql=require('mysql');
/* var User = require('../model/userDetails');
 */var sampledemo = require('../model/sampleDemo');


var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "mydb"

  });

  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });

router.post('/signUp', function (req, res) {
    console.log('firstname',req.body)
 /*    var user = new User({
        firstname: req.body.firstname,
        mobile: req.body.mobile,
        password: bcrypt.hashSync(req.body.password, 10),
        email: req.body.email
    });

 */
/*
 */


var post;
var email=req.body.address;

post={first_name:req.body.firstName,mobile:req.body.phoneNo,email:req.body.address,password:req.body.password,username:req.body.userName,lastName:req.body.lastName};
console.log('req',req.body.firstName,req.body.phoneNo,req.body.address,req.body.userName,req.body.lastName);


var sql = "INSERT INTO registration4 SET ? ";
   con.query(sql, post,function (err, result) {
     if (err) throw err;
     console.log("1 record inserted");
     if(result)
console.log(result.length)
    // res.render('index2', {message: 'User created please click here to signin'});

   });

/*
var sql = 'SELECT * FROM reg2 WHERE email = ? ' ;
con.query(sql, [email], function (err, result) {

 if (err) throw err;
 if(result.length===0){
  console.log(' data',result[0]['first_name']);


 }
 else{
     console.log('Already registered')
   // return res.json({"error": 'Please choose another email id this email already registered'})


 }


});*/


});


router.get('/list',function(req,res,next){

        con.query("SELECT * FROM registration4", function (err, result, fields) {
          if (err) throw err;
           if(result)
{  res
    .json(result)
}
           //console.log(result);
        });


})

router.delete('/deleteRecords', function (req, res, next) {
    User.findOne({email:req.body.email},function (err, result) {
        User.findByIdAndRemove({_id:result._id},function(err,data){
            res.json({
                Message:"Record Deleted Successfully"
            })
        })

    })

});


router.put('/updaterecords/:emailId', function (req, res, next) {
    User.findOne({email:req.params.emailId},function (err, result) {
        result.firstname=req.body.firstname;
        result.mobile=req.body.mobile;

        result.save(function(err,data){
            res.json({
                Message:"Record Updated Successfully"
            })
        })

    })

});

router.get('/signUp', function(req, res, next) {
    res.render('signup2', { title: 'Welcome to piyush class' });
  });
  router.get('/deleteRecords', function(req, res, next) {
    res.render('deleteRecords', { title: 'Welcome to piyush class' });
  });


router.get('/dashboard', function (req, res, next) {
    if(!req.session.user){
        res.render('index', {
            message: 'please login to access the dashboard'
        });
    }else{
        res.render('dashboard', {message: 'welcome to dashboard you have successfully loged in'});
    }

});

router.get('/sampleDemo', function (req, res, next) {

    user
    .find({}, function (err, user) {
        if (err) {
console.log(err);
        }else{
            res.json({Result:user});
        }
    })


});
router.get('/logout', function (req, res, next) {
    req.session.destroy(); // destroying the session
    res.render('signup2', {message: 'logout successfuly'});
});
router.get('/dashboard', function (req, res, next) {
    res.render('dashboard', {
        message: 'Successfully logged in ! welcome to dashboard',
        name:result[0]['first_name']
    });});
router.post('/signin', function (req, res, next) {
console.log(req.body.email,req.body.password)
        var email = req.body.email;
        var adr=req.body.password;
        //Escape the address value:
        var sql = 'SELECT * FROM registration4 WHERE email = ? and password=?' ;
        //Send an array with value(s) to replace the escaped values:
        con.query(sql, [email,adr], function (err, result) {
         // if (err) throw err;
         if(result)
         console.log('result',result,result.length)
          if(result.length===0){
            console.log('result',result)
            if(result.length===1)
            console.log('db executed0');
          }
         if(err)
            console.log(err)
         if(result.length!=0){
             console.log('db executed1')
            //req.session.user=result[0]['first_name']
           res.render('dashboard', {
                message: 'Successfully logged in ! welcome to dashboard',
                name:result[0]['first_name']
            });
          }
          else{
           // console.log(' no data',result)

            return res
            .status(401)
            .json({
                title: 'Login failed',
                error: {
                    message: 'Invalid login credentials'
                }
            });

            }
        });


/*
    try {
        User
            .findOne({
                email: req.body.email
            }, function (err, user) {
                if (err) {
                    return res
                        .status(500)
                        .json({title: 'An error occurred', error: err});
                }
                if (!user) {

                    return res
                        .status(401)
                        .json({
                            title: 'Login failed',
                            error: {
                                message: 'Invalid login credentials'
                            }
                        });
                }
                try {
                    if (!bcrypt.compareSync(req.body.password, user.password)) {
                        return res
                            .status(401)
                            .json({
                                title: 'Login failed',
                                error: {
                                    message: 'Invalid login credentials'
                                }
                            });
                    }
                    // res.status(200).json({     message: 'Successfully logged in',     userId:
                    // user._id });
                    req.session.user=user; // setting the session
                    // user{
                    //     "name":"sss",
                    //     "username":"rerte",
                    //     "password":"345345"
                    // }
                    res.render('dashboard', {
                        message: 'Successfully logged in ! welcome to dashboard',
                        name:user.firstname
                    });
                    //res.status(201).redirect("dashboard")

                } catch (error) {
                    return res.json({"error": error.message})
                }

            });
    }
    catch (error) {
        return res.json({"error": error})
    }
 */
  //  console.log('results',req.body.email);


});

module.exports = router;
