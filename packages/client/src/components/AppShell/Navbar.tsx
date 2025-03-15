import { AppShellNavbar, NavLink } from "@mantine/core";
import { links } from "@/data/routing";
import { Link, useNavigate } from "@tanstack/react-router";
import { bgBlur } from "@/styles/jsStyles";

export const Navbar = ({
    toggle,
    active,
    setActive,
}: {
    toggle: () => void;
    active: number;
    setActive: React.Dispatch<React.SetStateAction<number>>;
}) => {
    const navigate = useNavigate();
    const handleClick = (i: number, path: string) => {
        navigate({
            to: path,
        });
        setActive(i);
        toggle();
    };
    return (
        <AppShellNavbar style={{ ...bgBlur }}>
            {links.map((l, i) => (
                <NavLink
                    key={"navlink" + l.label + i}
                    onClick={() => handleClick(i, l.path)}
                    rightSection={l.icon}
                    component={Link}
                    to={l.path}
                    label={l.label}
                    active={active === i}
                />
            ))}
        </AppShellNavbar>
    );
};
