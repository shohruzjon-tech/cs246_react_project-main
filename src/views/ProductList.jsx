import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router";


export default function ProductList({ allproducts, match }) {
  const params = useParams();
  const cat = params.cat || "Animal";
  //Your code starts here
  const products = allproducts.filter(item=>item?.category===cat);
  //Your code ends here

  return (
    <>
      <div className="product center">
        {products?.map((product, i) => (
          <div key={product._id} className="card">
            <Link className="nav-link" to={"/product/detail/" + product._id}>
              <img className="medium" src={"/" + product.image} alt="product" />
            </Link>

            <div className="card-body">
              <Link className="nav-link" to={"/product/detail/" + product._id}>
                <h2>{product.name}</h2>
                 {params?.cat?<><h2>{product.category}</h2>
                <h2>{product.description}</h2>
                <h2 className="gold">{product.numReviews}</h2></>: undefined}
              </Link>
              <div className="price">${product.price}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
