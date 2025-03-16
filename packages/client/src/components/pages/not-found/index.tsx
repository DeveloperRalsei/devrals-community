import {
    ActionIcon,
    Container,
    Group,
    Space,
    Stack,
    Text,
    Title,
} from "@mantine/core";
import { NotFoundRouteComponent } from "@tanstack/react-router";
import { IconArrowDown } from "@tabler/icons-react";
import { useScrollIntoView } from "@mantine/hooks";

export const NotFoundComponent: NotFoundRouteComponent = ({ data }) => {
    console.table(data);
    const { targetRef, scrollIntoView } = useScrollIntoView();
    return (
        <Stack mih={"100vh"} justify="center" align="center">
            <Space h="30vh" />
            <Title order={1} c="red">
                {"WOAH YOU FOUND A SECRET"}
            </Title>
            <Group>
                <Text>Scroll down to see it :D</Text>
                <ActionIcon onClick={() => scrollIntoView()}>
                    <IconArrowDown />
                </ActionIcon>
            </Group>
            <Space h="80vh" />
            <Text c="dimmed" ref={targetRef}>
                JK! You lost. Hehe
            </Text>
            <Text c="dimmed">
                Since theres no "Go back" button in this page you stuck here
                forever!
            </Text>
            <Text c="dimmed">
                <Container
                    style={{
                        overflow: "auto",
                        wordBreak: "break-word",
                    }}
                >
                    {Array(1500)
                        .fill(0)
                        .map((_, i) => (i % 2 === 0 ? "H" : "A"))}
                    {"!!!"}
                </Container>
            </Text>
        </Stack>
    );
};
