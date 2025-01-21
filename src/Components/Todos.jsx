/* users.jsx */
import axios from "axios";
import { useEffect, useState } from "react";
import './Todos.css'; // Import the external CSS file

export default function Psychologists() {
  const [psychologists, setPsychologists] = useState([]); // State to store psychologists
  const [loading, setLoading] = useState(true); // State to show loading indicator
  const [error, setError] = useState(null);  // State to handle errors

  // Use useEffect to fetch the data from the API
  useEffect(() => {
    // Function to fetch psychologists
    const fetchPsychologists = async () => {
      try {
        // Assuming you're still using randomuser.me, but this could be a psychologist-specific API
        const response = await axios.get("https://randomuser.me/api/?results=100");
        setPsychologists(response.data.results); // Store the psychologist data in state
      } catch (error) {
        setError(error.message); // Handle errors
      } finally {
        setLoading(false); // End loading when request is complete
      }
    };

    fetchPsychologists(); // Call the fetchPsychologists function
  }, []); // Empty dependency array to run once on component mount

  // If psychologists are loading, show loading message
  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <h1 className="text-4xl font-bold text-gray-800">Loading psychologists...</h1>
      </div>
    );
  }

  // If there's an error, show error message
  if (error) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <h1 className="text-4xl font-bold text-gray-800">Error: {error}</h1>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-gray-800">Psychologists</h1>

      {/* Flex container for psychologists in a horizontal row */}
      <div className="todos-container">
        {psychologists.map((psychologist) => (
          <div key={psychologist.login.uuid} className="todo-card">
            <img 
              src={psychologist.picture.large} 
              alt={`${psychologist.name.first} ${psychologist.name.last}`} 
              className="rounded-full w-full mb-4" 
            />
            <h2 className="text-lg font-semibold text-gray-800">
              {psychologist.name.title} {psychologist.name.first} {psychologist.name.last}
            </h2>
            <p className="text-sm text-gray-600">Gender: {psychologist.gender}</p>
            <p className="text-sm text-gray-600">Location: {psychologist.location.city}, {psychologist.location.country}</p>
            <p className="text-sm text-gray-600">Email: {psychologist.email}</p>
            <p className="text-sm text-gray-600">Phone: {psychologist.phone}</p>
            <p className="text-sm text-gray-600">Cell: {psychologist.cell}</p>
             
          </div>
        ))}
      </div>
    </div>
  );
}
