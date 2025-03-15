import { Divider, Space, Stack } from "@mantine/core";
import { createLazyFileRoute } from "@tanstack/react-router";
import { HomeHeader, WhoAreWe } from "@/components/pages/home";

export const Route = createLazyFileRoute("/")({
    component: Index,
});

function Index() {
    return (
        <Stack mih="100vh" bg="dark.9">
            <HomeHeader />
            <Divider />
            <WhoAreWe />

            <Space h="5vh" />
        </Stack>
    );
}
