import {useLocation} from "react-router-dom";

export const Added = () => {
    const {state} = useLocation();
    return (
        <div className="alert alert-success w-50">
            Successfully added warrior {state}
        </div>
    )
}