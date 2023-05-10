import Presentation from "../../components/presentation";
import Particles from "../../components/particles";
import SelectArticles from "../../components/selectArticles";

import "./styles.css";

function Home() {
  return (
    <div className="test2">
      <div className="home__container">
        <Presentation />
      </div>
      <SelectArticles />
      <div className="test">
        <Particles />
      </div>
    </div>
  );
}

export default Home;