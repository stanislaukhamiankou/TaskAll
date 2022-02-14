import axios from "axios";

const apiClient = () => {
	const axiosInstance = axios.create({
		baseURL: 'https://jsonplaceholder.typicode.com/',
		responseType: "json",
	});

	return axiosInstance;
};

export default apiClient;