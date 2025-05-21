import { useCallback, useEffect } from "react";
import debounce from "lodash.debounce";

const useDebouncedInputHandler = (updateFunction, delay = 500) => {
  const debouncedUpdate = useCallback(
    debounce((name, value) => {
      updateFunction({ [name]: value });
    }, delay),
    [updateFunction]
  );

  useEffect(() => {
    return () => {
      debouncedUpdate.cancel();
    };
  }, [debouncedUpdate]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    console.log("e. target in debounce", e.target);

    const finalValue = type === "checkbox" ? checked : value;

    debouncedUpdate(name, finalValue);
  };

  return handleInputChange;
};

export default useDebouncedInputHandler;
