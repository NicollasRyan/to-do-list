import { Card, CardActions, CardContent } from "@mui/material";
import { ButtonCard, Description, TitleCard } from "./styled";

export function Tasks() {
  return (
    <>
      <Card>
        <CardContent>
          <TitleCard>Ir ao mercado</TitleCard>
          <Description>
            Comprar Arroz, feijão, macarrão e carne de sol
          </Description>
        </CardContent>
        <CardActions>
          <ButtonCard>Ver mais</ButtonCard>
        </CardActions>
      </Card>
      <Card>
        <CardContent>
          <TitleCard>Ir ao mercado</TitleCard>
          <Description>
            Comprar Arroz, feijão, macarrão e carne de sol
          </Description>
        </CardContent>
        <CardActions>
          <ButtonCard>Ver mais</ButtonCard>
        </CardActions>
      </Card>
      <Card>
        <CardContent>
          <TitleCard>Ir ao mercado</TitleCard>
          <Description>
            Comprar Arroz, feijão, macarrão e carne de sol
          </Description>
        </CardContent>
        <CardActions>
          <ButtonCard>Ver mais</ButtonCard>
        </CardActions>
      </Card>
    </>
  );
}
