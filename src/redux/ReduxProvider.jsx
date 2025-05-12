"use client";
import { useEffect } from "react";
import { store } from "./store";
import { useDispatch, Provider } from "react-redux";
import { setCategories, setProducts, setBanners } from "./silice/ProductSlice";
function DataInitializer({
  categories,
  product,
  banners,
  cartsItems,
  children,
}) {
  const dispatch = useDispatch();

  useEffect(() => {
    if (categories) {
      console.log("categories data in Redux Provider", categories.categories);
      dispatch(setCategories(categories.categories));
    }
    if (product) {
      console.log("product data in Redux Provider", product.products);
      dispatch(setProducts(product.products));
    }
    if (banners) {
      console.log("banners data in Redux Provider", banners.banners);
      dispatch(setBanners(banners.banners));
    }
    if (cartsItems) {
      console.log("cartItem data in Redux Provider", banners.banners);
      dispatch(setBanners(cartsItems.cartItem));
    }
  }, []);

  return <>{children}</>;
}

function ReduxProviders({
  categories,
  product,
  banners,
  cartsItems,
  children,
}) {
  return (
    <Provider store={store}>
      <DataInitializer
        product={product}
        categories={categories}
        banners={banners}
        cartsItems={cartsItems}
      >
        {children}
      </DataInitializer>
    </Provider>
  );
}

export default ReduxProviders;
