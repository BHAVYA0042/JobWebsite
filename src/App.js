
import Faq from "./components/faq";
import {Routes,Route} from "react-router-dom"
import Dashboard from "./components/dashboard";
import Layout from "./layout/wrapper";
import Profile from "./components/userProfile";
import Account from "./components/account";
import Landing from "./components/landing";

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<Landing />}/>
          <Route path="/faqs" element={<Faq />}/>
          <Route path="/jobs" element={<Account />}/>
          <Route path="/internships" element={<Account />}/>
          <Route path="/profile/*" element={<Profile />}>
            <Route path="*" element={<Account />}/>
            <Route path="dashboard" element={<Dashboard />}/>
          </Route>
        
        </Routes>
      </Layout>

     
    </div>
  );
}

export default App;
