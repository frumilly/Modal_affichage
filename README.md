# react-customise-modal-bis
# Modal React

Le composant Modal est une boîte de dialogue modale flexible et personnalisable pour les applications React.

## Installation

npm install react-customise-modal-bis


## Utilisation

```javascript
import React from 'react';
import Modal from 'Modal.js';

function MonComposant() {
  const handleClose = () => {
    // Logique de fermeture de la modal
  };

  return (
    <Modal
      isOpen={true}
      message="Mon message dans la modal"
      buttons={[
        { label: "OK", action: () => console.log("Clic sur OK") },
        { label: "Annuler", action: () => console.log("Clic sur Annuler") }
      ]}
      onClose={handleClose}
      color="black"
      background="white"
    />
  );
}
Props
isOpen (obligatoire) : Un booléen pour déterminer si la modal est ouverte ou fermée.
message : Le message à afficher dans la modal.
buttons : Un tableau d'objets décrivant les boutons à afficher dans la modal. Chaque objet doit avoir une propriété label pour le texte du bouton et une propriété action pour la fonction à exécuter lors du clic sur le bouton.
onClose (obligatoire) : La fonction de gestion d'événement pour fermer la modal.
color : La couleur du texte de la modal.
background : La couleur de fond de la modal.

