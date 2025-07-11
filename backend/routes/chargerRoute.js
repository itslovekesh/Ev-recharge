import express from 'express';
import { loginCharger, appointmentsCharger, appointmentCancel, chargerList, changeAvailablity, appointmentComplete, chargerDashboard, chargerProfile, updateChargerProfile } from '../controllers/chargerController.js';
import authCharger from '../middleware/authCharger.js';
// import ChargerDashboard from '../../admin/src/pages/Charger/ChargerDashboard';
const chargerRouter = express.Router();

chargerRouter.post("/login", loginCharger)
chargerRouter.post("/cancel-appointment", authCharger, appointmentCancel)
chargerRouter.get("/appointments", authCharger, appointmentsCharger)
chargerRouter.get("/list", chargerList)
chargerRouter.post("/change-availability", authCharger, changeAvailablity)
chargerRouter.post("/complete-appointment", authCharger, appointmentComplete)
chargerRouter.get("/dashboard", authCharger, chargerDashboard)
chargerRouter.get("/profile", authCharger, chargerProfile)
chargerRouter.post("/update-profile", authCharger, updateChargerProfile)

export default chargerRouter;