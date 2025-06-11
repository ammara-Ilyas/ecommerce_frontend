const HOSTNAME = "https://ecommerce-apis-hl5w.onrender.com/api";
// const HOSTNAME = "http://localhost:5000/api";

export const callPrivateApi = async (endpoint, method, payload, token) => {
  const headers = {
    Accept: "application/json",
    Authorization: `Bearer ${token}`, // ✅ Correct way
  };

  let body = null;

  if (!(payload instanceof FormData)) {
    headers["Content-Type"] = "application/json";
    body = JSON.stringify(payload);
  } else {
    body = payload;
  }

  try {
    const response = await fetch(`${HOSTNAME}${endpoint}`, {
      method,
      headers,
      body: method !== "GET" ? body : undefined,
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw errorData;
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const callPublicApi = async (endpoint, method, payload) => {
  // console.log("data in api call", endpoint, method, payload);

  const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
  };

  const body = payload ? JSON.stringify(payload) : null;

  try {
    const response = await fetch(`${HOSTNAME}${endpoint}`, {
      method,
      headers,
      body: method !== "GET" ? body : undefined,
    });
    // console.log("response in public apis", response);

    if (!response.ok) {
      const errorData = await response.json();
      // console.log("error in public apis", errorData);

      throw errorData;
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};
