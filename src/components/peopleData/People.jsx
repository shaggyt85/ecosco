import { useGlobalState } from "../../context/GlobalStateContext";
import { useEffect, useState } from "react";

const People = () => {
    const { filteredProducts } = useGlobalState();
    const [filteredCategory, setFilteredCategory] = useState(null);

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const categoryParam = urlParams.get('category'); // Obtiene la categoría de la URL
        if (categoryParam && filteredProducts && filteredProducts.length > 0) {
            const category = filteredProducts.find(product => product.category.toLowerCase() === categoryParam.toLowerCase());
            if (category) {
                // Establece la categoría filtrada
                setFilteredCategory(category);
            }
        }
    }, [filteredProducts]);

    return (
        <div className="m-16">
            {filteredCategory ? (
                <div>
                    <h2>{filteredCategory.category}</h2>
                    <ul>
                        {filteredCategory.streets && filteredCategory.streets.length > 0 ? (
                            filteredCategory.streets.map((street) => (
                                <li key={street.id}>
                                    Portal: {street.portal}, Apto: {street.apto}, DNI: {street.dni}, Citibox: {street.citibox}
                                </li>
                            ))
                        ) : (
                            <li>No hay calles disponibles</li>
                        )}
                    </ul>
                </div>
            ) : (
                <p>No hay productos filtrados</p>
            )}
        </div>
    );
};

export default People;
