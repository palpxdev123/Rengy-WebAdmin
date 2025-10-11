import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthProvider } from "../Utils/AuthProvider";
import "./App.css";
import RouteConfiguration from "./Route";
import { ConfigProvider } from "antd";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ConfigProvider
          theme={{
            token: {
              fontFamily: "'General Sans', sans-serif",
            },
          }}
        >
          <AuthProvider>
            <RouteConfiguration />
          </AuthProvider>
        </ConfigProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
