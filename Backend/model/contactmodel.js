import mongoose from "mongoose";
const { Schema } = mongoose;

const ContactUsSchema = new Schema({
  fullname: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String },
  address: { type: String },
  message: { type: String, required: true },
  feedback: { type: Number }
}, { collection: "contactus" });

const ContactUs = mongoose.model("ContactUs", ContactUsSchema);

export default ContactUs;
