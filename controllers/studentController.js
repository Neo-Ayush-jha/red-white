const Student = require("../models/Student");

// Add Student
exports.createStudent = async (req, res) => {
  try {
    console.log("Creating student with data:", req.body);
    
    // Validation
    if (!req.body.name || !req.body.email || !req.body.grade) {
      return res.status(400).json({ 
        message: "Name, Email, and Grade are required",
        received: req.body
      });
    }
    
    const student = await Student.create(req.body);
    res.status(201).json(student);
  } catch (err) {
    console.error("Error creating student:", err.message);
    res.status(400).json({ message: err.message });
  }
};

// Get All Students
exports.getAllStudents = async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Update Student
exports.updateStudent = async (req, res) => {
  try {
    const student = await Student.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }
    res.json(student);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete Student
exports.deleteStudent = async (req, res) => {
  try {
    const student = await Student.findByIdAndDelete(req.params.id);
    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }
    res.json({ message: "Student Deleted" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
