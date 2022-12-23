import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import App from "./App";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      {/* <Route path='contact' element={<Contact />} />
      <Route
        path='dashboard'
        element={<Dashboard />}
        loader={({ request }) =>
          fetch("/api/dashboard.json", {
            signal: request.signal,
          })
        }
      />
      <Route element={<AuthLayout />}>
        <Route path='login' element={<Login />} loader={redirectIfUser} />
        <Route path='logout' />
      </Route> */}
    </Route>
  )
);

export default router;
