import { NavLink } from "react-router-dom"
const Subheader = () => {
    return (
        <div className="subheader-container">
            <ul>
                <li><NavLink to={"/"}>Home</NavLink></li>
                <li><NavLink to={"/category-1"}>Category 1</NavLink></li>
                <li><NavLink to={"/category-2"}>Category 2</NavLink></li>
                <li><NavLink to={"/category-3"}>Category 3</NavLink></li>
                <li><NavLink to={"/category-4"}>Category 4</NavLink></li>
            </ul>
        </div>
    )
}

export default Subheader