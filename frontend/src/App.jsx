import { useState, useEffect } from "react";
import axios from "axios";
import AddStudentForm from "./components/AddStudentForm";
import StudentList from "./components/StudentList";
import AttendanceSummary from "./components/AttendanceSummary";

const API_URL = import.meta.env.VITE_API_URL;

const App = () => {
  const [students, setStudents] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(true);

  // Fetch students from backend
  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await axios.get(API_URL);
      setStudents(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching students:", error);
      alert("Failed to load students. Make sure backend is running on port 5000.");
      setLoading(false);
    }
  };

  const addStudent = async (studentData) => {
    try {
      const response = await axios.post(API_URL, studentData);
      setStudents([...students, response.data]);
      setShowForm(false);
    } catch (error) {
      console.error("Error adding student:", error);
      alert(error.response?.data?.message || "Failed to add student");
    }
  };

  const deleteStudent = async (id) => {
    if (window.confirm("Are you sure you want to delete this student?")) {
      try {
        await axios.delete(`${API_URL}/${id}`);
        setStudents(students.filter((s) => s._id !== id));
      } catch (error) {
        console.error("Error deleting student:", error);
        alert("Failed to delete student");
      }
    }
  };

  const toggleAttendance = async (id) => {
    const student = students.find((s) => s._id === id);
    const newStatus = student.attendance === "Present" ? "Absent" : "Present";
    
    try {
      const response = await axios.put(`${API_URL}/${id}`, {
        ...student,
        attendance: newStatus,
      });
      setStudents(students.map((s) => (s._id === id ? response.data : s)));
    } catch (error) {
      console.error("Error updating attendance:", error);
      alert("Failed to update attendance");
    }
  };

  const totalStudents = students.length;
  const presentCount = students.filter((s) => s.attendance === "Present").length;
  const absentCount = students.filter((s) => s.attendance === "Absent").length;

  return (
    <div className="min-h-screen bg-background">
      <div className="bg-gray-800  text-header-foreground px-6 lg:px-74 py-4 shadow-lg">
        <h1 className="text-lg font-bold">
           Student Management Application
        </h1>
      </div>

      <div className="max-w-6xl mx-auto p-6">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-6 text-center">Students List</h2>
          
          <button
            onClick={() => setShowForm(!showForm)}
            className="btn-primary gap-2"
          >
            <span>+</span> Add Student
          </button>
        </div>

        {showForm && (
          <div className="mb-6">
            <AddStudentForm onAdd={addStudent} onCancel={() => setShowForm(false)} />
          </div>
        )}

        {loading ? (
          <div className="text-center py-8">
            <p className="text-muted-foreground">Loading students...</p>
          </div>
        ) : (
          <>
            {totalStudents > 0 && (
              <div className="mb-6">
                {/* <AttendanceSummary total={totalStudents} present={presentCount} absent={absentCount} /> */}
              </div>
            )}
          </>
        )}

        {!loading && (
          <div className="card">
            <StudentList
              students={students}
              onToggleAttendance={toggleAttendance}
              onDelete={deleteStudent}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
