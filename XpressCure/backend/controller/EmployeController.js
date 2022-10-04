const Employee = require("../models/EmployeeModel");
const ErrorHandler = require("../utils/ErrorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const Features = require("../utils/Features");



// create Profile-- Admin
exports.createEmployee = catchAsyncErrors (async(req,res,next) =>{
    const employee = await Employee.create(req.body);

    res.status(201).json({
        success: true,
        employee
    })
});

// Get all profiles

exports.getAllEmployees = catchAsyncErrors (async (req,res) =>{
    
    const feature = new Features(Employee.find(), req.query)
    .search()
    ;
    const employees = await feature.query;
    res.status(200).json({
        success: true,
        employees,
    })
});

// Upadate User Profile

exports.updateProfile = catchAsyncErrors(async(req,res,next) =>{
    const newUserData = {
        phone_number: req.body.phone_number,
        email: req.body.email,
    };
    if (req.body !== "") {
        const employee = await Employee.findById(req.employee);
      }

    const employee = await Employee.findByIdAndUpdate(req.employee, newUserData, {
        new: true,
        runValidator: true,
        useFindAndModify: false,
      });
    
      res.status(200).json({
        success: true,
      });
});

// delete Profile
exports.deleteProfile = catchAsyncErrors(async(req,res,next) => {
    const employee = await Employee.findById(req.params.id);

    if(!employee){
        return next(new ErrorHandler  ("Profile is not found with this id",404))
    }
    await employee.remove();

    res.status(200).json({
        success: true,
        message: "Profile deleted succesfully",
    });
});

// single profile details
exports.getSingleProfile = catchAsyncErrors(async(req,res,next) =>{
    const employee = await Employee.findById(req.params.id);
    if(!employee){
        return next(new ErrorHandler  ("Profile is not found with this id",404))
    }
    res.status(200).json({
        success: true,
        employee,
     
    });
});