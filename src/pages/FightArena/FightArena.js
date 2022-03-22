import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {SelectWarrior} from "./SelectWarrior/SelectWarrior";

export function FightArena() {
    const [data, setData] = useState([]);
    const [warrior1, setWarrior1] = useState('1');
    const [warrior2, setWarrior2] = useState('2');

    const navigate = useNavigate();

    useEffect(async () => {
        const res = await fetch("/fight-arena")
        const data = await res.json()
        setData(data);
    }, []);

    const toComponentFightDetails = (state) => navigate('/fight-details', {state})

    const submit = async e => {
        e.preventDefault();
        try {
            const res = await fetch("/fight-arena/fight", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify({warrior1, warrior2})
            });
            if (!res.ok) {
                throw new Error(await res.json());
            }

            const content = await res.json();
            toComponentFightDetails(content)
        } catch (err) {
            // setErrors({...errors, BE: err.message})
        }
    }

    const warriorsList = [...data].map(el => (
        <SelectWarrior
            key={String(el.id)}
            id={el.id}
            name={el.name}
            power={el.power}
            defence={el.defence}
            endurance={el.endurance}
            agility={el.agility}
        />
    ))

    return (
        <div className="container text-light">
            <h2 className="mb-5">Select Warriors</h2>
            <form className="row g-3" onSubmit={submit}>
                <div className="container d-flex justify-content-evenly">
                    <select
                        className="form-select w-25"
                        // aria-label="warrior1"
                        name="warrior1"
                        onChange={e => setWarrior1(e.target.value) }>
                        <option  value='1'>Select Warrior 1</option>
                        {warriorsList}
                    </select>
                    <div className="p-2">VS</div>
                    <select
                        className="form-select w-25"
                        // aria-label="warrior2"
                        name="warrior2"
                        onChange={e => setWarrior2(e.target.value)}>
                        <option value='2'>Select Warrior 2</option>
                        {warriorsList}
                    </select>
                </div>
                <div className="w-100 d-flex flex-column align-items-center justify-content-center mt-5">
                    <button
                        type="submit"
                        className="btn btn-danger px-5 btn-lg w-25 mb-2"
                        disabled={warrior1 === warrior2 || warrior1 === '1' || warrior2 ==='2'}
                    >Begin the fight!
                    </button>
                    {warrior1 === warrior2 && <div className="alert alert-danger w-25">Choose two different warriors!</div>}
                </div>
            </form>
        </div>
    )
}