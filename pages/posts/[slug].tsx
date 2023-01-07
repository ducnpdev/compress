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
      (async () => {
        try {
          const response: any = await fetch(
            "http://54.254.213.196:11001/v1/article?uuid=" + slug,
            {
              headers: {
                Authorization:
                  "Bearer eyJhbGciOiJSUzUxMiIsInR5cCI6IkpXVCJ9.eyJleHAiOjI5MjQ3MDQxMDMsImlzcyI6InNpbXBzb24iLCJ1c2VybmFtZSI6IjEyMTUxMTMzIiwicmVmZXNoX3Rva2VuIjoiIiwidXNlcl9pZCI6MSwiZW1haWwiOiIiLCJwaG9uZSI6IjAzMzkxMTIzMzMifQ.nvonRJfcQckDcL4dYRP_h3ua5Onp4EdwBn84q-kimkyFz2syJ0iRxFR9QJEX5tOCIR9iBE3efwnN6oHvJhre6iked-0l0Xg0I5fZbtMfMvckb3KXBnwIdIo31X8oAwOsNjLSTTjL33h8TUiOr03pHHzAdG3v4KAufD59YZYMJoHBKHyy69kJ8poC_F0J9NDNd_hXY5p_W25UfgY6wPiQ44tSj4I-Jwh7Np-Ms2bIvVQAyrXA1robqy7LlETez_k07jZrWgMm_0GDIFq9o_-pGGsb3e25er8yxdorkWb_X_anZFa5ikP_b9ViAU-rrR0UjPDyEnoBbMWVF9okWBoCoDYchkhrVruXDrNXPn_uA0gyXuNs0ux7waN-tl0zBwmn7Fmt8_ZVU4GC0pcW33rk896jQYIYsCOv1G5WGAfWhUoaaA9qkzmuock2b3y-IIJ-_ySUjCfabuQ-exXuptDImX0Ybf8k3lrDSOHpNabhl84JqcHEp3ZpBP5mJwpGJqhlOjy_hBoMdmA13Ox7HJQVNPpG2Liyi4n3LZb52KWLNh6-Ats8h2157kSu8YdRwTRl2AhhEQaDZTN0QgI8InT7uYhqXybCEF5mIwgvpMVUWcFe4zz1aRvyL51iKI4vQWRe-g8Q31PQpoqUTy3D7-mMNEJn-wQ6gQu5oZGjUpko37A",
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
            {article.content}
          </Box>
        </Grid>
      </Grid>
    </Container>
    </>
  );
}
