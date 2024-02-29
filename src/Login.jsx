import React from 'react';

const CLIENT_ID = 'YOUR_SPOTIFY_CLIENT_ID'; // Replace with your Spotify Client ID
const REDIRECT_URI = 'http://localhost:3000/callback'; // Replace with your Redirect URI
const SCOPES = ['user-read-private', 'user-read-email', 'user-modify-playback-state']; // Add more scopes as needed

const AUTH_URL = `https://accounts.spotify.com/authorize?${new URLSearchParams({
  response_type: 'code',
  client_id: CLIENT_ID,
  scope: SCOPES.join(' '),
  redirect_uri: REDIRECT_URI,
  show_dialog: true,
}).toString()}`;

const Login = () => {
  return (
    <div className="login-container">
      <h1>Login to Spotify</h1>
      <a href={AUTH_URL} className="login-button">Log in with Spotify</a>
    </div>
  );
};

export default Login;
