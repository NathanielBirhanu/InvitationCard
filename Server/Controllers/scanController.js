const createModel = require("../Models/createModel");

const scannedBarcodes = new Map();
const ScanCard = async(req, res)=>{
    try{
        
        const {barcode} = req.body;
        if (scannedBarcodes.has(barcode)) {
            return res.status(400).json({ error: "Barcode already scanned" });
        }

        const user = await createModel.findOne({barcode});

        if(!user) return res.status(404).json("Invalid barcode");
        console.log(`Scanned barcode: ${barcode} at ${new Date()}`);

        scannedBarcodes.set(barcode, true);

        res.status(200).json({ message: "Scan successful" });
    }catch(error){
        console.log(error);
        res.status(500).json(error);
    }
}

module.exports = {ScanCard};