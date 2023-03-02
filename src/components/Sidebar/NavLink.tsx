import { Icon, Link as ChakraLink, Text, LinkProps as ChakraLinkProps } from "@chakra-ui/react";
import { ElementType } from "react";
import { NavLink as ReactRouterNavLink } from 'react-router-dom'


interface NavLinkProps extends ChakraLinkProps {
    icon: ElementType;
    children: string;
    href: string;
}

export function NavLink({ icon, children, href, ...rest }: NavLinkProps) {
    return (
        <ReactRouterNavLink to={href}>
            <ChakraLink display='flex' alignItems='center' {...rest} >
                <Icon as={icon} fontSize='20' />
                <Text ml='4' fontWeight='mediun' >{children}</Text>
            </ChakraLink>
        </ReactRouterNavLink>
    )
}