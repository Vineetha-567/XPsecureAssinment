const mongoose = require("mongoose");
const validator = require("validator");

const employeeSchema = new mongoose.Schema({
    employee_id:{
        type: Number,
        unique: true,
        
    },
    name: {
      type: String,
      required: [true, "Please enter the Name"],
      minlength: [3, "Please enter a name atleast 3 characters"],
      maxlength: [15, "Name can not big than 15 characters"],
     
    },
    email: {
      type: String,
      required: [true, "Please enter the email"],
      validate: [validator.isEmail, "Please enter a valid email"],
      unique: true,
    },
    address: [{
        city: {
        type: String,
        required: true,
      },
       state: {
        type: String,
        required: true,
      },
       country: {
        type: String,
        required: true,
      },
    }],
    phone_number:{
        type: Number,
        required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now(),
    },
  });

module.exports = mongoose.model("Employee",employeeSchema);
  
 
  