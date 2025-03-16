import { AppShell } from "@mantine/core";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import {
    Header,
    Navbar,
    ErrorComponent,
    NotFoundComponent,
} from "../components";
import { useDisclosure } from "@mantine/hooks";
import { useState } from "react";

export const Route = createRootRoute({
    component: RootComponent,
    errorComponent: ErrorComponent,
    notFoundComponent: NotFoundComponent,
});

function RootComponent() {
    const [navbarOpened, { toggle }] = useDisclosure();
    const [activeRoute, setActiveRoute] = useState(0);

    return (
        <AppShell
            header={{
                height: 60,
            }}
            navbar={{
                breakpoint: "sm",
                width: 240,
                collapsed: {
                    desktop: true,
                    mobile: !navbarOpened,
                },
            }}
        >
            <Header
                navbar={{
                    opened: navbarOpened,
                    toggle,
                }}
            />
            <Navbar
                toggle={toggle}
                active={activeRoute}
                setActive={setActiveRoute}
            />
            <AppShell.Main>
                <Outlet />
            </AppShell.Main>
        </AppShell>
    );
}
