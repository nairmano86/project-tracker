import React, { useState } from 'react';
import './App.css';

function App() {
  const [projects, setProjects] = useState([]);
  const [name, setName] = useState('');
  const [client, setClient] = useState('');
  const [assignedTo, setAssignedTo] = useState('');

  const addProject = () => {
    if (name && client && assignedTo) {
      setProjects([...projects, { name, client, assignedTo, status: 'Pending' }]);
      setName('');
      setClient('');
      setAssignedTo('');
    }
  };

  return (
    <div className="App" style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h2>Enuncia Global Project Tracker</h2>
      <input
        type="text"
        placeholder="Project Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Client Name"
        value={client}
        onChange={(e) => setClient(e.target.value)}
      />
      <input
        type="text"
        placeholder="Assigned To"
        value={assignedTo}
        onChange={(e) => setAssignedTo(e.target.value)}
      />
      <button onClick={addProject}>Add Project</button>

      <div style={{ marginTop: '20px' }}>
        {projects.map((proj, index) => (
          <div key={index} style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
            <p><strong>Project:</strong> {proj.name}</p>
            <p><strong>Client:</strong> {proj.client}</p>
            <p><strong>Assigned To:</strong> {proj.assignedTo}</p>
            <p><strong>Status:</strong> {proj.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;