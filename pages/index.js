import { useEffect, useState } from 'react';
import axios from 'axios'
import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import Product from '../components/product';

const API_URL = `http://localhost:3000`;

const Home = () => {

  const [products, setProducts] = useState([]);

  const router = useRouter();

  useEffect(() => {

    async function getProducts() {
      const data = await axios.get(`${API_URL}/api/products`);
      setProducts(data.data);
    }

    getProducts();
  }, [])

  return (
    <Layout>
      <main>
        {/* {JSON.stringify(products)} */}
        <section className='my-4 p-4 grid grid-cols-3 gap-6 lg:grid-cols-4 '>
          {
            products && products.length > 0 && products.map((product) => (
              <Product
                key={product.id}
                {...product}
              />
            ))
          }
        </section>
      </main>
      <footer>Footer</footer>
    </Layout>
  )
}

export default Home;
