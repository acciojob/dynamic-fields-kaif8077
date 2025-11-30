import React, { useState } from "react";

const App = () => {
  // State for all dynamic fields
  const [fields, setFields] = useState([{ name: "", age: "" }]);

  // Handle input change
  const handleChange = (index, e) => {
    const newFields = [...fields];
    newFields[index][e.target.name] = e.target.value;
    setFields(newFields);
  };

  // Add new field
  const addField = () => {
    setFields([...fields, { name: "", age: "" }]);
  };

  // Remove a field
  const removeField = (index) => {
    const newFields = fields.filter((_, i) => i !== index);
    setFields(newFields);
  };

  // Submit form
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(fields); // Logs all data
  };

  return (
    <div>
      <h2>Dynamic Form</h2>
      <form onSubmit={handleSubmit}>
        {fields.map((field, index) => (
          <div key={index} style={{ marginBottom: "10px" }}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={field.name}
              onChange={(e) => handleChange(index, e)}
            />
            <input
              type="number"
              name="age"
              placeholder="Age"
              value={field.age}
              onChange={(e) => handleChange(index, e)}
              style={{ marginLeft: "5px" }}
            />
            <button
              type="button"
              onClick={() => removeField(index)}
              style={{ marginLeft: "5px" }}
            >
              Remove
            </button>
          </div>
        ))}

        {/* Button text changed to match Cypress tests */}
        <button type="button" onClick={addField}>
          Add More..
        </button>

        <button type="submit" style={{ marginLeft: "10px" }}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default App;
