import { useState } from "react";

const AddStudentForm = ({ onAdd, onCancel }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [grade, setGrade] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !grade) return;
    onAdd({ name, email, grade });
    setName("");
    setEmail("");
    setGrade("");
  };

  return (
    <form onSubmit={handleSubmit} className="card border-2 border-primary border-opacity-20 bg-gradient-to-br from-card to-opacity-50">
      <h3 className="text-lg font-bold mb-4 text-foreground">Add New Student</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-sm font-medium mb-2 text-foreground">Student Name *</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="input"
            placeholder="e.g., John Doe"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2 text-foreground">Student Email *</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input"
            placeholder="e.g., john@example.com"
            required
          />
        </div>
      </div>
      
      <div className="mb-6">
        <label className="block text-sm font-medium mb-2 text-foreground">Student Grade *</label>
        <input
          type="text"
          value={grade}
          onChange={(e) => setGrade(e.target.value)}
          className="input"
          placeholder="e.g., 10th Grade, A, or 90%"
          required
        />
      </div>
      
      <div className="flex gap-3 pt-2">
        <button type="submit" className="btn-success flex-1">
          Save Student
        </button>
        <button type="button" onClick={onCancel} className="btn-secondary flex-1">
          Cancel
        </button>
      </div>
    </form>
  );
};

export default AddStudentForm;