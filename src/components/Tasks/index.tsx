import { Card, CardActions, CardContent } from "@mui/material";
import { useEffect } from "react";
import { api } from "../services/api";
import { ButtonCard, Description, TitleCard } from "./styled";

export function Tasks() {
  useEffect(() => {
    api.get("tasks").then((data) => console.log(data));
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
