import styled, { css } from "styled-components";
import { AccordionDetails, Checkbox } from "@mui/material";

interface BouttonProps {
  done: boolean;
}

export const ContainerAccordion = styled(AccordionDetails)`
  display: flex !important;
  justify-content: space-between !important;
`;

export const TitleCard = styled.p<BouttonProps>`
  ${({ done }) => css`
    text-decoration: ${done ? "line-through" : "initial"};
    font-weight: 700;
  `}
`;

export const Description = styled.p<BouttonProps>`
  ${({ done }) => css`
    text-decoration: ${done ? "line-through" : "initial"};
    font-size: 15px;
  `}
`;

export const ButtonCard = styled.button`
  border: none;
  background: transparent;
  color: gray;

  margin-left: 10px;
`;

export const BoxButtons = styled.div`
  display: flex;
  align-items: center;
`;

export const ButtonCheckbox = styled(Checkbox);
