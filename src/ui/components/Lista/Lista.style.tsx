import { styled } from "@mui/system";

export const ListaStyled = styled('ul')`
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
    padding: ${({ theme }) => theme.spacing(2)};
`;

export const ItemLista = styled('li')`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: ${({ theme }) => theme.spacing(5)};
    margin: ${({ theme }) => theme.spacing(5)};

    ${({ theme }) => theme.breakpoints.down('md')} {
        background-color: red;
    };
`;

export const Foto = styled('img')`
    width: 100%;
`;

export const Informacoes = styled('div')`

`;

export const Nome = styled('h2')`

`;

export const Descricao = styled('p')`

`;