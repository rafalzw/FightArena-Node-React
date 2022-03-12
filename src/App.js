import './App.css';
import {Header} from "./components/Header";
import {Route, Routes} from "react-router-dom";
import {Home} from "./pages/Home";
import {CreateWarrior} from "./pages/CreateWarrior/CreateWarrior";
import {HallOfFame} from "./pages/HallOfFame/HallOfFame";
import {FightArena} from "./pages/FightArena/FightArena";


function App() {
    return (
        <div className="App overflow-auto">
            <div className="container-fluid container-md">
                <Header/>
                <div className="container container-md text-start">
                    <Routes>
                        <Route path="/create" element={<CreateWarrior/>}/>
                        <Route path="/fight-arena" element={<FightArena/>}/>
                        <Route path="/hall-of-fame" element={<HallOfFame/>}/>
                        <Route path="/" element={<Home/>}/>
                    </Routes>
                </div>
            </div>
        </div>
    );
}

export default App;
