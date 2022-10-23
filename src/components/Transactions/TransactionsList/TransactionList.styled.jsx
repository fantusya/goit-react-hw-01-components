import styled from "styled-components";

export const TransactionTableBody = styled.tbody`
   color: ${props => props.theme.colors.gray};
    background-color: ${props => props.theme.colors.white};

    tr:nth-of-type(even) {
        background-color: ${props => props.theme.colors.tableEvenRow};
    }

    td {
        padding: 15px 30px;
        font-size: 15px;
    }
`;