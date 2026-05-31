    const userModel = require("../model/user.model")
    const bcrypt = require("bcrypt")
    const jwt = require("jsonwebtoken")
    const userRegister = async (req,res)=>{
        try {
        const {username,email,password}= req.body
        
        if(!username || !email || !password){
            return res.status(400).json({
                status:false,
                message:"All firlds are required"
            })   
        }
        const isRegistered = await userModel.findOne({email})
        if(isRegistered){
            return res.status(409).json({
                status:false,
                message:"Email already exists"
            })
        }
        
        // password hashing using bcrypt
        const hashedpassword = await bcrypt.hash(password,10)

        const reggisterUser = await userModel.create({
            username,email,password:hashedpassword
        })
        return res.status(201).json({
            status:true,
            message:"You are register successfully",
            data:reggisterUser
        })

        } catch (error) {
            
            return res.status(400).json({
                status:false,
                message:"something went wrong in register controller"
            }) 
        }
    }

    const userLogin= async (req, res) => {
    try {
        const { email, password } = req.body;
        // Check user
        const user = await userModel.findOne({ email });
        if(!user){
            return res.status(404).json({
                success:false,
                message:"User not found"
            });
        }
        // Compare password
        const isMatch = await bcrypt.compare(
            password,
            user.password
        );
        if(!isMatch){
            return res.status(401).json({
                success:false,
                message:"Invalid Credentials"
            });
        }
        // Generate token
        const token = jwt.sign(
            {
                id:user._id
            },
            "mySecretKey"
        );
        // Send cookie
        res.cookie("token", token, {
            httpOnly:true,
            secure:true
        });
        res.status(200).json({
            success:true,
            message:"Login Successful"
        });
    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message
        });
    }
    }











    const userController = {userRegister,userLogin}

    module.exports = userController