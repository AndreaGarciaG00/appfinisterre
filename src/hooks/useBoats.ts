import { useState } from 'react';
import { Boat } from '../types/Boat';

const initialBoats: Boat[] = [
  {
    id: '1',
    name: 'Azimut 70',
    description: 'Yate de lujo con todas las comodidades para una experiencia única en el mar.',
    category: 'Yate de Lujo',
    image: 'https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: 2500,
    capacity: 12,
    duration: 8,
    location: 'Los Cabos',
    rating: 4.9
  },
  {
    id: '2',
    name: 'Cabo Sport Fisher',
    description: 'Bote especializado para pesca deportiva con equipamiento profesional.',
    category: 'Bote de Pesca',
    image: 'https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: 800,
    capacity: 8,
    duration: 6,
    location: 'Los Cabos',
    rating: 4.7
  },
  {
    id: '3',
    name: 'Lagoon 450',
    description: 'Catamarán espacioso perfecto para grupos grandes y celebraciones.',
    category: 'Catamarán',
    image: 'https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: 1800,
    capacity: 16,
    duration: 8,
    location: 'Los Cabos',
    rating: 4.8
  },
  {
    id: '4',
    name: 'Sea Ray 350',
    description: 'Lancha deportiva ideal para excursiones familiares y aventuras acuáticas.',
    category: 'Lancha',
    image: 'https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: 1200,
    capacity: 10,
    duration: 4,
    location: 'Los Cabos',
    rating: 4.6
  },
  {
    id: '5',
    name: 'Princess 68',
    description: 'Yate de lujo con cabinas privadas y servicio de tripulación completo.',
    category: 'Yate de Lujo',
    image: 'https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: 3500,
    capacity: 14,
    duration: 8,
    location: 'Los Cabos',
    rating: 5.0
  },
  {
    id: '6',
    name: 'Bertram 31',
    description: 'Bote de pesca deportiva con tecnología avanzada para la pesca de altura.',
    category: 'Bote de Pesca',
    image: 'https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: 1000,
    capacity: 6,
    duration: 8,
    location: 'Los Cabos',
    rating: 4.8
  }
];

export const useBoats = () => {
  const [boats, setBoats] = useState<Boat[]>(initialBoats);

  const addBoat = (boatData: Omit<Boat, 'id'>) => {
    const newBoat: Boat = {
      ...boatData,
      id: Date.now().toString()
    };
    setBoats(prev => [...prev, newBoat]);
  };

  const updateBoat = (id: string, boatData: Omit<Boat, 'id'>) => {
    setBoats(prev => prev.map(boat => 
      boat.id === id ? { ...boatData, id } : boat
    ));
  };

  const deleteBoat = (id: string) => {
    setBoats(prev => prev.filter(boat => boat.id !== id));
  };

  return {
    boats,
    addBoat,
    updateBoat,
    deleteBoat
  };
};