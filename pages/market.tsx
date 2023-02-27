import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import ProductCard from "@/components/ProductCard";

export default function Market() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Product 1",
      image: "/product1.jpg",
      description: "Lorem ipsum dolor sit amet.",
    },
    {
      id: 2,
      name: "Product 2",
      image: "/product2.jpg",
      description: "Lorem ipsum dolor sit amet.",
    },
    {
      id: 3,
      name: "Product 3",
      image: "/product3.jpg",
      description: "Lorem ipsum dolor sit amet.",
    },
    {
      id: 4,
      name: "Product 4",
      image: "/product4.jpg",
      description: "Lorem ipsum dolor sit amet.",
    },
    {
      id: 5,
      name: "Product 5",
      image: "/product5.jpg",
      description: "Lorem ipsum dolor sit amet.",
    },
    {
      id: 6,
      name: "Product 6",
      image: "/product6.jpg",
      description: "Lorem ipsum dolor sit amet.",
    },
    {
      id: 7,
      name: "Product 7",
      image: "/product7.jpg",
      description: "Lorem ipsum dolor sit amet.",
    },
    {
      id: 8,
      name: "Product 8",
      image: "/product8.jpg",
      description: "Lorem ipsum dolor sit amet.",
    },
    {
      id: 9,
      name: "Product 9",
      image: "/product9.jpg",
      description: "Lorem ipsum dolor sit amet.",
    },
  ]);

  return (
    <>
      <Head>
        <title>Market</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <h1 className="text-center mb-4">Market</h1>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {products.map((product) => (
            <div className="col" key={product.id}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
function ProductCard({ product }:any) {
  return (
    <div className="card h-100">
      <Image
        src={product.image}
        alt={product.name}
        width={300}
        height={200}
        className="card-img-top"
      />
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">{product.description}</p>
        <a href="#" className="btn btn-primary">
          Buy now
        </a>
      </div>
    </div>
  );
}
