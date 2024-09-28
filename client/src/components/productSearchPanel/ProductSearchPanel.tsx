import { XMarkIcon } from "@heroicons/react/24/solid";
import React, { useEffect, useRef, useState } from "react";
import ProductCard from "../productCard/ProductCard";
import Button from "../button/Button";
import axios from "axios";
import { Product } from "../../types";

const ProductSearchPanel = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [search, setSearch] = useState<string>("");
  const [selectedProducts, setSelectedProducts] = useState<
    Map<number, { name: string; quantity: number }>
  >(new Map());

  useEffect(() => {
    axios
      .get("http://localhost:3300/api/products")
      .then(({ data }) => {
        console.log(data);
        handleProductFilter(search, data.products);
      })
      .catch((e) => {
        console.log({ error: e });
      });

    setSelectedProducts(selectedProducts);
  }, [search, selectedProducts]);

  const handleProductFilter = (search: string, products: Product[]) => {
    if (search.length > 0) {
      setProducts(
        products.filter((product) =>
          product.name.toLowerCase().includes(search)
        )
      );
    } else {
      setProducts(products);
    }
  };

  const handleSelectProducts = (
    product: { id: number; name: string },
    operation: "add" | "delete"
  ) => {
    setSelectedProducts((prevSelectedProducts) => {
      const newSelectedProducts = new Map(prevSelectedProducts);

      if (
        prevSelectedProducts.get(product.id)?.quantity === 1 &&
        operation === "delete"
      ) {
        newSelectedProducts.delete(product.id);
      } else {
        newSelectedProducts.set(product.id, {
          name: product.name,
          quantity:
            (prevSelectedProducts.get(product.id)?.quantity || 0) +
            (operation === "add" ? 1 : -1),
        });
      }

      return newSelectedProducts;
    });

    console.log(Array.from(selectedProducts));
  };

  return (
    <div className="absolute p-4 bg-white top-0 right-0 w-full md:max-w-[50%] h-screen overflow-x-hidden overflow-y-auto">
      <div className="flex items-center justify-between ">
        <h2 className="text-2xl font-bold">List Products</h2>
        <button>
          <XMarkIcon width={32} />
        </button>
      </div>
      <div className="h-max p-4 mt-4">
        <input
          type="text"
          className="w-full border p-2 rounded-md focus:border-white"
          placeholder="Search products..."
          onChange={(e) => {
            setSearch(e.target.value.toLowerCase());
          }}
        />
        {selectedProducts ? (
          <div className="flex flex-col py-2">
            <p className="font-bold">Selected Products</p>
            <div className="flex flex-wrap items-center gap-2">
              {Array.from(selectedProducts.entries()).map(
                ([id, { name, quantity }]) => (
                  <button
                    className="flex items-center gap-1 cursor-pointer  border-4 p-2 px-8 rounded-sm"
                    onClick={() =>
                      handleSelectProducts({ id: id, name: name }, "delete")
                    }
                  >
                    <span>
                      {name} <strong>{quantity}</strong>
                    </span>
                  </button>
                )
              )}
            </div>
          </div>
        ) : null}
        <div className="flex flex-col gap-2 h-full max-h-screen mt-4 overflow-y-auto px-2">
          {products.map((product, i) => (
            <ProductCard
              key={i}
              onClick={() => handleSelectProducts(product, "add")}
              {...{ ...product, price: Number(product.price) }}
            />
          ))}
        </div>
      </div>
      <div className="flex px-4 py-2 bg-white w-full bottom-0 items-center justify-between ">
        <h2 className="font-bold">Save all selected products?</h2>
        <Button text="Save" onClick={() => {}} />
      </div>
    </div>
  );
};

export default ProductSearchPanel;
