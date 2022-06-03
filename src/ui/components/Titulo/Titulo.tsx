import { TituloStyled, Subtitulo } from "./Titulo.style";
interface TituloProps{
    titulo: string;
    subtitulo?: string | JSX.Element; // ? para indicar que não é obrigatório JSX.Element para receber também elementos JSX
}
export default function Titulo(props: TituloProps) {
    return (
        <>
        <TituloStyled>{props.titulo}</TituloStyled>
        <Subtitulo>{props.subtitulo}</Subtitulo>
        </>
    )
}