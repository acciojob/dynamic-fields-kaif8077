import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  
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

  // Remove field
  const removeField = (index) => {
    const newFields = fields.filter((_, i) => i !== index);
    setFields(newFields);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(fields);
  
  };

  return (
    <div>
      
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

        <button type="button" onClick={addField}>
          Add More Fields
        </button>

        <button type="submit" style={{ marginLeft: "10px" }}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default App;
