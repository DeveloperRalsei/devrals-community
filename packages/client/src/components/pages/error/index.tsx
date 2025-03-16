import { Button, Group, Stack, Text, Title } from "@mantine/core";
import {
    IconExclamationCircle,
    IconLogout2,
    IconRefresh,
} from "@tabler/icons-react";
import { ErrorRouteComponent, useNavigate } from "@tanstack/react-router";

export const ErrorComponent: ErrorRouteComponent = ({ error, info }) => {
    const navigate = useNavigate();
    return (
        <Stack justify="center" align="center" pt={"md"}>
            <IconExclamationCircle color="var(--mantine-color-yellow-5)" />
            <Title order={1} c="yellow">
                An error occurred
            </Title>
            <Text fz="h3">Please report this to developers</Text>
            <Text>Error Message: {error.message}</Text>
            {info && <Text>{info.componentStack}</Text>}
            <Group>
                <Button
                    onClick={() => navigate({ to: "/" })}
                    rightSection={<IconLogout2 />}
                >
                    Go back to home page
                </Button>
                <Button
                    onClick={() => window.location.reload()}
                    rightSection={<IconRefresh />}
                >
                    Refresh the page
                </Button>
            </Group>
        </Stack>
    );
};
