import { Container, Stack } from "@mui/material";
import { Task } from "../Tasks";
import { BoxList } from "./styled";

export function Dashboard() {
  return (
    <Container>
      <BoxList>
        <Stack spacing={2}>
          <Task />
        </Stack>
      </BoxList>
    </Container>
  );
}
