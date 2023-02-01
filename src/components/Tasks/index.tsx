import { Card, CardActions, CardContent } from "@mui/material";
import { useEffect } from "react";
import { ButtonCard, Description, TitleCard } from "./styled";

export function Tasks() {
  useEffect(() => {
    fetch("http://localhost:3000/api/tasks")
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, []);
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
