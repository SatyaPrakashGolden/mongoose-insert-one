const mongoose=require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.8.0/test")  //test is database name
.then(()=>console.log("connected"))
.catch((err)=>console.log(err));
const studentsSchema=  mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    mno:{
        type:Number,
        required:true
    },
    fees:{
        type:Boolean,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    },
})
const Student=new mongoose.model("student",studentsSchema)  //student is collection name

const Golden = async()=>{
    try{
        const createStudent=new Student({
            name:"Golden Singh",
            mno:9219239807,
            fees:true
        });
        const studentData=await createStudent.save();
        console.log(studentData);
    }catch(error){
        console.log(error.message);
    }
}
Golden();
