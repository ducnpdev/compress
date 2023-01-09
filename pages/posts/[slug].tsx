import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { useRouter } from "next/router";
import styles from "./styles.module.scss";
import { Avatar, Grid, Stack, Typography } from "@mui/material";
import Container from "@mui/material/Container";
import Header from "../../components/Header";

export default function PostDetail() {
  const router = useRouter();
  const { slug } = router.query;
  const [article, setArticle]: any = useState([]);

  useEffect(() => {
    if (typeof(slug) !== "undefined") {
      const arr = slug.toString().split("-");
      const uuid = arr[arr.length-1];
      console.log("detail-uuid:",uuid);
      (async () => {
        try {
          const response = await fetch(
            "http://54.254.213.196:11001/v1/article?uuid=" + uuid,
            {
              headers: {
                Authorization:
                  "Bearer ",
              },
            }
          );
          const res = await response.json();
          if (res.code == "00") {
            setArticle(res.data);
          }

          return;
        } catch (error) {
          console.log("There was an error");
        }
      })();
    }
  }, [slug]);

  return (
    <>
    <Header />
    <Container maxWidth="lg">
      <Grid container spacing={{ xs: 4, md: 4 }}>
        <Grid item xs={12}>
          {/* <Box sx={{ mb: 8 }} className={styles["banner"]} /> */}
          <Box
            sx={{ typography: "h4", textAlign: "center", fontWeight: "bold" }}
          >
            Building a carousel with drag and drop in React Native
          </Box>
          <Box
            sx={{ pt: 4, typography: "h4" }}
            className={styles["description"]}
          >
            An exploration into ways to achieve an animated horizontal
            scrollview of data, allowing for vertical scrolling and
            drag-and-drop
          </Box>
          <Stack
            direction="row"
            spacing={2}
            sx={{ mt: 4, justifyContent: "center" }}
          >
            <Avatar alt="Doraemon" src={article.image} />
            <Box sx={{ typography: "body1", lineHeight: "2.5rem" }}>
              {article.author}
            </Box>
            <Box sx={{ typography: "body1", lineHeight: "2rem" }}>.</Box>
            <Box sx={{ typography: "body1", lineHeight: "2.5rem" }}>
              Jan 6, 2023
            </Box>
          </Stack>
          <Box sx={{ mt: 10 }} className="content">
            <div dangerouslySetInnerHTML={{__html: article.content}}></div>
          </Box>
        </Grid>
      </Grid>
    </Container>
    </>
  );
}
