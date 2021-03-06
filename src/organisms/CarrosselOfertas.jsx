import React from "react";
import { v4 } from "uuid";
import Image from "next/image";
import Carousel from "react-material-ui-carousel";
import { Grid, makeStyles } from "@material-ui/core";
import { useRouter } from "next/router";
import Trufas from "../atoms/img/Trufas.png";
import Tabletes from "../atoms/img/Tabletes.png";
import Favoritos from "../atoms/img/Favoritos.png";

const styles = makeStyles(() => ({
  CarouselStyle: {},
  PaperStyle: {},
  imgStyle: {
    marginTop: "0.5%",
    width: "100%",
    "&:hover": {
      cursor: "pointer",
    },
  },
}));

export default function CarrosselOfertas() {
  const classes = styles();
  const router = useRouter();
  const items = [
    {
      imagemLink: Trufas,
    },
    {
      imagemLink: Tabletes,
    },
    {
      imagemLink: Favoritos,
    },
  ];
  return (
    <Grid>
      <Carousel
        animation="slide"
        className={classes.CarouselStyle}
        autoPlay="true"
        interval="5000"
        navButtonsAlwaysInvisible
      >
        {items.map((item) => (
          <Image
            key={v4()}
            alt="imagem de trufas"
            src={item.imagemLink}
            className={classes.imgStyle}
            onClick={() => router.push("/Produtos")}
          />
        ))}
      </Carousel>
    </Grid>
  );
}
