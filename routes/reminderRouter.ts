import express  from "express";
const router = express.Router()
interface reminder{
    title:string;
}
 router.post('/',(req,res)=>{
    const {title} = req.body as reminder;
    res.status(200).json(title)
 })
export default router;