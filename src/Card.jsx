import React, { useState } from "react";
// import "./styles.css";
import Product from "./Product";

const Card = () => {
  const listOfSneaks = [
    {
      name: "Ooops",
      price: 120,
      img: "https://i.pinimg.com/originals/03/6e/a1/036ea1ab92acabb70ad00e835c329eaf.jpg",
    },
    {
      name: "Stamina-Classy",
      price: 70,
      img: "https://skcfiles.mncdn.com/mnresize/600/600/livephotos/193642253634/01_2.jpg",
    },
    {
      name: "Drift Siyah",
      price: 80,
      img: "https://floimages.mncdn.com/media/catalog/product/22-10/31/385_k100864m-13013-1.jpg",
    },
    {
      name: "Erkek Ayakkabi",
      price: 90,
      img: "https://productimages.hepsiburada.net/s/51/300-443/11062155444274.jpg",
    },
    {
      name: "Expert Hermes",
      price: 60,
      img: "https://assets.hermes.com/is/image/hermesproduct/expert-sneaker--221896ZH92-worn-1-0-0-1000-1000_b.jpg",
    },
    {
      name: "Depart",
      price: 110,
      img: "https://assets.hermes.com/is/image/hermesproduct/depart-sneaker--212918ZH01-worn-3-0-0-800-800_b.jpg",
    },
  ];

  const [sneak, setSneak] = useState(listOfSneaks);
  const [text, setText] = useState("");
  const [blur, setBlur] = useState(false);

  const handleSearch = (e) => {
    setText(e.target.value);
    setSneak(
      listOfSneaks.filter((item) =>
        item.name.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  };

  const handleBlur = () => {
    setBlur(!blur);
  };

  return (
    <>
      <input
        type="text"
        value={text}
        placeholder="Write title to search"
        onChange={(e) => handleSearch(e)}
        onBlur={handleBlur}
        className={`input ${!text && blur ? "is-error" : "no-error"}`}
      />
      <div className="sneak-list">
        {sneak.map((item, index) => {
          return <Product item={item} index={index} key={index} />;
        })}
      </div>
    </>
  );
};
export default Card;
