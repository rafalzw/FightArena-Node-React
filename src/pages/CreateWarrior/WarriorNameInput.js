export const WarriorNameInput = props => {

    const nameValidation = (name) => (name.trim().length < 3 || name.length > 25);

    return (
        <div className="form-group col-6">
            <label htmlFor="name" className="col-sm-2 col-form-label">Name</label>
            <div className="col-sm-10">
                <input
                    value={props.value}
                    onChange={e => props.changeName(props.name, e.target.value)}
                    type="text"
                    minLength="3"
                    maxLength="25"
                    name="name"
                    className={`form-control ${nameValidation(props.value) ? 'is-invalid' : ''}`}/>
                <div className="invalid-feedback">
                    The name must be between 3 and 25 characters!
                </div>
            </div>
        </div>
    )
}