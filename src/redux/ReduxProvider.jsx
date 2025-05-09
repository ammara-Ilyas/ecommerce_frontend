"use client";
import { store } from "./store";
import { useDispatch, Provider } from "react-redux";

import { useEffect } from "react";

function DataInitializer({ children }) {
  const dispatch = useDispatch();

  return <>{children}</>;
}

function ReduxProviders({ children }) {
  return (
    <Provider store={store}>
      <DataInitializer>{children}</DataInitializer>
    </Provider>
  );
}

export default ReduxProviders;
