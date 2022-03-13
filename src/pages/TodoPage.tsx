import React from "react";
import { Box, Container } from '@mui/material';
import Todo from "../components/Todo/Todo";

export default function TodoPage () {
    return (
        <Box>
            <Container>
                <Todo />
            </Container>
        </Box>
    )
}