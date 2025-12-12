import "./Index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { Layout } from "./Layout";
import { Teori } from "./pages/Teori";
import { Opgaver } from "./pages/Opgaver";
import { Story } from "./pages/Story";
import Teori_Int from "./pages/Subpages/Teori_Int";
import Teori_Bool from "./pages/Subpages/Teori_Bool";
import Teori_If from "./pages/Subpages/Teori_If";
import Opgaver_Bool from "./pages/Subpages/Opgaver_Bool";
import Opgaver_Int from "./pages/Subpages/Opgaver_Int";
import Opgaver_If from "./pages/Subpages/Opgaver_If";
import Story_Intro from "./pages/Subpages/Story_Intro";
import Story_Int from "./pages/Subpages/Story_Int";
import Story_Bool from "./pages/Subpages/Story_Bool";
import Story_If from "./pages/Subpages/Story_If";
import Intro from "./pages/Intro";
import Outro from "./pages/Outro";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<Layout />}>
          <Route path="Intro" element={<Intro />} />
          <Route path="Outro" element={<Outro />} />

          <Route path="Teori" element={<Teori />}>
            <Route path="" element={<Teori_Int />} />
            <Route path="Int" element={<Teori_Int />} />
            <Route path="Bool" element={<Teori_Bool />} />
            <Route path="If" element={<Teori_If />} />
          </Route>

          <Route path="Opgaver" element={<Opgaver />}>
            <Route path="" element={<Opgaver_Int />} />
            <Route path="Int" element={<Opgaver_Int />} />
            <Route path="Bool" element={<Opgaver_Bool />} />
            <Route path="If" element={<Opgaver_If />} />
          </Route>

          <Route path="/Historie" element={<Story />}>
            <Route path="" element={<Story_Intro />} />
            <Route path="Int" element={<Story_Int />} />
            <Route path="Bool" element={<Story_Bool />} />
            <Route path="If" element={<Story_If />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
