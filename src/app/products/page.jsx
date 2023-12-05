import ProductCard from '../../components/ProductCard';
import { conn } from '../../libs/mysql'
import axios from 'axios';
import Navbar from '../../components/Navbar';

async function loadProducts(){
  const { data }  = await axios.get('http://localhost:3000/api/products');
  return data;
}

 async function ProductsPage  ()  {
  const products = await loadProducts();
  
  return (
    <div>
    <Navbar/>
    <section className='container mx-auto mt-16 px-8'> {/* mt-16 proporciona espacio para la barra de navegación */}
      <div className='grid gap-4 grid-cols-4'>
        {products.map(product => (
          <ProductCard product={product} key={product.id}/>
        ))}
      </div>
    </section>
  </div>
  );
};

export default ProductsPage;

