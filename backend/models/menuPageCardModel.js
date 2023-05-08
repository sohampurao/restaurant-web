import mongoose from "mongoose";

const menuPageCardSchema = new mongoose.Schema({
    name : { type: String, required: true, unique: true},
    link : { type: String, required: true},
    class: { type: String, required: true},
    utilities : { type: String, required: true}
},{
    timestamps : true,
}
)

const MenuPageCard = mongoose.model('menu_page_cards', menuPageCardSchema);

export default MenuPageCard;