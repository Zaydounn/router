import React, { useState } from 'react'
import './AddGames.css'
import Modal from "react-modal";
Modal.setAppElement("#root");

const Addgames = ({AddNewGame}) => {

    const [modalIsOpen, setIsOpen] = useState(false);
    const [newGames, setNewGame] = useState({
      name: "",
      date: "",
      description: "",
      image: "",
      rating: "",
    });
    const handleChange = (e) => {
        setNewGame({ ...AddNewGame, [e.target.name]: e.target.value });
      };
    
    function openModal() {
        setIsOpen(true);
      }
    
    function closeModal() {
        setIsOpen(false);
      }

    return (
        <div className="Add-btn-container">
      <button className="Add-btn" onClick={openModal}>
        +
      </button>
         <Modal
        className="add-modal"
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
      >
        <h1 className="addMovie-h1">Add A game</h1>
        <form>
          <label>game Name</label>
          <input
            type="text"
            name="name"
            Price="price"
            required
            onChange={handleChange}
          />
          <label>game Rate</label>
          <input
            type="text"
            name="rating"
            required
            onChange={handleChange}
          />
          <label>game Release Date</label>
          <input
            type="text"
            name="date"
            required
            onChange={handleChange}
          />
          <label>game Image</label>
          <input
            type="url"
            name="image"
            required           
            onChange={handleChange}
          />
          <label>game Summary</label>
          <textarea
            type="text"
            name="description"
            required
            onChange={handleChange}
          />
        </form>
        <button
          className="Modal-btn"
          onClick={() => {
            AddNewGame(newGames);
            closeModal();
          }}
        >
          Submit
        </button>
        <button className="Modal-btn" onClick={closeModal}>
          close
        </button>
        
      </Modal>
    </div>
  );
};
    

export default AddGames
