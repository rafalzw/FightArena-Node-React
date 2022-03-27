import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {WarriorStatsInput} from "./WarriorStatsInput";
import {WarriorNameInput} from "./WarriorNameInput";

export const CreateWarrior = () => {
    const navigate = useNavigate();

    const [form, setForm] = useState({
        name: '',
        power: 1,
        defence: 1,
        endurance: 1,
        agility: 1,
        totalPoints: null,
    })

    const [error, setError] = useState('')

    const totalPoints = ([...stats]) => stats.reduce((prev, curr) => prev - curr, 10);

    const toComponentAdded = (state) => navigate('/added', {state});

    const changeInput = (item, value) => (setForm({...form, [item]: value}));

    const submit = async e => {
        e.preventDefault();

        try {
            const res = await fetch("/create-warrior", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify(form)
            });
            if (!res.ok) {
                throw new Error(await res.json());
            }

            toComponentAdded(form.name)
        } catch (err) {
            setError(err.message)
        }
    }

    useEffect(() => {
        setForm({
                ...form,
                totalPoints: totalPoints([form.power, form.defence, form.agility, form.endurance]),
            }
        )
    }, [form.power, form.defence, form.agility, form.endurance]);

    return (
        <div className="container text-light">
            <h2>Add new Warrior:</h2>
            <form className="row g-3" onSubmit={submit}>

                <WarriorNameInput
                    name={'name'}
                    value={form.name}
                    changeName={changeInput}/>

                <div className="form-group col-md-12">
                    <p>Total stats points to
                        use: {form.totalPoints < 0 || form.totalPoints > 6 ? 'enter correct values!' : form.totalPoints}</p>
                </div>

                <WarriorStatsInput
                    name={'power'}
                    value={form.power}
                    totalPoints={form.totalPoints}
                    changeStats={changeInput}/>

                <WarriorStatsInput
                    name={'defence'}
                    value={form.defence}
                    totalPoints={form.totalPoints}
                    changeStats={changeInput}/>

                <WarriorStatsInput
                    name={'endurance'}
                    value={form.endurance}
                    totalPoints={form.totalPoints}
                    changeStats={changeInput}/>

                <WarriorStatsInput
                    name={'agility'}
                    value={form.agility}
                    totalPoints={form.totalPoints}
                    changeStats={changeInput}/>

                <div className="mt-5">
                    <button type="submit" className="btn btn-danger px-5">Create</button>
                </div>
            </form>
            {error ? (
                <div className="alert alert-danger mt-3 w-50">{error}</div>
            ) : null}
        </div>
    )
}