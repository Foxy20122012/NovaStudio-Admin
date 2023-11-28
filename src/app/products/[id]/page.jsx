import Buttons from "./Buttons";
import { conn } from "../../../libs/mysql";
import Navbar from "../../../components/Navbar"

async function loadProduct(productId) {
  const [data] = await conn.query("SELECT * FROM product WHERE id = ?", [
    productId,
  ]);
  return data;
}

async function ProductPage({ params }) {
  const product = await loadProduct(params.id);

  return (
    <>
    <Navbar/>
    <section className="flex justify-center items-center h-screen bg-gradient-to-r from-teal-500 to-cyan-500">
      <div className="flex w-11/12 max-w-4xl bg-white rounded-lg overflow-hidden shadow-xl">
        <div className="w-2/3">
          <img src={product.image} className="w-full h-full object-cover rounded-l-lg" alt="" />
        </div>
        <div className="w-1/3 p-8">
          <h3 className="text-4xl font-extrabold mb-4 text-gray-800">{product.name}</h3>
          <h4 className="text-5xl font-extrabold text-blue-500">${product.price.toFixed(2)}</h4>
          <p className="text-gray-600 mb-6">{product.description}</p>
          <Buttons productId={product.id} />
        </div>
      </div>
    </section>
    </>
  );
}

export default ProductPage;