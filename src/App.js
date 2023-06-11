import { Provider } from "react-redux";
import BlogsContent from "./component/BlogsContent";
import Footer from "./component/Footer";
import Navbar from "./component/Navbar";
import Search from "./component/Search";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <Search />

      <BlogsContent />
      <Footer />
    </Provider>
  );
}

export default App;
