import Presentation from "../../components/presentation";
import Particles from "../../components/particles";
import "./styles.css";

function Home() {
  return (
    <div className="test2">
      <div className="home__container">
        <Presentation />
      </div>
      <div className="home__box-contact">
        <div className="home__box-info bg1">
          <h3 className="home__box-h3">Plantas para começar sua Urban Jungle.</h3>
        </div>
        <div className="home__box-info bg2">
          <h3 className="home__box-h3">Faça do seu Home Office mais agradável.</h3>
        </div>
        <div className="home__box-info bg3">
          <h3 className="home__box-h3">Plantas para cultivar na água!</h3>
        </div>
      </div>
      <div className="test">
        <Particles />
      </div>
    </div>
  );
}

export default Home;
