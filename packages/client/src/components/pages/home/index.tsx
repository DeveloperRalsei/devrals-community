import {
    Button,
    Container,
    Group,
    List,
    Popover,
    Stack,
    Text,
    Title,
} from "@mantine/core";
import { IconArrowRight, IconBooks, IconLogin2 } from "@tabler/icons-react";
import { useNavigate } from "@tanstack/react-router";

export const HomeHeader = () => {
    const navigate = useNavigate();
    return (
        <Stack ta="center" align="center" justify="center" h="90vh" bd={3}>
            <Title order={1} fz="h3" ff="undertale">
                Welcome to the{" "}
                <Text span c="teal" fz="h3" fw="bolder">
                    DEVRALS COMMUNITY
                </Text>
                {"!"}
            </Title>
            <Text>A place where all the fluffy boi's meet :3</Text>
            <Group>
                <Popover>
                    <Popover.Target>
                        <Button size="lg" rightSection={<IconLogin2 />}>
                            {"Join Us ".toUpperCase()}
                        </Button>
                    </Popover.Target>
                    <Popover.Dropdown>test</Popover.Dropdown>
                </Popover>
                <Button
                    onClick={() => navigate({ to: "/posts" })}
                    size="lg"
                    color="pink"
                    rightSection={<IconBooks />}
                >
                    Look up the posts
                </Button>
            </Group>
        </Stack>
    );
};

export const WhoAreWe = () => {
    return (
        <Container w="100%">
            <Stack>
                <Title order={2}>Who are we?</Title>
                <List>
                    <List.Item>We're fluffy goat bois :3</List.Item>
                    <List.Item>We're silly</List.Item>
                    <List.Item>
                        <Text>We're all actually just fan of that cutie </Text>
                        <IconArrowRight />{" "}
                    </List.Item>
                </List>
            </Stack>
        </Container>
    );
};
