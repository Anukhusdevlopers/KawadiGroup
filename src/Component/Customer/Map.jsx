// CurrentLocationMapWithAddress.jsx
import React, { useState, useEffect } from 'react';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import axios from 'axios';

// Set up the container style for the map
const containerStyle = {


  width: '100%',
  height: '400px',  
};

// Replace these with your actual API keys
const GOOGLE_MAPS_API_KEY = 'AIzaSyAw6ibYAgEfQ2yExWJWLeLZGXkGnrBCkwQ';
const OPENCAGE_API_KEY = '3f9d2b6100594dbebb33ad41f9fc2118';

const CurrentLocationMapWithAddress = () => {
  // State to store coordinates, address, and error
  const [coordinates, setCoordinates] = useState({ latitude: null, longitude: null });
  const [address, setAddress] = useState(null);
  const [error, setError] = useState(null);

  // for locol storage
  const [lsAddress, setLsAddress] = useState();
  
  localStorage.setItem('address', lsAddress);

  // Load Google Maps API
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: GOOGLE_MAPS_API_KEY,
    libraries: ['places'],
  });

  // Function to fetch the current location
  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;



          // Save latitude and longitude to localStorage
          localStorage.setItem('latitude', latitude);
          localStorage.setItem('longitude', longitude);

          setCoordinates({ latitude, longitude });
          fetchAddress(latitude, longitude); // Fetch address using OpenCage API
          setError(null); // Clear any previous errors
        },
        (error) => {
          console.error("Error fetching location:", error);
          setError(error.message); // Set the error message
        }
      );
    } else {
      alert("Geolocation is not supported by your browser.");
    }
  };

  // Function to fetch address using OpenCage API
  const fetchAddress = async (latitude, longitude) => {
    try {
      const response = await axios.get(
     `   https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${OPENCAGE_API_KEY}&pretty=1&no_annotations=1`
      );

      if (response.data && response.data.results && response.data.results.length > 0) {
        setAddress(response.data.results[0].formatted);
        setLsAddress(response.data.results[0].formatted);
       

      } else {
        setError("Unable to fetch address.");
      }
    } catch (error) {
      console.error("Error fetching address:", error);
      setError("Error fetching address.");
    }
  };

  // Fetch location when component mounts
  useEffect(() => {
    getCurrentLocation();
  }, []);

  // Handle loading errors
  if (loadError) return <div>Error loading map</div>;
  if (!isLoaded) return <div>Loading Map...</div>;

  return (
    <div>
      {/* <h2>Your Current Location</h2> */}
      {error ? (
        <p style={{ color: 'red' }}>Error: {error}</p>
      ) : coordinates.latitude && coordinates.longitude ? (
        <div>
          {/* <p><strong>Latitude:</strong> {coordinates.latitude}</p>
          <p><strong>Longitude:</strong> {coordinates.longitude}</p> */}
          

          <p ><strong>Your Location:</strong> {address ? address : 'Fetching address...'}</p>

          {/* Display the Google Map */}
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={{ lat: coordinates.latitude, lng: coordinates.longitude }}
            zoom={14}
          >
            <Marker position={{ lat: coordinates.latitude, lng: coordinates.longitude }} />
          </GoogleMap>
        </div>
      ) : (
        <p>Fetching your current location...</p>
      )}
    </div>
  );
};

export default CurrentLocationMapWithAddress;
