import { Container, Stack } from "@mui/material";
import { Tasks } from "../Tasks";
import { BoxList } from "./styled";

export function Dashboard() {
  return (
    <Container>
      <BoxList>
        <Stack spacing={2}>
          <Tasks />
        </Stack>
      </BoxList>
    </Container>
  );
}
