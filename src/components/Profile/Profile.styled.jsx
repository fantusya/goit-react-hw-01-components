import styled from "@emotion/styled";

export const ProfileContainer = styled.div`
    padding-top: 32px;
    text-align: center;
    width: 100%;
`;

export const DescriptionContainer = styled.div`
    margin-bottom: 32px;
`;

export const AvatarImg = styled.img`
    width: 100px;
    border-radius: 50%;

    margin-bottom: 32px;
`;

export const NameParagraph = styled.p`
    font-size: 22px;
    font-weight: 700;
    color: #000;

    margin-bottom: 10px;
`;

export const TagParagraph = styled.p`
    font-size: 16px;
    font-weight: 500;
    color: gray;

    margin-bottom: 10px;
`;

export const LocationParagraph = styled.p`
    font-size: 16px;
    font-weight: 500;
    color: gray;
`;

export const StatsList = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    background-color: #f5f3f3;
`;

export const StatsItem = styled.li`
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding: 15px;
    border: 1px solid gray;
    width: 83px;
`;

export const LabelSpan = styled.span`
    font-size: 13px;
    font-weight: 500;
    color: gray;
`;

export const QuantitySpan = styled.span`
    font-weight: 700;
`;
