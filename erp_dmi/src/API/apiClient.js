import axios from 'axios';

// Define base URL for your API
const baseURL = 'https://a8e4-2a01-cb10-d4-2b00-de22-5e32-70d3-8e8a.ngrok-free.app';

// User-related operations
export const getUsers = () => axios.get(`${baseURL}/user`);
export const createUser = (user) => axios.post(`${baseURL}/user`, user);
export const getUserById = (id) => axios.get(`${baseURL}/user/${id}`);
export const updateUser = (id, user) => axios.put(`${baseURL}/user/${id}`, user);
export const deleteUser = (id) => axios.delete(`${baseURL}/user/${id}`);
export const getUserByGraulandeId = (id) => axios.get(`${baseURL}/user/graulande/${id}`);
export const authenticateUser = (user) => axios.post(`${baseURL}/user/auth`, user);


// Medical Act-related operations
export const getMedicalActs = () => axios.get(`${baseURL}/medical_act`);
export const createMedicalAct = (medicalAct) => axios.post(`${baseURL}/medical_act`, medicalAct);
export const getMedicalActById = (id) => axios.get(`${baseURL}/medical_act/${id}`);
export const updateMedicalAct = (id, medicalAct) => axios.put(`${baseURL}/medical_act/${id}`, medicalAct);
export const deleteMedicalAct = (id) => axios.delete(`${baseURL}/medical_act/${id}`);

// Medical Act Result-related operations
export const getMedicalActResults = (id) => axios.get(`${baseURL}/medical_act/${id}/results`);
export const createMedicalActResult = (id, medicalActResult) => axios.post(`${baseURL}/medical_act/${id}/results`, medicalActResult);
export const getMedicalActResultById = (id, resultId) => axios.get(`${baseURL}/medical_act/${id}/results/${resultId}`);
export const updateMedicalActResult = (id, resultId, medicalActResult) =>
    axios.put(`${baseURL}/medical_act/${id}/results/${resultId}`, medicalActResult);
export const deleteMedicalActResult = (id, resultId) => axios.delete(`${baseURL}/medical_act/${id}/results/${resultId}`);


//Mutuel related operations
export const getMutuelles = () => axios.get(`${baseURL}/mutuelle`);

//Hospital related operations
export const getHospitals = () => axios.get(`${baseURL}/hospital`);