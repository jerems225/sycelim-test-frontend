import { useEffect, useState } from "react";
import { fetchCategories, fetchProperties } from "../../../services/propertyService";
import PropertyCard from "../PropertyCard/PropertyCard";
import './PropertyList.css';
import Loader from "../../Loader/Loader";

const PropertyList = () => {
    const [categories, setCategories] = useState([]);
    const [properties, setProperties] = useState([]);
    const [selectedTag, setSelectedTag] = useState('all');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [fetchedCategories, fetchedProperties] = await Promise.all([
                    fetchCategories(),
                    fetchProperties(),
                ]);
                setCategories(fetchedCategories);
                setProperties(fetchedProperties);
            } catch (error) {
                console.error('Error loading properties or categories:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const filteredProperties = properties.filter(property => {
        return (selectedTag === 'all' ? true : property.category.title === selectedTag);
    });

    return (
        <section className="card-list" id="properties">
            <h2 className="section-title">Our Properties</h2>

            <div className="tags-container">
                <button
                    className={`tag ${selectedTag === 'all' ? 'selected' : ''}`}
                    onClick={() => setSelectedTag('all')}
                >
                    All
                </button>
                {categories.map(category => (
                    <button
                        key={category.id}
                        className={`tag ${selectedTag === category.title ? 'selected' : ''}`}
                        onClick={() => setSelectedTag(category.title)}
                    >
                        {category.title.charAt(0).toUpperCase() + category.title.slice(1)}
                    </button>
                ))}
            </div>

            <div className="cards-container">
                {loading ? (
                    <Loader />
                ) : (
                    filteredProperties.map(property => (
                        <PropertyCard property={property} key={property.id} />
                    ))
                )}

            </div>
        </section>
    );
};

export default PropertyList;
