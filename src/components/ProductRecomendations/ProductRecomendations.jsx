import { useEffect, useState } from "react";
import { useChoices } from "../../context/ChoicesContext";
import { dailyRoutine, endpoint } from "../../constants/constants";
import arrow from "../../assets/arrow.png";
import full_heart from "../../assets/fullheart.png";
import empty_heart from "../../assets/heart.png";
import "./ProductRecommendations.css";

const ProductRecommendations = () => {
  const [products, setProducts] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showPrevButton, setShowPrevButton] = useState(false);
  const [wishlist, setWishlist] = useState(JSON.parse(localStorage.getItem("wishlist")));
  const { choices } = useChoices();

  useEffect(() => {
    fetch(endpoint)
      .then((response) => response.json())
      .then((data) => {
        const filteredProducts = data.products
          .filter((product) => {
            const keywords = [
              choices.hairType,
              choices.hairWash,
              choices.hairBenefit,
              choices.hairProblems,
              choices.hairColor,
            ];

            return keywords.some((keyword) =>
              product.body_html.toLowerCase().includes(keyword.toLowerCase())
              );
          })
          .sort((a, b) => {
            const aInWishlist = wishlist.includes(a.id);
            const bInWishlist = wishlist.includes(b.id);
            
            if (aInWishlist && !bInWishlist) {
              return -1;
            } else if (!aInWishlist && bInWishlist) {
              return 1;
            } else {
              return 0;
            }
          });
        setProducts(filteredProducts);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [
    choices.hairType,
    choices.hairWash,
    choices.hairBenefit,
    choices.hairProblems,
    choices.hairColor,
  ]);
  
  const extractPriceFromTags = (tags) => {
    const priceTag = tags.find((tag) => tag.includes("Price"));
    if (priceTag) {
      const priceParts = priceTag.split("-");
      if (priceParts.length === 2) {
        const price = priceParts[1].trim();
        return price;
      }
    }
    return null;
  };
  
  const handleNextClick = () => {
    if (currentIndex + 2 < products.length) {
      setCurrentIndex((prevIndex) => prevIndex + 2);
    }
    setShowPrevButton(true);
  };
  
  const handlePrevClick = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 2);
    }
    setShowPrevButton(currentIndex > 3);
  };

  const handleToggleWishlist = (product) => {
    let updatedWishlist;
    if (wishlist.includes(product.id)) {
      updatedWishlist = wishlist.filter((id) => id !== product.id);
    } else {
      updatedWishlist = [...wishlist, product.id];
    }
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
    setWishlist(updatedWishlist);
  };
  

  return (
    <div className="product-container">
      <div className="button-box">
        {showPrevButton && (
          <button
            className="cards-prev-button"
            onClick={handlePrevClick}
            disabled={currentIndex === 0}
          >
            <img src={arrow} alt="Previous" />
          </button>
        )}
      </div>
      <div className="product-card-text">
        <h3>Daily Routine</h3>
        <p>{dailyRoutine}</p>
      </div>
      {products.slice(currentIndex, currentIndex + 2).map((product) => (
        <div className="product-card" key={product.id}>
          <div className="product-content">
            <img src={product.images[0].src} alt={product.title} />
              <button
                className="wishlist-button"
                onClick={() => handleToggleWishlist(product)}
              >
                {wishlist.includes(product.id) ? (
                  <img id="heart" src={full_heart} alt="Remove from Wishlist" />
                ) : (
                  <img id="heart" src={empty_heart} alt="Add to Wishlist" />
                )}
              </button>
            <div className="prod-text">
              <h3>{product.title}</h3>
              <p>{extractPriceFromTags(product.tags)}</p>
            </div>
          </div>
        </div>
      ))}

      <div className="button-box">
        <button
          className="cards-next-button"
          onClick={handleNextClick}
          disabled={currentIndex + 2 >= products.length}
        >
          <img src={arrow} alt="Next" />
        </button>
      </div>
    </div>
  );
};

export default ProductRecommendations;
