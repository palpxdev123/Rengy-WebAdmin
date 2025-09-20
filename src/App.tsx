import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthProvider } from "../Utils/AuthProvider";
import "./App.css";
import RouteConfiguration from "./Route";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <RouteConfiguration />
        </AuthProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
