import axios from "axios";

export const apiTamoJunto = axios.create({
	baseURL: "https://camp-tamojunto.herokuapp.com",
});
