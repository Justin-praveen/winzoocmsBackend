import fastify, {FastifyInstance} from "fastify";
import { Model , DataTypes } from 'sequelize'
import path = require("path");
import moment from "moment";

const server:FastifyInstance = fastify({logger:true})

// server listens
const start = async () =>{
    try{
        await server.listen({port:8000});
        console.log("Server STarted Succesfully")
    }
    catch(err){
        console.log(err)
    }
}

start()



// interfaces

interface Details{
    sno : number,
    url : string,
    name : string,
    image : string
}

// model Creation

const userdetails = dbconnect.define<Model<Details>,Details>('detail',{   //dbconnect is a varaiable in config folder
    sno:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true,
    },

    url:{
        type:DataTypes.STRING,
        allowNull:false,
    },

    name:{
        type:DataTypes.STRING,
        allowNull : false,
    },
    
    image:{
        type:DataTypes.STRING,
        allowNull:false,
    }
})


server.post("/add",async (req ,res)=>{
    try{

        
        const{sno,url,name,image} = req.body as Details;
        const newdata = await userdetails.create({sno,url,name,image})
        console.log(newdata)
        res.status(200).send(newdata)

        //just try for s3 image upload code below
        const timestamp = moment().valueOf()
        if(image){
            const fileName = 
              image?.filename?.replace(
                path.extname(image.filename),
                ""
              )+
              "_"+
              timestamp + 
              path.extname(image?.filename as string);
            const imageupload = await this.S3.upload({
                Bucket: this.S3BucketName,
                Body: image?._buf,
                Key : `image/${fileName}`,
                ACL : "public-read",
             }).promise();
             
             ImageUploadPayload.image = imageupload.Location;

        }
    }
    catch(error){
        console.log(error)
        res.status(500).send("Throws Error")
    }
})

server.get('/getdetails',async(req,res)=>{
    try{
        const alldetails = await userdetails.findAll();
        console.log(alldetails)
        res.status(200).send(alldetails);

    }
    catch(error){
        console.log(error)
        res.status(500).send("Trows Error")
    }
})



