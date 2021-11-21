const mark = require("express")
const  result = mark()
const mongoose = require("mongoose")
const url = "mongodb+srv://yash_nirwan:Samayanw10@smit.2w8zi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
mongoose.connect(url).then(()=>console.log("result connected"))
const schema = require("./Schema")
result.use(mark.json())
result.post("/add-new-post",async(req, res)=>
{ 
    const myname = req.body.Name;
    const myregistration = req.body.Registration_number;
    const mymarks = req.body.Marks;

    try {
        const newdata = new schema(
            { Name: myname , Registration_number: myregistration, Marks: mymarks}
        )
        const saved = await newdata.save()
        res.json(
            {"message":"saved successfully","data": saved}
        )
    }catch(err)
    { 
        res.json(err);
    }
})
result.use("/", (req,res)=>{ 
    //res.send("Hello");//
    res.json(
        { 
            "a":"as"
        })
})
result.listen(3000,()=>console.log("Express Server Started"))
