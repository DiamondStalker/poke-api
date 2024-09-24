import React from 'react';
import '../assets/css/popuperror.css'; // Importa el CSS específico para el popup

const PopupError = ({ message, onClose }) => {
    const handleReload = () => {
        window.location.reload(); // Recarga la página
    };

    return (
        <div className="popup-overlay">
            <div className="popup-container">
                <h2>Error</h2>
                <p>{message}</p>
                <button onClick={handleReload}>Aceptar</button>
            </div>
        </div>
    );
};

export default PopupError;
