import { NavLink } from "react-router-dom";

export const DUSidebarItem = (icon, label, destination, logoutSubmit = null, className = "") => {
    return (
        <div className={className}>
            {/* List item */}
            <li>
            <NavLink to={destination} onClick={logoutSubmit}>
            <button className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip={String(label)}>
                {icon()}
                <span className="is-drawer-close:hidden">{String(label)}</span>
            </button>
            </NavLink>
            </li>
        </div>      
    )
}