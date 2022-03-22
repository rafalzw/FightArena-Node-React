import './App.css';
import {Header} from "./components/Header";
import {Route, Routes} from "react-router-dom";
import {Home} from "./pages/Home";
import {CreateWarrior} from "./pages/CreateWarrior/CreateWarrior";
import {HallOfFame} from "./pages/HallOfFame/HallOfFame";
import {FightArena} from "./pages/FightArena/FightArena";
import {Added} from "./pages/CreateWarrior/Added";
import {FightDetails} from "./pages/FightArena/FightDetails/FightDetails";

export const App = () => (
    <div className="App overflow-auto">
        <div className="container-fluid container-md">
            <Header/>
            <div className="container container-md text-start">
                <Routes>
                    <Route path="/create-warrior" element={<CreateWarrior/>}/>
                    <Route path="/added" element={<Added/>}/>
                    <Route path="/fight-arena" element={<FightArena/>}/>
                    <Route path="/fight-details" element={<FightDetails/>}/>
                    <Route path="/hall-of-fame" element={<HallOfFame/>}/>
                    <Route path="/" element={<Home/>}/>
                </Routes>
            </div>
        </div>
    </div>
);