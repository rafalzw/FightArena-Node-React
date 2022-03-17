export const Records = props => (
    props.data.map((el, index) => (
            <tr key={el.id}>
                <th scope="row">{index + 1}</th>
                <td>{el.name}</td>
                <td>{el.wins}</td>
            </tr>
        ))
)
