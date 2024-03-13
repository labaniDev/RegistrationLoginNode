const UserModel = require('../model/UserModel');


const UserController = {
    userHome:(request,response) =>{
        response.render("hello");
    },
    saveUserData: async (request,response) =>{
        const {first_name, last_name, gender, email, mobile, password} = request.body;
        await UserModel.create({
            first_name,
            last_name,
            gender,
            email,
            mobile,
            password
        })

       .then((UserModel)=>response.json(UserModel))
       .catch((error)=> response.json(error));
    },
    getUserById: async(request,response) =>{
        const userId=request.params.id;
        try{
            const user = await UserModel.findById(userId);

            if(!user){
                return response.status(404).send('User not Find');
            }
            response.send(user);

        }catch(error){
            return response.status(500).send("Internal Server Error");
        }
    },

    getAllUser: async(request,response) => {
        try{
            const user = await UserModel.find();
            response.send(user);
        }catch(error){
            return response.status(500).send("Internal Server Error");
        }

    },
    userLogin: async (request,response)=>{
        const { email, password } = request.body;
        try{
            const user = await UserModel.findOne({ email });

        if(!user){
            return response.status(404).send('User not found');
        }
        if(user.password != password){
            return response.status(404).send('Password not match');
        }
        response.send(user);
        }catch(error){
            return response.status(500).send("Internal Server Error");
        }
    }
};
module.exports=UserController;