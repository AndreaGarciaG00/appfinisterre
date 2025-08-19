import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Gallery from './components/Gallery';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AdminLogin from './components/AdminLogin';
import { AdminPanel } from './components/AdminPanel';
import { useBoats } from './hooks/useBoats';
import type { Boat } from './types/Boat';

function App() {
  const [showAdmin, setShowAdmin] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const { boats, addBoat, updateBoat, deleteBoat } = useBoats();

  const handleAdminLogin = () => {
    setIsAuthenticated(true);
  };

  const handleAdminLogout = () => {
    setIsAuthenticated(false);
    setShowAdmin(false);
  };

  const handleAddBoat = (boat: Omit<Boat, 'id'>) => {
    addBoat(boat);
  };

  const handleUpdateBoat = (id: string, boat: Omit<Boat, 'id'>) => {
    updateBoat(id, boat);
  };

  const handleDeleteBoat = (id: string) => {
    deleteBoat(id);
  };

  return (
    <div className="min-h-screen bg-white">
      {!showAdmin && !isAuthenticated ? (
        <>
          <Header onAdminClick={() => setShowAdmin(true)} />
          <Hero />
          <Services />
          <Gallery />
          <About />
          <Contact />
          <Footer />
        </>
      ) : showAdmin && !isAuthenticated ? (
        <AdminLogin 
          onLogin={handleAdminLogin}
          onBackToSite={() => setShowAdmin(false)}
        />
      ) : (
        <AdminPanel 
          boats={boats}
          onAddBoat={handleAddBoat}
          onUpdateBoat={handleUpdateBoat}
          onDeleteBoat={handleDeleteBoat}
          onBackToSite={() => setShowAdmin(false)}
          onLogout={handleAdminLogout}
        />
      )}
    </div>
  );
}

export default App;