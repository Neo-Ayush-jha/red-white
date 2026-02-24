const AttendanceSummary = ({ total, present, absent }) => {
  if (total === 0) return null;

  const attendanceRate = total > 0 ? Math.round((present / total) * 100) : 0;

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4">
      <div className="card bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200 p-3 sm:p-4">
        <div className="text-xs sm:text-sm text-muted-foreground mb-1">Total Students</div>
        <div className="text-xl sm:text-2xl font-bold text-primary">{total}</div>
      </div>
      <div className="card bg-gradient-to-br from-green-50 to-green-100 border-green-200 p-3 sm:p-4">
        <div className="text-xs sm:text-sm text-muted-foreground mb-1">Present</div>
        <div className="text-xl sm:text-2xl font-bold text-success">{present}</div>
      </div>
      <div className="card bg-gradient-to-br from-red-50 to-red-100 border-red-200 p-3 sm:p-4">
        <div className="text-xs sm:text-sm text-muted-foreground mb-1">Absent</div>
        <div className="text-xl sm:text-2xl font-bold text-destructive">{absent}</div>
      </div>
      <div className="card bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200 p-3 sm:p-4">
        <div className="text-xs sm:text-sm text-muted-foreground mb-1">Attendance Rate</div>
        <div className="text-xl sm:text-2xl font-bold" style={{color: 'hsl(270, 100%, 50%)'}}>{attendanceRate}%</div>
      </div>
    </div>
  );
};

export default AttendanceSummary;
