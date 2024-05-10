import React from "react";
import { createBrowerRouter, RouterProvider } from "react-router-dom";
import { router } from "./routes/Routes";

const router = createBrowerRouter(router);
function App() {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
