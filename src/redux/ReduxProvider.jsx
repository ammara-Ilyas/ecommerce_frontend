"use client";
import { useEffect } from "react";
import { store } from "./store";
import { useDispatch, Provider } from "react-redux";
import {
  setCategories,
  setProducts,
  setBanners,
  setFilteredProducts,
} from "./silice/ProductSlice";
import { setCartItems } from "./silice/CartSlice";
import { setWishList } from "./silice/WishListSlice";
import { callPrivateApi } from "@/libs/CallApis";
import { userId } from "@/libs/Token";
function DataInitializer({
  categories,
  product,
  banners,

  children,
}) {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const cartRes = await callPrivateApi(`/cart/${userId}`, "GET");
        console.log("res in cartRes list ", cartRes);
        if (cartRes) {
          console.log("cartItem data in Redux Provider", cartRes.cartItems);
          dispatch(setCartItems(cartRes.cartItems));
        }
      } catch (error) {
        console.error("Cart fetch failed:", error);
      }
      try {
        const wishlistRes = await callPrivateApi(`/wish/${userId}`, "GET");
        console.log("res in wishlistRes list ", wishlistRes);

        if (wishlistRes) {
          console.log("wishlist data in Redux Provider", wishlistRes.wishlist);
          dispatch(setWishList(wishlistRes.wishlist));
        }
      } catch (error) {
        console.error("Cart fetch failed:", error);
      }
    };
    fetchData();
  }, []);
  useEffect(() => {
    if (categories) {
      console.log("categories data in Redux Provider", categories.categories);
      dispatch(setCategories(categories.categories));
    }
    if (product) {
      console.log("product data in Redux Provider", product.products);
      dispatch(setProducts(product.products));
      dispatch(setFilteredProducts(product.products));
    }
    if (banners) {
      console.log("banners data in Redux Provider", banners.banners);
      dispatch(setBanners(banners.banners));
    }
  }, []);

  return <>{children}</>;
}

function ReduxProviders({
  categories,
  product,
  banners,
  cartsItems,
  wishlistItems,
  children,
}) {
  return (
    <Provider store={store}>
      <DataInitializer
        product={product}
        categories={categories}
        banners={banners}
        cartsItems={cartsItems}
        wishlistItems={wishlistItems}
      >
        {children}
      </DataInitializer>
    </Provider>
  );
}

export default ReduxProviders;
