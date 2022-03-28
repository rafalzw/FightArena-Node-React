import {useEffect, useState} from "react";
import {Records} from "./Records";

export const HallOfFame = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        (async() => {
            const res = await fetch("/hall-of-fame")
            const data = await res.json()
            setData(data);
        })();
    }, []);

    const warrior = data.map((warriorObj, index) => (
        <Records
            key={warriorObj.id}
            index={index}
            name={warriorObj.name}
            wins={warriorObj.wins}
        />
    ));

    return (
        <div className="container text-light">
            <h2 className="mb-5">Hall of Fame</h2>
            <table className="table table-dark table-striped table-bordered w-50 opacity-75">
                <thead className="thead-dark">
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Wins</th>
                </tr>
                </thead>
                <tbody>
                {warrior}
                </tbody>
            </table>
        </div>
    )
}
