import {useEffect, useState} from "react";

export const CreateWarrior = () => {
    const [form, setForm] = useState({
        name: '',
        power: 0,
        defence: 0,
        endurance: 0,
        agility: 0,
    })

    const totalPoints = ([...stats]) => stats.reduce((prev, curr) => prev - curr, 10)

    const submit = e => {
        e.preventDefault();
        console.log('Działa', form)
    }

    return (
        <div className="container text-light">
            <h2>Add new Warrior:</h2>
            <form className="row g-3" onSubmit={submit}>
                <div className="form-group col-6">
                    <label htmlFor="name" className="col-sm-2 col-form-label">Name</label>
                    <div className="col-sm-10">
                        <input
                            value={form.name}
                            onChange={e => setForm({...form, name: e.target.value})}
                            type="text"
                            minLength="3"
                            maxLength="25"
                            name="name"
                            className="form-control"/>
                    </div>
                </div>
                <div className="form-group col-md-12">
                    <p>Total stats points to use: {totalPoints([form.power, form.defence, form.agility, form.endurance])}</p>
                </div>
                <div className="form-group col-md-2">
                    <label htmlFor="power" className="col-sm-2 col-form-label">Power:</label>
                    <div className="col-sm-10">
                        <input required
                               value={form.power}
                               onChange={e => setForm({...form, power: e.target.value})}
                               min="0"
                               max={totalPoints([form.power, form.defence, form.agility, form.endurance]) + form.power}
                               type="number"
                               name="power"
                               className="form-range bg-light"/>
                    </div>
                </div>
                <div className="form-group col-md-2">
                    <label htmlFor="defence" className="col-sm-2 col-form-label">Defence:</label>
                    <div className="col-sm-10">
                        <input required
                               value={form.defence}
                               onChange={e => setForm({...form, defence: e.target.value})}
                               min="0"
                               max={totalPoints([form.power, form.defence, form.agility, form.endurance]) + form.defence}
                               type="number"
                               name="defence"
                               className="form-range bg-light"/>
                    </div>
                </div>
                <div className="form-group col-md-2">
                    <label htmlFor="endurance" className="col-sm-2 col-form-label">Endurance:</label>
                    <div className="col-sm-10">
                        <input required
                               value={form.endurance}
                               onChange={e => setForm({...form, endurance: e.target.value})}
                               min="0"
                               max={totalPoints([form.power, form.defence, form.agility, form.endurance]) + form.endurance}
                               type="number"
                               name="endurance"
                               className="form-range bg-light"/>
                    </div>
                </div>
                <div className="form-group col-md-2">
                    <label htmlFor="agility" className="col-sm-2 col-form-label">Agility:</label>
                    <div className="col-sm-10">
                        <input required
                               value={form.agility}
                               onChange={e => setForm({...form, agility: e.target.value})}
                               min="0"
                               max={totalPoints([form.power, form.defence, form.agility, form.endurance]) + form.agility}
                               type="number"
                               name="agility"
                               className="form-range bg-light"/>
                    </div>
                </div>
                <div className="form-group row d-flex justify-content-center">
                    <div className="mt-5">
                        <button type="submit" className="btn btn-danger px-5">Create</button>
                    </div>
                </div>
            </form>
        </div>
    )
}
