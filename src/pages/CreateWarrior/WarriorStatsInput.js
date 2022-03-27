export const WarriorStatsInput = props => {

    const statsValidation = (value) => (value < 1 || value > 7);

    return (
        <div className="form-group col-md-2">
            <label htmlFor="power" className="col-sm-2 col-form-label">Power:</label>
            <div className="col-sm-10">
                <input required
                       value={props.value}
                       onChange={e => props.changeStats(props.name, e.target.value)}
                       min="1"
                       max={props.totalPoints + props.value}
                       type="number"
                       name={props.name}
                       className={`form-range bg-light ${statsValidation(props.value) ? 'is-invalid' : ''}`}/>
                <div className="invalid-feedback">
                    Incorrect value
                </div>
            </div>
        </div>
    )
}