// src/components/Dashboard.js
import React from 'react';
import './Dashboard.css';

function Dashboard() {
  return (
    <div className="dashboard-container">
      <header className="header">
        <h1>LinkedIn Clone Dashboard</h1>
      </header>
      <div className="dashboard-content">
        <aside className="sidebar">
          <ul>
            <li>Mon Profil</li>
            <li>Mon Réseau</li>
            <li>Offres d'Emploi</li>
            <li>Messages</li>
            <li>Notifications</li>
            <li>Déconnexion</li>
          </ul>
        </aside>
        <main className="main-content">
          <h2>Bienvenue sur votre tableau de bord</h2>
          <p>Voici les dernières mises à jour de votre réseau.</p>
          {/* Ajoutez ici d'autres composants ou sections */}
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
