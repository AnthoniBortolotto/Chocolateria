import React, { useState } from "react";
import { useRouter } from "next/router";
import PropType from "prop-types";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import { makeStyles, TextField } from "@material-ui/core";
import Produto from "../atoms/Produto";
import { usarCarrinho } from "../atoms/Carrinho";

const styles = makeStyles(() => ({
  GridItemStyle: {
    height: "80%",
  },
  CardStyle: {
    marginTop: "3%",
    height: "80%",
  },
  TypographyNomeStyle: {
    marginTop: "5rem",
    marginBottom: "5rem",
  },
}));

export default function CardDadosProduto({ produto }) {
  const router = useRouter();
  const classes = styles();
  const { adicionarProduto } = usarCarrinho();
  const quantidades = [];
  let quantidadeMax = 99;
  if (quantidadeMax > produto.Quantidade) quantidadeMax = produto.Quantidade;
  for (let i = 0; i < quantidadeMax; i++) {
    quantidades.push(`${i + 1}`);
  }
  const [inputValue, setInputValue] = useState("1");

  function handlerClickBtn() {
    adicionarProduto(produto, inputValue);
    router.push("/Compra");
  }

  return (
    <Card className={classes.CardStyle}>
      <Grid
        container
        direction="column"
        justify="space-between"
        className={classes.CardStyle}
      >
        <Grid item>
          <Typography
            color="secondary"
            align="center"
            variant="h2"
            className={classes.TypographyNomeStyle}
          >
            {produto.ProdutoNome}
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="h6">{produto.Preco}</Typography>
        </Grid>
        <Grid container item alignItems="center" justify="center" spacing={5}>
          <Grid item>
            <Autocomplete
              options={quantidades}
              defaultValue="1"
              disableClearable
              inputValue={inputValue}
              onInputChange={(_event, newInputValue) => {
                setInputValue(newInputValue);
              }}
              style={{ width: 100 }}
              renderInput={(params) => (
                <TextField {...params} label="Quantidade" variant="standard" />
              )}
            />
          </Grid>
          <Grid item>
            <Button
              color="primary"
              variant="contained"
              onClick={handlerClickBtn}
            >
              Comprar
            </Button>
          </Grid>
        </Grid>
        <Grid item>
          <TextField label="CEP" />
        </Grid>
      </Grid>
    </Card>
  );
}

CardDadosProduto.propTypes = {
  produto: PropType.instanceOf(Produto).isRequired,
};
