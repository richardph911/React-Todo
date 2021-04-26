import React from "react";
import Button from "@atlaskit/button";
import styled from "styled-components";
import CheckIcon from "@atlaskit/icon/glyph/check";

const ButtonStyled = styled(Button)`
  margin-top: 5px;
  text-align: left;
`;
// Todo truyen vao props todo
export default function Todo({todo}){
    return(
        <ButtonStyled shouldFitContainer>
            {todo.name}
        </ButtonStyled>
);
}
