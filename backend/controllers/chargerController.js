import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import chargerModel from "../models/chargerModel.js";
import appointmentModel from "../models/appointmentModel.js";

// API for partner Login 
const loginCharger = async (req, res) => {

    try {

        const { email, password } = req.body
        const user = await chargerModel.findOne({ email })

        if (!user) {
            return res.json({ success: false, message: "Invalid credentials" })
        }

        const isMatch = await bcrypt.compare(password, user.password)

        if (isMatch) {
            const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET)
            res.json({ success: true, token })
        } else {
            res.json({ success: false, message: "Invalid credentials" })
        }


    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

// API to get charger appointments for partner panel
const appointmentsCharger = async (req, res) => {
    try {

        const { docId } = req.body
        const appointments = await appointmentModel.find({ docId })

        res.json({ success: true, appointments })

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

// API to cancel appointment for partner panel
const appointmentCancel = async (req, res) => {
    try {

        const { docId, appointmentId } = req.body

        const appointmentData = await appointmentModel.findById(appointmentId)
        if (appointmentData && appointmentData.docId === docId) {
            await appointmentModel.findByIdAndUpdate(appointmentId, { cancelled: true })
            return res.json({ success: true, message: 'Slot Cancelled' })
        }

        res.json({ success: false, message: 'Slot Cancelled' })

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }

}

// API to mark appointment completed for partner panel
const appointmentComplete = async (req, res) => {
    try {

        const { docId, appointmentId } = req.body

        const appointmentData = await appointmentModel.findById(appointmentId)
        if (appointmentData && appointmentData.docId === docId) {
            await appointmentModel.findByIdAndUpdate(appointmentId, { isCompleted: true })
            return res.json({ success: true, message: 'Slot Completed' })
        }

        res.json({ success: false, message: 'Slot Cancelled' })

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }

}

// API to get all chargers list for Frontend
const chargerList = async (req, res) => {
    try {

        const chargers = await chargerModel.find({}).select(['-password', '-email'])
        res.json({ success: true, chargers })

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }

}

// API to change charger availablity for Admin and Partner Panel
const changeAvailablity = async (req, res) => {
    try {

        const { docId } = req.body

        const docData = await chargerModel.findById(docId)
        await chargerModel.findByIdAndUpdate(docId, { available: !docData.available })
        res.json({ success: true, message: 'Availablity Changed' })

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

// API to get charger profile for  Partner Panel
const chargerProfile = async (req, res) => {
    try {

        const { docId } = req.body
        const profileData = await chargerModel.findById(docId).select('-password')

        res.json({ success: true, profileData })

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

// API to update partner profile data from  Partner Panel
const updateChargerProfile = async (req, res) => {
    try {

        const { docId, fees, address, available } = req.body

        await chargerModel.findByIdAndUpdate(docId, { fees, address, available })

        res.json({ success: true, message: 'Profile Updated' })

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

// API to get dashboard data for partner panel
const chargerDashboard = async (req, res) => {
    try {

        const { docId } = req.body

        const appointments = await appointmentModel.find({ docId })

        let earnings = 0

        appointments.map((item) => {
            if (item.isCompleted || item.payment) {
                earnings += item.amount
            }
        })

        let patients = []

        appointments.map((item) => {
            if (!patients.includes(item.userId)) {
                patients.push(item.userId)
            }
        })



        const dashData = {
            earnings,
            appointments: appointments.length,
            patients: patients.length,
            latestAppointments: appointments.reverse()
        }

        res.json({ success: true, dashData })

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

export {
    loginCharger,
    appointmentsCharger,
    appointmentCancel,
    chargerList,
    changeAvailablity,
    appointmentComplete,
    chargerDashboard,
    chargerProfile,
    updateChargerProfile
}