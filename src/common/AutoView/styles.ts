import styled from 'styled-components/native';

interface IContainerProps {
  scrollEnabled: boolean;
}
export const Container = styled.View<IContainerProps>`
  ${props => props.scrollEnabled && 'padding-bottom: 100px;'}
`;
