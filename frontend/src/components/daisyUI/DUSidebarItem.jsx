import { NavLink } from "react-router-dom";

export const DUSidebarItem = (icon, label, destination, logoutSubmit = null, className = "") => {
    return (
        <div>
            {/* List item */}
            <li className="mb-1">
            <NavLink to={destination} onClick={logoutSubmit}>
            <button className={`is-drawer-close:tooltip is-drawer-close:tooltip-right ${className}`} data-tip={String(label)}>
                {icon()}
                <span className="is-drawer-close:hidden ml-3">{String(label)}</span>
            </button>
            </NavLink>
            </li>
        </div>      
    )
}