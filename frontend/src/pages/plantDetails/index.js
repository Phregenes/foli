import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function PlantDetails() {
  const { id } = useParams();
  const [plantData, setPlantData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPlantData() {
      try {
        const response = await fetch(`http://localhost:3001/api/species/${id}`);
        if (!response.ok) {
          throw new Error('Erro ao recuperar informações sobre a planta.');
        }
        const data = await response.json();
        setPlantData(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    }
    fetchPlantData();
  }, [id]);

  console.log("data api", plantData)
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="about">
      bom dia
    </div>
  );
}

export default PlantDetails;
