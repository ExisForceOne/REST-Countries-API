import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { ArrowBack } from "@styled-icons/material-outlined/ArrowBack";

const StyledBackBtn = styled.button`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 40px;
  box-shadow: ${({ theme }) => theme.boxShadow};
  background-color: ${({ theme }) => theme.elementsColor};
  color: ${({ theme }) => theme.textColor};
`;

export default function BackBtn(props) {
  let navigate = useNavigate();
  return (
    <StyledBackBtn
      onClick={() => {
        navigate(-1);
      }}
    >
      <ArrowBack size={20} /> Back
    </StyledBackBtn>
  );
}
