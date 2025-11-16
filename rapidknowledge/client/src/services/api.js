import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

// GET all documents
export const getDocuments = () => API.get("/").then(res => res.data);

// ADD document
export const addDocument = (doc) => API.post("/", doc).then(res => res.data);

// DELETE document
export const deleteDocument = (id) => API.delete(`/${id}`).then(res => res.data);

export default API;
