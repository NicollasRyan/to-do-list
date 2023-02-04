import { Container, Stack } from "@mui/material";
import { CardTask } from "../CardTasks";
import { BoxList } from "./styled";

export function Dashboard() {
  return (
    <Container>
      <BoxList>
        <Stack spacing={2}>
          <CardTask />
        </Stack>
      </BoxList>
    </Container>
  );
}
