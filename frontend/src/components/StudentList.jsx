import AttendanceToggle from "./AttendanceToggle";

const StudentList = ({ students, onToggleAttendance, onDelete }) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="table-header">
            <th className="px-6 py-3 text-left text-sm font-semibold">Student Name</th>
            <th className="px-6 py-3 text-left text-sm font-semibold">Student Email</th>
            <th className="px-6 py-3 text-left text-sm font-semibold">Student Grade</th>
            <th className="px-6 py-3 text-left text-sm font-semibold">Attendance</th>
            <th className="px-6 py-3 text-left text-sm font-semibold">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-border">
          {students.length === 0 ? (
            <tr>
              <td colSpan={5} className="px-6 py-8 text-center text-muted-foreground text-sm">
                No students added yet. Click "Add Student" to get started.
              </td>
            </tr>
          ) : (
            students.map((student) => (
              <tr key={student._id} className="hover:bg-muted transition-colors">
                <td className="px-6 py-4 text-sm font-medium text-foreground">{student.name}</td>
                <td className="px-6 py-4 text-sm text-muted-foreground">{student.email}</td>
                <td className="px-6 py-4 text-sm text-foreground">
                  <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-medium">
                    {student.grade}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm">
                  <AttendanceToggle
                    status={student.attendance}
                    onToggle={() => onToggleAttendance(student._id)}
                  />
                </td>
                <td className="px-6 py-4 text-sm">
                  <button
                    onClick={() => onDelete(student._id)}
                    className="btn-danger text-xs py-1 px-2 hover:shadow-lg"
                    title="Delete student"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default StudentList;