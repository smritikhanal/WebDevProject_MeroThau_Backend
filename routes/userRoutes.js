// routes/userRoutes.js
const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const upload = require("../middlewares/multerConfig")

router.put("/update/:id", upload.single("profileImage"), userController.updateUser);

// Create a new user
router.post("/create", userController.createUser);

// Get all users
router.get("/", userController.getAllUsers);

// Get a single user by ID
router.get("/:id", userController.getUserById);

router.post("/login",userController.loginUser)

// Update a user by ID
router.put("/update/:id", userController.updateUser);

// Delete a user by ID
router.delete("/:id", userController.deleteUser);

router.get("/get-user-details/:id",userController.getUserById)
module.exports = router;
