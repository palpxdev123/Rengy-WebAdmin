import axios from "axios";

const api = axios.create({
  baseURL: `${import.meta.env.VITE_API_BASE_URL}`,

});

// Add access token before request
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("accessToken"); // or AsyncStorage for RN
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Handle 401 and refresh token
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      if (error.config.__isRetryRequest) {
        return Promise.reject(error);  // Do not retry if already attempted
      }

      error.config.__isRetryRequest = true;
      try {
        // Get refresh token
        const refreshToken = localStorage.getItem("refreshToken");

        // Call refresh API
        const res = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/auth/refresh-token`, {
          refreshToken:refreshToken,
        });

        const newAccessToken = res?.data?.data?.[0]?.accessToken;
        

        // Save new token
      localStorage.setItem("accessToken", newAccessToken);

        // Retry the original request
        error.config.headers.Authorization = `Bearer ${newAccessToken}`;
        return api(error.config);
      } catch (err) {
        // Refresh also failed → logout
        localStorage.clear();
        window.location.href = "/login";
      }
    }
    return Promise.reject(error);
  }
);

export default api;
