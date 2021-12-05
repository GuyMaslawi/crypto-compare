import NavRoutes from "./routes/NavRoutes";
import { Content } from "./AppStyle";
import Header from "./components/header/Header";

const App = () => {
  return (
      <>
          <Header />
          <Content>
              <NavRoutes />
          </Content>
      </>
  );
}

export default App;
