import { useEffect , useState} from "react";
import { useNavigate } from "react-router-dom";
import './Psychologists.css'
import axios from "axios";
const Psychologists =({setOnePsy})=>{
    const nav = useNavigate()
    const [psychologists, setPsychologists] = useState([]);
    const [filtredPsys,setFiltredPsys] = useState([]);
    const [filtrData,setFilterData] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchPsychologists = async () => {
            try{
                const response = await axios.get("https://randomuser.me/api/?results=100");
                setPsychologists(response.data.results);
                setFiltredPsys(response.data.results);

            }
            catch (error) {
                setError(error.message);
              } finally {
                setLoading(false);
              }
            };
            fetchPsychologists();
        }, []); 
        const filterPsys = (v)=> {
          setFilterData(v)
          if (v==='') {setFiltredPsys(psychologists)}
          else {
            setFiltredPsys(psychologists.filter((p)=>`${p.name.title} ${p.name.first} ${p.name.last}`.toLocaleLowerCase().includes(v.toLocaleLowerCase())))
          }
        }
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
          const handleClick = (o) => {
            console.log(setOnePsy);
            
            setOnePsy(o)
            nav(`/psychologist`)
          }
          return (
            <div className="flex flex-col items-center bg-gray-100 p-8">
              {/* <div style={{display:"flex"}}> */}
              <h1 className="text-4xl font-bold text-gray-800">Psychologists</h1>
        <input className="form-control me-2 mb-3" type="search" placeholder="Search" aria-label="Search" value={filtrData} onChange={(e)=>filterPsys(e.target.value)}/>
      {/* </div> */}
              <div className="memes-container">
                {filtredPsys.map((psychologist) => (
                  <div key={psychologist.login.uuid} className="meme-card">
                    <img 
                      src={psychologist.picture.large} 
                      alt={`${psychologist.name.first} ${psychologist.name.last}`} 
                      className="meme-card-image" 
                    />
                    <h2 className="text-lg font-semibold text-gray-800">
                      {psychologist.name.title} {psychologist.name.first} {psychologist.name.last}
                    </h2>
                    <p className="text-sm text-gray-600">Gender: {psychologist.gender}</p>
                    <p className="text-sm text-gray-600">Location: {psychologist.location.city}, {psychologist.location.country}</p>
                    <p className="text-sm text-gray-600">Email: {psychologist.email}</p>
                    <p className="text-sm text-gray-600">Phone: {psychologist.phone}</p>
                    <p className="text-sm text-gray-600">Cell: {psychologist.cell}</p>
                    <button className="button-1 " onClick={() => handleClick(psychologist)}>
              View Profile
            </button>
                  </div>
                  
                ))}
              </div>
            </div>
          );
    



  const [items, setItems] = useState([])
const filteredItems = items.filter(item => item.isActive)

return <>
  <p>Total Items: ${items.length}</p>
  <ItemList items={filteredItems} />
</>
}
export default Psychologists