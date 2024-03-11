import { useGlobalState } from "../../context/GlobalStateContext";

const DataPeople = () => {
    const { handleFilterClick, filteredProducts } = useGlobalState(); // Se obtiene filteredProducts del contexto global
    return (
        <div className="bg-white m-16 rounded-md">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">Rutas y Datos</h2>
            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                {filteredProducts.map((product) => ( // Se utiliza filteredProducts en lugar de products
                    <div key={product.id} onClick={() => handleFilterClick(product.category)} className="group relative">
                        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                                <img src={product.imageSrc} className="h-full w-full object-cover object-center lg:h-full lg:w-full"/>
                        </div>
                        <div className="mt-4 flex justify-between">
                            <div>
                                <h3 className="text-sm text-gray-700">
                                <a href={`/people?category=${product.category}`}> {/* Se pasa la categoría como parámetro en la URL */}
                                <span aria-hidden="true" className="absolute inset-0" />
                                            {product.name}
                                        </a>
                                </h3>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            </div>
        </div>
    );
};

export default DataPeople;
