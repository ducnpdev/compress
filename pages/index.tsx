import * as React from "react";
import {useState, useEffect} from 'react';
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import styles from "./styles.module.scss";
import { Typography } from "@mui/material";
import Link from "next/link";
import Container from "@mui/material/Container";
import Header from "../components/Header";

export default function Home() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(
          "http://54.254.213.196:11001/v1/articles",
          {
            headers: {
              Authorization:
                "Bearer ",
            },
          }
        );
        const res = await response.json();
        if (res.code == "00") {
          setArticles(res.data);
        }

        return;
      } catch (error) {
        console.log("There was an error");
      }
    })();
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }} className={styles["root"]}>
      <Header />
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 4, md: 4 }}>
          {articles.map((article: any) => (
            <Grid item xs={12} sm={6} md={4} key={article.uuid}>
              <Link href={"/posts/" + article.slug+ "-" +article.uuid}>
                <Box
                  component="img"
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover"
                  }}
                  alt={article.slug}
                  // src={article.image}
                  src={"https://upload.wikimedia.org/wikipedia/commons/4/42/Blog_%281%29.jpg?20120511031542"}
                />
              </Link>
              <Box sx={{ py: 2 }}>
                <Typography
                  variant="body2"
                  component="span"
                  className={styles["title-box"]}
                >
                  {article.title}
                </Typography>
                <Typography variant="body2" component="span">
                  01/01/2023
                </Typography>
              </Box>
              <Box sx={{ typography: "body1", fontWeight: "bold" }}>
              {article.status}
              </Box>
              <Typography variant="body2" component="span">
              {article.description}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
