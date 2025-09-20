import api from "../../APIGateway";

export const LoginAPI = async (credentials: Object) => {
  const response = await api.post("/auth/login", credentials);
  return response.data;
};