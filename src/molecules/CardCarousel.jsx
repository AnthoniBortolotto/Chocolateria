import React from "react";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core";

const styles = makeStyles(() => ({
  CardStyle: {
    marginTop: "0%",
    paddingTop: "0%",
    paddingLeft: "1rem",
    paddingRight: "1rem",
    paddingBottom: "0.5rem",
  },
  CardMediaStyle: {
    paddingBottom: "30%",
    paddingTop: "0%",
  },
  CardContentStyle: {
    width: "80%",
  },
  PrecoStyle: {
    textAlign: "center",
  },
}));

export default function CardCarousel(props) {
  const { CardMediaTitle, CardMediaLink, ContentTitle, ContentText } = props;
  const classes = styles();
  return (
    <Card className={classes.CardStyle}>
      <CardContent>
        <CardMedia
          title={CardMediaTitle}
          image={CardMediaLink}
          className={classes.CardMediaStyle}
        />
        <Typography variant="h6" component="h6">
          {ContentTitle}
        </Typography>
        <Typography component="p" className={classes.PrecoStyle}>
          {ContentText}
        </Typography>
      </CardContent>
    </Card>
  );
}

CardCarousel.propTypes = {
  CardMediaTitle: PropTypes.string.isRequired,
  CardMediaLink: PropTypes.string.isRequired,
  ContentTitle: PropTypes.string.isRequired,
  ContentText: PropTypes.string.isRequired,
};
