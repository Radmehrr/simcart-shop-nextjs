import axios from "axios";
import Cookies from "js-cookie";

const instance = axios.create({
  // baseURL: "https://simcart.iran.liara.run",
  baseURL: process.env.NEXT_PUBLIC_SIMCARTBAZAR_URL,
});

instance.interceptors.request.use((config: any) => {
  const token = Cookies.get("accessToken");

  if (token && typeof token == "string") {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const SWRfetcher = (url: any) => {
  return instance.get(url).then((res) => res);
};

export default instance;
