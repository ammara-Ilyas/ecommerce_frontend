const HOSTNAME = "http://127.0.0.1:5000/api";

export const callPublicApi = async (endpoint, method, payload) => {
  console.log("data in api call", endpoint, method, payload);

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
    console.log("response in public apis", response);

    if (!response.ok) {
      const errorData = await response.json();
      console.log("error in public apis", errorData);

      throw errorData;
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};
