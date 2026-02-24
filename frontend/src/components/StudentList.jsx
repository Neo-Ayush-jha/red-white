import AttendanceToggle from "./AttendanceToggle";

const StudentList = ({ students, onToggleAttendance, onDelete }) => {
  // Desktop table view
  const DesktopView = () => (
    <div className="overflow-x-auto hidden md:block">
      <table className="w-full">
        <thead>
          <tr className="table-header">
            <th className="px-3 sm:px-4 md:px-6 py-3 text-left text-xs sm:text-sm font-semibold">Name</th>
            <th className="px-3 sm:px-4 md:px-6 py-3 text-left text-xs sm:text-sm font-semibold">Email</th>
            <th className="px-3 sm:px-4 md:px-6 py-3 text-left text-xs sm:text-sm font-semibold">Grade</th>
            <th className="px-3 sm:px-4 md:px-6 py-3 text-left text-xs sm:text-sm font-semibold">Attendance</th>
            <th className="px-3 sm:px-4 md:px-6 py-3 text-left text-xs sm:text-sm font-semibold">Actions</th>
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
                <td className="px-3 sm:px-4 md:px-6 py-4 text-xs sm:text-sm font-medium text-foreground">{student.name}</td>
                <td className="px-3 sm:px-4 md:px-6 py-4 text-xs sm:text-sm text-muted-foreground">{student.email}</td>
                <td className="px-3 sm:px-4 md:px-6 py-4 text-xs sm:text-sm text-foreground">
                  <span className="bg-accent text-accent-foreground px-2 sm:px-3 py-1 rounded-full text-xs font-medium">
                    {student.grade}
                  </span>
                </td>
                <td className="px-3 sm:px-4 md:px-6 py-4 text-xs sm:text-sm">
                  <AttendanceToggle
                    status={student.attendance}
                    onToggle={() => onToggleAttendance(student._id)}
                  />
                </td>
                <td className="px-3 sm:px-4 md:px-6 py-4 text-xs sm:text-sm">
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

  // Mobile card view
  const MobileView = () => (
    <div className="md:hidden space-y-4">
      {students.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-muted-foreground text-sm">No students added yet. Click "Add Student" to get started.</p>
        </div>
      ) : (
        students.map((student) => (
          <div key={student._id} className="bg-card border border-border rounded-lg p-4 space-y-3">
            <div className="space-y-2">
              <div className="flex justify-between items-start gap-2">
                <div>
                  <p className="text-xs text-muted-foreground">Name</p>
                  <p className="font-semibold text-foreground text-sm">{student.name}</p>
                </div>
                <span className="bg-accent text-accent-foreground px-2 py-1 rounded text-xs font-medium">
                  {student.grade}
                </span>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Email</p>
                <p className="text-foreground text-xs break-all">{student.email}</p>
              </div>
            </div>
            <div className="flex gap-2 pt-2 border-t border-border">
              <AttendanceToggle
                status={student.attendance}
                onToggle={() => onToggleAttendance(student._id)}
                isMobile
              />
              <button
                onClick={() => onDelete(student._id)}
                className="btn-danger text-xs flex-1"
                title="Delete student"
              >
                Delete
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );

  return (
    <>
      <DesktopView />
      <MobileView />
    </>
  );
};

export default StudentList;