import React from "react";
import styled from "styled-components";

function UserCard() {
  return (
    <Container>
      <ProfileContainer>
        <PublicInfo>
          <BasicInfo>
            <Username>ded edward</Username>
            <Motto>description</Motto>
          </BasicInfo>
          <Badge>
            <TotalLevel>
              <div>3</div>
            </TotalLevel>
          </Badge>
        </PublicInfo>

        <PrivateInfo>
          <SkillsContainer>
            <h2>Skills</h2>
            <LevelsContainer></LevelsContainer>
          </SkillsContainer>
        </PrivateInfo>
      </ProfileContainer>
    </Container>
  );
}

export default UserCard;

const Container = styled.div`
  background-color: #028a0e;
  width: 512px;
  height: 512px;
`;

const ProfileContainer = styled.div`
  border: 1px solid black;
`;

const PublicInfo = styled.div`
  display: flex;

  border: 1px solid green;
`;

const BasicInfo = styled.div`
    flex: 1;
`;

const Username = styled.h2`
  font-size: 1.2rem;
  font-weight: 600;
`;

const Motto = styled.p`
  font-style: italic;
`;

const Badge = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: yellow;
`;

const TotalLevel = styled.div`
  color: red;
  width: 50px;
  height: 50px;
`;

const PrivateInfo = styled.div`
  border: 1px solid green;
`;

const LevelsContainer = styled.div`
  border: 1px solid yellow;
  width: 150px;
  height: 150px;
`;

const SkillsContainer = styled.div``;
