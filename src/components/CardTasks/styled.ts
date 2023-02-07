import { AccordionDetails } from "@mui/material";
import styled from "styled-components";

export const ContainerAccordion = styled(AccordionDetails)`
  display: flex !important;
  justify-content: space-between !important;
`;

export const TitleCard = styled.p`
  font-weight: 700;
`;

export const Description = styled.p`
  font-size: 15px;
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
