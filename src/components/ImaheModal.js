import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './ImaheModal.module.css';

const photos = [
  { name: "Photo 1", price: "$10", category: "Category 1", image: "photo1.jpg" },
  { name: "Photo 2", price: "$20", category: "Category 1", image: "photo2.jpg" },
  { name: "Photo 3", price: "$30", category: "Category 1", image: "photo3.jpg" },
  { name: "Photo 4", price: "$10", category: "Category 2", image: "photo4.jpg" },
  { name: "Photo 5", price: "$20", category: "Category 2", image: "photo5.jpg" },
  { name: "Photo 6", price: "$30", category: "Category 2", image: "photo6.jpg" },
  { name: "Photo 7", price: "$10", category: "Category 3", image: "photo7.jpg" },
  { name: "Photo 8", price: "$20", category: "Category 3", image: "photo8.jpg" },
  { name: "Photo 9", price: "$30", category: "Category 3", image: "photo9.jpg" },
];

export default function Photos() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handlePhotoClick = (photo) => {
    setSelectedPhoto(photo);
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const filteredPhotos = selectedCategory
    ? photos.filter((photo) => photo.category === selectedCategory)
    : photos;

  return (
    <>
      <h2>Photos</h2>

      <div className={styles['category-buttons']}>
        <button onClick={() => handleCategoryClick(null)}>All</button>
        <button onClick={() => handleCategoryClick("Category 1")}>Category 1</button>
        <button onClick={() => handleCategoryClick("Category 2")}>Category 2</button>
        <button onClick={() => handleCategoryClick("Category 3")}>Category 3</button>
      </div>

      <div className={styles['photo-grid']}>
        {filteredPhotos.map((photo) => (
          <div
            className={styles.photo}
            key={photo.name}
            onClick={() => handlePhotoClick(photo)}
          >
            <img src={photo.image} alt={photo.name} />
            <h3>{photo.name}</h3>
            <p>{photo.price}</p>
            <Link to="/bet">
              <button onClick={() => setSelectedPhoto(photo)}>Place a Bet</button>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
