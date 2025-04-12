import Header from "./Components/Header";
import Products from "./Components/Products";
import { products } from "./Data";

function App() {
  return (
    <div className="container mb-4">
      <Header />
      {products?.map((product) => (
        <Products key={product.id} urunler={product} />
      ))}
    </div>
  );
}

export default App;
