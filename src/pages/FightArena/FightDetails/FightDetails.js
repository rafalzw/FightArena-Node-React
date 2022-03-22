import {useLocation} from "react-router-dom";
import {WarriorProfile} from "./WarriorProfile/WarriorProfile";

export const FightDetails = () => {
    const {state} = useLocation();

    const result = [...state.fightDetails].map(el => (
        <tr>
            <th className="fw-normal" scope="row">{el}</th>
        </tr>
    ))

    return (
        <div className="container text-light">
            <h2 className="text-center">Flow of the fight</h2>
            <div className="d-flex justify-content-evenly mt-4">
                <WarriorProfile
                    name={state.warrior1.name}
                    power={state.warrior1.power}
                    defence={state.warrior1.defence}
                    endurance={state.warrior1.endurance}
                    agility={state.warrior1.agility}
                />

                <table className="table table-dark table-striped table-bordered w-50 opacity-75">
                    <tbody>
                    {result}
                    </tbody>
                </table>

                <WarriorProfile
                    name={state.warrior2.name}
                    power={state.warrior2.power}
                    defence={state.warrior2.defence}
                    endurance={state.warrior2.endurance}
                    agility={state.warrior2.agility}
                />
            </div>
        </div>
    )
}