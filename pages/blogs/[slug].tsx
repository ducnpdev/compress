import * as React from "react";
import Box from "@mui/material/Box";
import { useRouter } from "next/router";
import styles from "./styles.module.scss";
import { Avatar, Grid, Stack, Typography } from "@mui/material";
import Container from "@mui/material/Container";
import Header from "../../components/Header";

export default function PostDetail() {
  const router = useRouter();
  const { id } = router.query;
  return (
    <>
    <Header />
    <Container maxWidth="lg">
      <Grid container spacing={{ xs: 4, md: 4 }}>
        <Grid item xs={12}>
          <Box sx={{ mb: 8 }} className={styles["banner"]} />
          <Box
            sx={{ typography: "h4", textAlign: "center", fontWeight: "bold" }}
          >
            Building a carousel with drag and drop in React Native {id}
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
            <Avatar alt="Doraemon" src="/asset/images/doraemon.png" />
            <Box sx={{ typography: "body1", lineHeight: "2.5rem" }}>
              Tác giả
            </Box>
            <Box sx={{ typography: "body1", lineHeight: "2rem" }}>.</Box>
            <Box sx={{ typography: "body1", lineHeight: "2.5rem" }}>
              Jan 6, 2023
            </Box>
          </Stack>
          <Box sx={{ mt: 10 }} className="content">
            Content {id} <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
            similique exercitationem dolore possimus deleniti nobis sint.
            Ratione ex minus accusantium, explicabo, officiis autem at tempore
            perspiciatis hic qui recusandae esse.
          </Box>
        </Grid>
      </Grid>
    </Container>
    </>
  );
}
