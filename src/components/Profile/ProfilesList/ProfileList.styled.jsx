import styled from "styled-components";

export const ProfileContainer = styled.div`
    margin: auto;
    width: 250px;
    text-align: center;
`;

export const ProfileListUl = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
`;

export const ProfileItem = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${props => props.theme.colors.white};
    box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.75);
        -webkit-box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.75);
        -moz-box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.75);
`;