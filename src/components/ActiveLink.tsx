import { LinkProps, NavLink, useLocation } from "react-router-dom";
import { cloneElement, ReactElement } from 'react'

interface ActiveNavLinkProps extends LinkProps {
    children: ReactElement;
    shouldMatchExactHref?: boolean;
}

export function ActiveLink({ children, shouldMatchExactHref = false, ...rest }: ActiveNavLinkProps) {
    const { pathname } = useLocation()

    let isActive = false

    if (shouldMatchExactHref && (pathname === rest.to)) {
        isActive = true
    }

    if (!shouldMatchExactHref && (pathname.startsWith(String(rest.to)))) {
        isActive = true
    }


    return (
        <NavLink {...rest} >
            {cloneElement(children, {
                color: isActive ? 'pink.400' : 'gray.50'
            })}
        </NavLink>
    )
}