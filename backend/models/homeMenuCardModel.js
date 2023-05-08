import mongoose from "mongoose";

const homeMenuCardSchema = new mongoose.Schema({
    name : { type: String, required: true, unique: true},
    link : { type: String, required: true},
    class: { type: String, required: true},
    utilities : { type: String, required: true}
},{
    timestamps : true,
}
)

const HomeMenuCard = mongoose.model('home_menu_cards', homeMenuCardSchema);

export default HomeMenuCard;