import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ProductContext } from '../contexts/ProductContext';
import { useContext } from 'react';
import ProductDetails from '../components/ProductDetails';

const ProductDetailsPage = () => {
  const { id } = useParams();
  const { allProducts, getProductById } = useContext(ProductContext);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    try {
      // First check if we can get the product directly from our context
      const foundProduct = getProductById(id);
      if (foundProduct) {
        setProduct(foundProduct);
        setLoading(false);
        return;
      }

      // If not found in context and products are loaded, set error
      if (allProducts && allProducts.length > 0) {
        setError(`Product with ID ${id} not found`);
        setLoading(false);
        return;
      }

      // Otherwise, try to fetch it directly (fallback)
      const fetchProductById = async () => {
        try {
          const response = await fetch(`https://fakestoreapi.com/products/${id}`);
          if (!response.ok) {
            throw new Error('Product not found');
          }
          const data = await response.json();
          setProduct(data);
        } catch (err) {
          setError(`Error fetching product: ${err.message}`);
        } finally {
          setLoading(false);
        }
      };

      fetchProductById();
    } catch (err) {
      setError(`Error: ${err.message}`);
      setLoading(false);
    }
  }, [id, allProducts, getProductById]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen" data-testid="product-details-loading">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8" data-testid="product-details-error">
        <div className="text-center">
          <h2 className="text-xl font-semibold text-red-600">Error</h2>
          <p className="mt-2">{error}</p>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8" data-testid="product-not-found">
        <div className="text-center">
          <h2 className="text-xl font-semibold">Product Not Found</h2>
          <p className="mt-2">The product you're looking for doesn't exist or has been removed.</p>
        </div>
      </div>
    );
  }

  return <ProductDetails product={product} />;
};

export default ProductDetailsPage;
