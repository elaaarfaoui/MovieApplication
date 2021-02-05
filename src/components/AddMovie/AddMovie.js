import React, { useState } from "react";

import Modal from "react-modal";

import "./AddMovie.css";

Modal.setAppElement("#root");

const AddMovie = ({ AddNewMovie }) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  const [newMovie, setNewMovie] = useState({
    name: "",
    rating: "",
    date: "",
    description: "",
    image: "",
  });

  const handleChange = (e) => {
    setNewMovie({ ...newMovie, [e.target.name]: e.target.value });
  };

  // const [name, setName] = useState("");
  // const [date, setDate] = useState("");
  // const [description, setDescription] = useState("");
  // const [rating, setRating] = useState("");
  // const [image, setImage] = useState("");

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
        <h1 className="addMovie-h1">Add A Movie</h1>
        <form>
          <label>Movie Name</label>
          <input
            type="text"
            name="name"
            // onChange={(e) => setName(e.target.value)}
            // onChange={(e)=>{setNewMovie({...newMovie, name:e.target.value})}}
            onChange={handleChange}
            required
          />
          <label>Movie Rate</label>
          <input
            type="text"
            name="rating"
            // onChange={(e) => setRating(e.target.value)}
            // onChange={(e)=>{setNewMovie({...newMovie, rating:e.target.value})}}
            onChange={handleChange}
            required
          />
          <label>Movie Release Date</label>
          <input
            type="text"
            name="date"
            // onChange={(e) => setDate(e.target.value)}
            // onChange={(e)=>{setNewMovie({...newMovie, date:e.target.value})}}
            onChange={handleChange}
            required
          />
          <label>Movie Image</label>
          <input
            type="url"
            name="image"
            // onChange={(e) => setImage(e.target.value)}
            // onChange={(e)=>{setNewMovie({...newMovie, image:e.target.value})}}
            onChange={handleChange}
            required
          />
          <label>Movie Summary</label>
          <textarea
            type="text"
            name="description"
            // onChange={(e) => setDescription(e.target.value)}
            // onChange={(e)=>{setNewMovie({...newMovie, description:e.target.value})}}
            onChange={handleChange}
            required
          />
        </form>
        <button
          className="Modal-btn"
          onClick={() => {
            // AddNewMovie({
            //   name: name,
            //   rating: rating,
            //   date: date,
            //   description: description,
            //   image: image,
            // });
            AddNewMovie(newMovie);
            setNewMovie({
              name: "",
              rating: "",
              date: "",
              description: "",
              image: "",
            });
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

export default AddMovie;
