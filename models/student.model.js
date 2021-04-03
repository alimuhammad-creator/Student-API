const mongoose=require('mongoose')
const Schema=mongoose.Schema;

let studentSchema = new Schema({
    studentname: {type: String, required: true, max:100},
    studentRegId: {type: Number, required: true,}
})
module.exports = mongoose.model('Student', studentSchema);
