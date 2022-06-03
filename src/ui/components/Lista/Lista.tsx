import { Button } from "@mui/material";
import { 
    ListaStyled,
    ItemLista,
    Foto,
    Informacoes,
    Nome,
    Descricao
} from "./Lista.style"; 

export default function Lista() {
    return (
        <ListaStyled>
            <ItemLista>
                <Foto src={'https://image.cachorrogato.com.br/textimages/cachorrinho-ideal'} />
                <Informacoes>
                    <Nome>Celi</Nome>
                    <Descricao>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi enim consequatur cupiditate assumenda unde labore beatae! Dolor, repellat porro ipsa facere necessitatibus fuga et consequatur quidem mollitia eum tenetur sed?
                    </Descricao>
                    <Button
                    variant={'contained'}
                    >Adotar</Button>
                </Informacoes>
            </ItemLista>

            <ItemLista>
                <Foto src={'https://image.cachorrogato.com.br/textimages/cachorrinho-ideal'} />
                <Informacoes>
                    <Nome>Celi</Nome>
                    <Descricao>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi enim consequatur cupiditate assumenda unde labore beatae! Dolor, repellat porro ipsa facere necessitatibus fuga et consequatur quidem mollitia eum tenetur sed?
                    </Descricao>
                    <Button
                    variant={'contained'}
                    >Adotar</Button>
                </Informacoes>
            </ItemLista>
        </ListaStyled>
    )
}