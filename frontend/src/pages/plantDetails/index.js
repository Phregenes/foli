import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import "./styles.css"

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
    <div className="plant-details">
      <h1>{plantData.common_name || 'Informação não existente'}</h1>
      <img src={plantData.image_url || '#'} alt={plantData.scientific_name || 'Informação não existente'} />
      <div className="plant-details-info">
        <div className="plant-details-col">
          <p><strong>Scientific Name:</strong> {plantData.data.scientific_name || 'Informação não existente'}</p>
          <p><strong>Family:</strong> {plantData.data.family || 'Informação não existente'}</p>
          <p><strong>Year:</strong> {plantData.data.year || 'Informação não existente'}</p>
          <p><strong>Bibliography:</strong> {plantData.data.bibliography || 'Informação não existente'}</p>
          <p><strong>Author:</strong> {plantData.data.author || 'Informação não existente'}</p>
          <p><strong>Status:</strong> {plantData.data.status || 'Informação não existente'}</p>
        </div>
        <div className="plant-details-col">
          <p><strong>Duration:</strong> {plantData.data.specifications?.duration || 'Informação não existente'}</p>
          <p><strong>Growth Habit:</strong> {plantData.data.specifications?.growth_habit || 'Informação não existente'}</p>
          <p><strong>Growth Rate:</strong> {plantData.data.specifications?.growth_rate || 'Informação não existente'}</p>
          <p><strong>Mature Height:</strong> {plantData.data.specifications?.mature_height?.cm || 'Informação não existente'} cm</p>
          <p><strong>Mature Spread:</strong> {plantData.data.specifications?.mature_width?.cm || 'Informação não existente'} cm</p>
          <p><strong>Frost Free Days Minimum:</strong> {plantData.data.specifications?.frost_free_days_min || 'Informação não existente'}</p>
          <p><strong>Drought Tolerance:</strong> {plantData.data.specifications?.drought_tolerance || 'Informação não existente'}</p>
          <p><strong>Shade Tolerance:</strong> {plantData.data.specifications?.shade_tolerance || 'Informação não existente'}</p>
          <p><strong>Bloom Period:</strong> {plantData.data.specifications?.bloom_period || 'Informação não existente'}</p>
          <p><strong>Fruit Seed Period Begins:</strong> {plantData.data.specifications?.fruit_seed_period_begins || 'Informação não existente'}</p>
          <p><strong>Fruit Seed Period Ends:</strong> {plantData.data.specifications?.fruit_seed_period_ends || 'Informação não existente'}</p>
        </div>
      </div>
    </div>
  );
}

export default PlantDetails;
