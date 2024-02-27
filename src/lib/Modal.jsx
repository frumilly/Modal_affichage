import React from 'react';
import './Modal.css'; 

/**
 * Composant de modal personnalisée.
 * @param {Object} props - Les props du composant.
 * @param {boolean} props.isOpen - Indique si la modal est ouverte ou non.
 * @param {string} [props.message="Hello modal"] - Le message à afficher dans la modal.
 * @param {function} props.onOk - La fonction à appeler lorsque l'utilisateur clique sur le bouton "OK".
 * @param {function} props.onClose - La fonction à appeler lorsque l'utilisateur ferme la modal.
 * @param {string} [props.textColor="#000"] - Couleur du texte par défaut.
 * @param {string} [props.modalBackground="#fff"] - Fond de la modale par défaut.
 * @returns {JSX.Element|null} Le composant Modal.
 */
const Modal = ({ isOpen, message = "Hello modal", onOk, onClose, textColor = "#000", modalBackground = "#fff" }) => {
  if (!isOpen) {
    return null;
  }

  /**
   * Gère le clic sur le bouton "OK".
   * Appelle d'abord la fonction onOk, puis onClose.
   * @returns {void}
   */
  const handleOkButtonClick = () => {
    onOk();
    onClose();
  };

  const modalStyle = {
    color: textColor,
    backgroundColor: modalBackground
  };

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <div className="modal-content" style={modalStyle}>
          <button className="close-btn" onClick={onClose}>X</button>
          <p>{message}</p>
          <div className="modal-buttons">
            <button onClick={handleOkButtonClick}>OK</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
