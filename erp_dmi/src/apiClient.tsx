import axios from 'axios';
import {UserDTO} from "./DTO/UserDTO";
import {MedicalActDTO} from "./DTO/DMIDTO";
import {MedicalActResultDTO} from "./DTO/ResultsDto";

// base Url for the API
const baseURL = 'https://your-api-base-url.com';

// User-related operations API calls
export const getUsers = () => axios.get(`${baseURL}/user`);
export const createUser = (user: UserDTO) => axios.post(`${baseURL}/user`, user);
export const getUserById = (id) => axios.get(`${baseURL}/user/${id}`);
export const updateUser = (id: any, user: UserDTO) => axios.put(`${baseURL}/user/${id}`, user);
export const deleteUser = (id) => axios.delete(`${baseURL}/user/${id}`);
export const getUserByGraulandeId = (id) => axios.get(`${baseURL}/user/graulande/${id}`);
export const authenticateUser = (user: UserDTO) => axios.post(`${baseURL}/user/auth`, user);


// Medical Act-related operations API calls
export const getMedicalActs = () => axios.get(`${baseURL}/medical_act`);
export const createMedicalAct = (medicalAct: MedicalActDTO) => axios.post(`${baseURL}/medical_act`, medicalAct);
export const getMedicalActById = (id) => axios.get(`${baseURL}/medical_act/${id}`);
export const updateMedicalAct = (id, medicalAct: MedicalActDTO) => axios.put(`${baseURL}/medical_act/${id}`, medicalAct);
export const deleteMedicalAct = (id) => axios.delete(`${baseURL}/medical_act/${id}`);

// Medical Act Result-related operations API calls
export const getMedicalActResults = (id) => axios.get(`${baseURL}/medical_act/${id}/results`);
export const createMedicalActResult = (id, medicalActResult: MedicalActResultDTO) => axios.post(`${baseURL}/medical_act/${id}/results`, medicalActResult);
export const getMedicalActResultById = (id, resultId) => axios.get(`${baseURL}/medical_act/${id}/results/${resultId}`);
export const updateMedicalActResult = (id, resultId, medicalActResult: MedicalActResultDTO) =>
    axios.put(`${baseURL}/medical_act/${id}/results/${resultId}`, medicalActResult);
export const deleteMedicalActResult = (id, resultId) => axios.delete(`${baseURL}/medical_act/${id}/results/${resultId}`);
