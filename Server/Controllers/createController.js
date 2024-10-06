const createModel = require("../Models/createModel");
const bwip = require('bwip-js');

const generateUniqueBarcode = (name, ID) => {
    const uniqueIdentifier = name + "-" + ID;
    return uniqueIdentifier;
}

const CreatePerson = async(req, res)=>{
    try{
        const {name, ID} = req.body;

        let user = await createModel.findOne({ID});

        if(user) return res.status(400).json("The person with that ID already exist...");
        if(!name || !ID) return res.status(400).json("All fields are required....");

        const barcode = generateUniqueBarcode(name, ID);

        const newPerson = new createModel({
            name,
            ID,
            barcode,
        });

        await newPerson.save();

        res.status(200).json({ name, ID, barcode });
        
    }catch(error){
        console.log(error);
        res.status(500).json(error);
    }
}

module.exports = {CreatePerson};
