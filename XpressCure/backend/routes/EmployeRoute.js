const express = require("express");
const { createEmployee, getAllEmployees, updateProfile, deleteProfile, getSingleProfile } = require("../controller/EmployeController");
const { isAuthenticatedUser } = require("../middleware/auth");


const router = express.Router();

router.route("/employee/new").post(isAuthenticatedUser, createEmployee);
router.route("/employees").get(isAuthenticatedUser, getAllEmployees);
router.route("/employee/:id").put(isAuthenticatedUser, updateProfile);
router.route("/employee/:id").delete(isAuthenticatedUser, deleteProfile);
router.route("/employee/:id").get(isAuthenticatedUser, getSingleProfile)
module.exports = router

