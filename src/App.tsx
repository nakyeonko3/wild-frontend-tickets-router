import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import Header from "./components/Header";
import Main from "./components/Main";

export default function App() {
  return (
    <>
      <div>
        <Header />
        <Main />
      </div>
      <ReactQueryDevtools initialIsOpen={true} />
    </>
  );
}
