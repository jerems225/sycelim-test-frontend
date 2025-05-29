import PropTypes from "prop-types";
import { useState } from "react";
import { Link } from "react-router-dom";
import './PropertyCard.css'
import { useAuth } from "../../../context/AuthContext";

const PropertyCard = ({ property }) => {
    const user = useAuth();
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
                    <p className="card-meta">
                        <span className="card-meta-row">
                            <svg className="card-meta-icon" viewBox="0 0 24 24" width={50}>
                                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
                            </svg>
                            {property.location}
                        </span>

                        <span className="card-meta-row">
                            <svg className="card-meta-icon" viewBox="0 0 24 24">
                                <path d="M12 1a1 1 0 011 1v1.07c1.64.18 3.1.87 4.22 1.94a1 1 0 01-1.41 1.41 5.983 5.983 0 00-2.81-1.51V11h1a4 4 0 010 8h-1v1a1 1 0 11-2 0v-1.07a6.01 6.01 0 01-4.22-1.94 1 1 0 011.41-1.41A3.983 3.983 0 0011 17h1a2 2 0 000-4h-1a1 1 0 01-1-1V6h-1a1 1 0 110-2h1V3a1 1 0 011-1z" />
                            </svg>
                            {property.price.toLocaleString()} FCFA
                        </span>
                    </p>

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
                        {user && user.isAuthenticated && (
                            <Link>
                                <button href="#" className="btn-primary">
                                    Booking
                                </button>
                            </Link>
                        )
                        }

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
