import { Button, Container, List, Stack, Text, Title } from "@mantine/core";
import { IconArrowRight, IconLogin2 } from "@tabler/icons-react";

export const HomeHeader = () => {
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
            <Button size="lg" rightSection={<IconLogin2 />}>
                {"Join Us ".toUpperCase()}
            </Button>
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
