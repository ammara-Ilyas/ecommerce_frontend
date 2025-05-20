"use client";

export const token = localStorage.getItem("token");
console.log("token in api call", token);

const users = localStorage.getItem("user");
export const user = JSON.parse(users);

console.log("user in api call", user);
