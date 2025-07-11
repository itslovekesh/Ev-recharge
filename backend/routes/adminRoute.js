import express from 'express';
import { loginAdmin, appointmentsAdmin, appointmentCancel, addCharger, allChargers, adminDashboard } from '../controllers/adminController.js';
import { changeAvailablity } from '../controllers/chargerController.js';
import authAdmin from '../middleware/authAdmin.js';
import upload from '../middleware/multer.js';
const adminRouter = express.Router();

adminRouter.post("/login", loginAdmin)
adminRouter.post("/add-charger", authAdmin, upload.single('image'), addCharger)
adminRouter.get("/appointments", authAdmin, appointmentsAdmin)
adminRouter.post("/cancel-appointment", authAdmin, appointmentCancel)
adminRouter.get("/all-chargers", authAdmin, allChargers)
adminRouter.post("/change-availability", authAdmin, changeAvailablity)
adminRouter.get("/dashboard", authAdmin, adminDashboard)

export default adminRouter;