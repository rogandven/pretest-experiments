import { NavLink } from "react-router-dom";

export const DUSidebarItem = (icon, label, destination, logoutSubmit = null, className = "") => {
    return (
        <div className={className}>
            {/* List item */}
            <li className="mb-1">
            <NavLink to={destination} onClick={logoutSubmit}>
            <button className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip={String(label)}>
                <div className="flex flex-1 flex-row align-middle items-center">
                    {icon()}
                    <span className="is-drawer-close:hidden ml-3">{String(label)}</span>
                </div>
            </button>
            </NavLink>
            </li>
        </div>      
    )
}