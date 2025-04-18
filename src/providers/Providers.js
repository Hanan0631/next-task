"use client"

import store from "@/features/store";
import { Provider } from "react-redux";

function Providers({ children }) {
  return <Provider store={store}>{children}</Provider>;
}

export default Providers;
