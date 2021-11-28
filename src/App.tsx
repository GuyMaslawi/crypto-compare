import NavRoutes from "./routes/NavRoutes";
import { Content } from "./AppStyle";
import Header from "./components/header/Header";

const App = () => {
  return (
      <div>
          <Header />
          <Content>
              <NavRoutes />
          </Content>
      </div>
  );
}

export default App;
