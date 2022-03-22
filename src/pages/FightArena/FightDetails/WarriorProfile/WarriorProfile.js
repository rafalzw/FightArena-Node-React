import {helpers} from "../../../../helpers/helpers";
import womanImage from "../../../../images/woman.png"
import manImage from "../../../../images/man.png"

export const WarriorProfile = props => (
        <div className="card bg-dark h-100 opacity-75">
            <img src={helpers.isFemale(props.name) ? womanImage : manImage} className="card-img-top" style={{width: "200px"}} />
            <div className="card-body ">
                <h5 className="card-title">{props.name}</h5>
                <ul className="list-group ">
                    <li className="list-group-item">🗡️ Power: {props.power}</li>
                    <li className="list-group-item">🛡️ Defence: {props.defence}</li>
                    <li className="list-group-item">💪 Endurance: {props.endurance}</li>
                    <li className="list-group-item">🖐️ Agility: {props.agility}</li>
                </ul>
            </div>
        </div>
)