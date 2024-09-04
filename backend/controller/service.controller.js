import Service from '../model/service.model.js';
import QRCode from 'qrcode';
import { v2 } from "cloudinary";
export const qrService = async (req, res) => {
    const { text } = req.body;
    try {

        if(!text) return res.status(400).json({ message: "Please Enter Text" });
        const username = req.user.username;
        const qrCodeDataURL = await QRCode.toDataURL(text);
        const result = await v2.uploader.upload(qrCodeDataURL);
        const img = result.secure_url;
        
        const service = new Service({ username, img, text });
        await service.save();
        res.status(201).json({ service });
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const allQr = async (req, res) => {
    try {
        const services = await Service.find({username: req.user.username});
        res.status(200).json({ services });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const deleteQr = async (req, res) => {    
    const {id}  = req.params;
    try {
        if(!id) return res.status(400).json({ message: "Please Enter Id" });
        const qrcode = await Service.findById(id);
        if(!qrcode) return res.status(404).json({ message: "No Qr Code Found" });
        if(qrcode.username !== req.user.username) return res.status(401).json({ message: "You are not authorized" });
        const publicCloudinaryId = qrcode.img.split("/").pop().split(".")[0];
        await v2.uploader.destroy(publicCloudinaryId);
        await Service.findByIdAndDelete(id);
        res.status(200).json({ message: "Deleted Successfully" });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}