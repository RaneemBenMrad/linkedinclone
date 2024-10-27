// src/components/SignIn.js
import React, { useState } from 'react';
import './SignIn.css'; // pour le style

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignIn = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("L'email et le mot de passe sont requis");
    } else {
      // Exemple d'authentification de base
      if (email === 'user@example.com' && password === 'password123') {
        alert('Connexion réussie !');
        setError('');
      } else {
        setError('Email ou mot de passe incorrect');
      }
    }
  };

  return (
    <div className="signin-container">
      <h2>Connexion</h2>
      <form onSubmit={handleSignIn}>
        <div className="input-group">
          <label>Email</label>
          <input
            type="email"
            placeholder="Entrez votre email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label>Mot de Passe</label>
          <input
            type="password"
            placeholder="Entrez votre mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <p className="error-message">{error}</p>}
        <button type="submit">Se connecter</button>
      </form>
      <div className="additional-links">
        <a href="#forgot-password">Mot de passe oublié?</a>
        <span> | </span>
        <a href="#signup">S'inscrire</a>
      </div>
    </div>
  );
}

export default SignIn;
