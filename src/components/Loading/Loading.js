import styled from "styled-components";

const StyledLoading = styled.div`
  margin: 60px auto;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  border: 10px solid;
  border-color: ${({ theme }) => theme.textColor};
  border-top-color: ${({ theme }) => theme.bgcColor};
  box-shadow: ${({ theme }) => theme.boxShadow};
  animation: rotate 1.5s linear infinite;

  @keyframes rotate {
    from {
      transform: rotate(360deg);
    }
  }
`;

export default function Loading(props) {
  return <StyledLoading />;
}
