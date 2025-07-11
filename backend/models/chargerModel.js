import mongoose from "mongoose";

const chargerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    image: { type: String, required: true },
    speciality: { type: String, required: true },
    degree: { type: String, required: true },
    experience: { type: String, required: true },
    about: { type: String, required: true },
    available: { type: Boolean, default: true },
    fees: { type: Number, required: true },
    slots_booked: { type: Object, default: {} },
    address: { type: Object, required: true },
    date: { type: Number, required: true },
    location: {
        type: String,
        required: true,
        validate: {
            validator: function(v) {
                // Custom regular expression for Google Maps URL validation
                return /^(https:\/\/www\.google\.com\/maps\/.+|https:\/\/maps\.app\.goo\.gl\/[a-zA-Z0-9]+)$/.test(v);
            },
            message: props => `${props.value} is not a valid Google Maps URL!`
        }
    }
}, { minimize: false });

const chargerModel = mongoose.models.charger || mongoose.model("charger", chargerSchema);
export default chargerModel;
