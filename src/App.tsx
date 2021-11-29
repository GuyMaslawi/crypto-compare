import NavRoutes from "./routes/NavRoutes";
import { Content } from "./AppStyle";
import Header from "./components/header/Header";
import CryptoProvider from "./Context";

const App = () => {
  return (
      <>
          <Header />
          <Content>
              <CryptoProvider>
                  <NavRoutes />
              </CryptoProvider>
          </Content>
      </>
  );
}

export default App;
