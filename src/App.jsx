import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductPage from "../src/pages/Product/ProductPage";
import { UserProvider } from "../src/context/UserContext";
import ProductDetail from "../src/pages/ProductDetail/ProductDetail";
import HookForm from "../src/pages/HookForm/HookForm";
import ReactForm from "../src/pages/ReactForm/ReactForm";
import PostApp from "../src/pages/PostApp/PostApp";

function App() {
  return (
    <>
      <BrowserRouter>
        <UserProvider>
          <Routes>
            <Route path="/" element={<ProductPage />} />
            <Route path="/products/:slug" element={<ProductDetail />} />
            <Route path="*" element={<h1 className="flex w-full h-full text-center items-center justify-center text-4xl text-pink-600">NOT FOUND PAGE.</h1>} />
            <Route path="/hookform" element={<HookForm />} />
            <Route path="/reactform" element={<ReactForm />} />
            <Route path="/postapp" element={<PostApp />} />
          </Routes>
        </UserProvider>
      </BrowserRouter>
    </>
  );
}

export default App;

// Menghindari Prop drilling dengan HOC Higher Order Component
// const parentComponent = () => {
//   const data = 'celerates'
//   return <>
//       <MyCard>
//           <MyPhoto data={data} />
//       </MyCard>
//   </>
// }

// const MyCard = ({children}) => {
//   return <>
//           <p>Text 1</p>
//           {children}
//       </>
// }

// const MyPhoto = ({photo}) => {
//   return <>
//       <img src={photo} alt="" />
//   </>
// }
