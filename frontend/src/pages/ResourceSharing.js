import React, { useEffect, useState } from 'react';
import { getResources, shareResource } from '../services/resourceService';

export default function ResourceSharing() {
  const [resources, setResources] = useState([]);
  const [newResource, setNewResource] = useState({ name: '', type: '', department: '' });

  useEffect(() => {
    fetchResources();
  }, []);

  const fetchResources = async () => {
    try {
      const data = await getResources();
      setResources(data);
    } catch (error) {
      console.error('Error fetching resources:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await shareResource(newResource);
      setNewResource({ name: '', type: '', department: '' });
      fetchResources();
    } catch (error) {
      console.error('Error sharing resource:', error);
    }
  };

  return (
    <div className="resource-sharing">
      <h1>Resource Sharing</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Resource Name"
          value={newResource.name}
          onChange={(e) => setNewResource({ ...newResource, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Resource Type"
          value={newResource.type}
          onChange={(e) => setNewResource({ ...newResource, type: e.target.value })}
        />
        <input
          type="text"
          placeholder="Department"
          value={newResource.department}
          onChange={(e) => setNewResource({ ...newResource, department: e.target.value })}
        />
        <button type="submit">Share Resource</button>
      </form>
      <ul>
        {resources.map((resource) => (
          <li key={resource.id}>
            <h2>{resource.name}</h2>
            <p>Type: {resource.type}</p>
            <p>Department: {resource.department}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}