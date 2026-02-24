const AttendanceToggle = ({ status, onToggle, isMobile }) => {
  const getStatusStyles = () => {
    switch (status) {
      case "Present":
        return "bg-success text-success-foreground hover:bg-green-600 shadow-sm";
      case "Absent":
        return "bg-destructive text-destructive-foreground hover:bg-red-700 shadow-sm";
      default:
        return "bg-secondary text-secondary-foreground hover:bg-gray-400";
    }
  };

  const getStatusIcon = () => {
    switch (status) {
      case "Present":
        return "Present";
      case "Absent":
        return "Absent";
      default:
        return "Mark";
    }
  };

  return (
    <button
      onClick={onToggle}
      className={`px-2 sm:px-3 py-1 rounded text-xs sm:text-sm font-medium transition-all duration-200 flex items-center justify-center gap-1 flex-1 sm:flex-none ${getStatusStyles()}`}
      title={`Click to change attendance status (Current: ${status || "Not marked"})`}
    >
      <span className={isMobile ? "hidden" : ""}>{getStatusIcon()}</span>
      <span>{status || "Mark"}</span>
    </button>
  );
};

export default AttendanceToggle;
