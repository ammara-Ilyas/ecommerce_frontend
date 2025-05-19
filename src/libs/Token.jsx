"use client";

export const token = localStorage.getItem("token");
console.log("token in api call", token);

export const user = localStorage.getItem("user");
console.log("user in api call", user);
