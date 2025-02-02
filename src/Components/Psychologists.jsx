import { useEffect , useState } from "react";
import './Psychologists.css'
import axios from "axios";
const Psychologists =()=>{
    const [psychologists, setPsychologists] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchPsychologists = async () => {
            try{
                const response = await axios.get("https://randomuser.me/api/?results=100");
                setPsychologists(response.data.results);
            }
            catch (error) {
                setError(error.message);
              } finally {
                setLoading(false);
              }
            };
            fetchPsychologists();
        }, []); 
        if (loading) {
            return (
              <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
                <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading psychologists...</span>
                </div>

              </div>
            );
          }
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
        
              {}
              <div className="psychologist-container">
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
export default Psychologists