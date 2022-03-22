export const Records = props => (
    <tr>
        <th scope="row">{props.index + 1}</th>
        <td>{props.name}</td>
        <td>{props.wins}</td>
    </tr>
)