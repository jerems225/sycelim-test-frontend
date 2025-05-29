import PropTypes from "prop-types";
import { useState } from "react";
import { Link } from "react-router-dom";
import './PropertyCard.css'

const PropertyCard = ({ property }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const MAX_LENGTH = 70;

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <div className="card" key={property.id}>
        <div className="card-image">
            <img src={property.cover} alt="Image de couverture" />
        </div>
        <div className="card-content">
          <h3 className="card-title">{property.title}</h3>
          <p className="card-description">
            {isExpanded
              ? property.description
              : `${property.description.slice(0, MAX_LENGTH)}...`}
            <span onClick={handleToggle}><strong>
              {isExpanded ? "Voir moins" : "Voir plus"}
            </strong>
            </span>
          </p>
          <div className="card-actions">
            <button className="btn-primary">
              View More
            </button>
            <Link>
            <button href="#" className="btn-primary">
              Preview
            </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

PropertyCard.propTypes = {
  property: PropTypes.object.isRequired,
};

export default PropertyCard;
