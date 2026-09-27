import { useParams } from "react-router-dom";
import Products from "../data/Products";

const Search = () => {
  const { keyword } = useParams();

  const filteredProducts = Products.filter((item) =>
    item.name.toLowerCase().includes(keyword.toLowerCase())
  );

  return (
    <div>
      {filteredProducts.map((item) => (
        <h2 key={item.id}>{item.name}</h2>
      ))}
    </div>
  );
};

export default Search;