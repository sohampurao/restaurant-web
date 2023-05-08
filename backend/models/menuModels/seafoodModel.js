import mongoose from "mongoose";

const seafoodMenuSchema = new mongoose.Schema({
    category: { type: String, required: true},
    name: { type: String, required: true, unique: true},
    price: { type: Number, required: true },
    image: { type: String, required: true },
    text: { type: String, required: true }
}, {
    timestamps: true,
}
);

const Seafood = mongoose.model('seafood', seafoodMenuSchema);

export default Seafood;