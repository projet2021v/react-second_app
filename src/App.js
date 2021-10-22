import './App.css';
import Tableau from './composants/comp_tableau';
import Titre from './composants/comp_titre';

function App() {

  const titrePage = "MON TITRE";
  const c1Page = "tcol01";
  const c2Page = "tcol02";
  const c3Page = "tcol03";

  return (
    <div>
      <Titre titre = {titrePage}/>
      <Tableau
        c1 = {c1Page}
        c2 = {c2Page}
        c3 = {c3Page}
      />     
    </div>
  );
}

export default App;
