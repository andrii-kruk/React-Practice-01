import styled from '@emotion/styled';

export const Card = styled.li`
  position: relative;
  display: flex;

  width: 300px;
  background-color: #8c9bb8;
  border-radius: 15px;

  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 25px;
  padding-right: 25px;

  align-items: center;
  margin-bottom: 12px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  gap: 4px;
`;

export const Avatar = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 10px;
  border-radius: 15px;
`;

export const Name = styled.p`
  margin: 0;
  font-size: 24px;
  font-weight: 500;
`;
export const About = styled.p`
  margin: 0;
  font-size: 20px;
  font-weight: 400;
`;
export const Status = styled.span`
  position: absolute;
  top: 15px;
  right: 15px;

  width: 15px;
  height: 15px;
  border-radius: 50%;

  background-color: ${props => {
    switch (props.status) {
      case true:
        return '#008000';
      case false:
        return '#ff0000';

      default:
        return 'transparent';
    }
  }};
`;
