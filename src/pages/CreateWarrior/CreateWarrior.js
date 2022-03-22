import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

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

    const [errors, setErrors] = useState({
        name: '',
        power: '',
        defence: '',
        endurance: '',
        agility: '',
        backend: '',
    });

    const nameValidation = (name) => (name.trim().length < 3 || name.length > 25);
    const statsValidation = (value) => (value < 1 || value > 7);

    const totalPoints = ([...stats]) => stats.reduce((prev, curr) => prev - curr, 10)

    const toComponentAdded = (state) => navigate('/added', {state})

    // const buttonDisabled = Object.values(errors).filter(val => val).length;

    const submit = async e => {
        e.preventDefault();
        nameValidation(form.name)

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
            setErrors({...errors, backend: err.message})
        }
    }

    useEffect(() => statsValidation(form.power) ? setErrors({
            ...errors,
            power: 'Incorrect value'
        }) : setErrors({...errors, power: ''})
        , [form.power])

    useEffect(() => statsValidation(form.defence) ? setErrors({
            ...errors,
            defence: 'Incorrect value'
        }) : setErrors({...errors, defence: ''})
        , [form.defence])

    useEffect(() => statsValidation(form.agility) ? setErrors({
            ...errors,
            agility: 'Incorrect value'
        }) : setErrors({...errors, agility: ''})
        , [form.agility])

    useEffect(() => statsValidation(form.endurance) ? setErrors({
            ...errors,
            endurance: 'Incorrect value'
        }) : setErrors({...errors, endurance: ''})
        , [form.endurance])


    useEffect(() => {
        nameValidation(form.name) ? setErrors({
            ...errors,
            name: 'The name must be between 3 and 25 characters.'
        }) : setErrors({...errors, name: ''})
    }, [form.name])

    useEffect(() => {
        setForm({
                ...form,
                totalPoints: totalPoints([form.power, form.defence, form.agility, form.endurance]),
            }
        )
    }, [form.power, form.defence, form.agility, form.endurance])

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
                            className={`form-control ${errors.name ? 'is-invalid' : ''}`}/>
                        <div className="invalid-feedback">
                            {errors.name}
                        </div>
                    </div>
                </div>
                <div className="form-group col-md-12">
                    <p>Total stats points to
                        use: {form.totalPoints}</p>
                </div>

                <div className="form-group col-md-2">
                    <label htmlFor="power" className="col-sm-2 col-form-label">Power:</label>
                    <div className="col-sm-10">
                        <input required
                               value={form.power}
                               onChange={e => setForm({...form, power: e.target.value})}
                               min="1"
                               max={totalPoints([form.power, form.defence, form.agility, form.endurance]) + form.power}
                               type="number"
                               name="power"
                               className={`form-range bg-light ${errors.power ? 'is-invalid' : ''}`}/>
                        <div className="invalid-feedback">
                            {errors.power}
                        </div>
                    </div>
                </div>
                <div className="form-group col-md-2">
                    <label htmlFor="defence" className="col-sm-2 col-form-label">Defence:</label>
                    <div className="col-sm-10">
                        <input required
                               value={form.defence}
                               onChange={e => setForm({...form, defence: e.target.value})}
                               min="1"
                               max={totalPoints([form.power, form.defence, form.agility, form.endurance]) + form.defence}
                               type="number"
                               name="defence"
                               className={`form-range bg-light ${errors.defence ? 'is-invalid' : ''}`}/>
                        <div className="invalid-feedback">
                            {errors.defence}
                        </div>
                    </div>
                </div>
                <div className="form-group col-md-2">
                    <label htmlFor="endurance" className="col-sm-2 col-form-label">Endurance:</label>
                    <div className="col-sm-10">
                        <input required
                               value={form.endurance}
                               onChange={e => setForm({...form, endurance: e.target.value})}
                               min="1"
                               max={totalPoints([form.power, form.defence, form.agility, form.endurance]) + form.endurance}
                               type="number"
                               name="endurance"
                               className={`form-range bg-light ${errors.endurance ? 'is-invalid' : ''}`}/>
                        <div className="invalid-feedback">
                            {errors.endurance}
                        </div>
                    </div>
                </div>
                <div className="form-group col-md-2">
                    <label htmlFor="agility" className="col-sm-2 col-form-label">Agility:</label>
                    <div className="col-sm-10">
                        <input required
                               value={form.agility}
                               onChange={e => setForm({...form, agility: e.target.value})}
                               min="1"
                               max={totalPoints([form.power, form.defence, form.agility, form.endurance]) + form.agility}
                               type="number"
                               name="agility"
                               className={`form-range bg-light ${errors.agility ? 'is-invalid' : ''}`}/>
                        <div className="invalid-feedback">
                            {errors.agility}
                        </div>
                    </div>
                </div>
                <div className="mt-5">
                    <button type="submit" className="btn btn-danger px-5">Create</button>
                </div>
            </form>
            {errors.backend ? (
                <div className="alert alert-danger mt-3 w-50">{errors.backend}</div>
            ) : null}
        </div>
    )
}
