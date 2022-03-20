export const Warrior = props => (
    <option value={props.id}>
        {props.name} 🗡️
        {props.power} 🛡️
        {props.defence} 💪
        {props.endurance} 🖐️
        {props.agility}
    </option>
)