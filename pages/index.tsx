import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import styles from "./styles.module.scss";
import { Typography } from "@mui/material";
import Link from "next/link";
import Container from "@mui/material/Container";

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
                "Bearer eyJhbGciOiJSUzUxMiIsInR5cCI6IkpXVCJ9.eyJleHAiOjI5MjQ3MDQxMDMsImlzcyI6InNpbXBzb24iLCJ1c2VybmFtZSI6IjEyMTUxMTMzIiwicmVmZXNoX3Rva2VuIjoiIiwidXNlcl9pZCI6MSwiZW1haWwiOiIiLCJwaG9uZSI6IjAzMzkxMTIzMzMifQ.nvonRJfcQckDcL4dYRP_h3ua5Onp4EdwBn84q-kimkyFz2syJ0iRxFR9QJEX5tOCIR9iBE3efwnN6oHvJhre6iked-0l0Xg0I5fZbtMfMvckb3KXBnwIdIo31X8oAwOsNjLSTTjL33h8TUiOr03pHHzAdG3v4KAufD59YZYMJoHBKHyy69kJ8poC_F0J9NDNd_hXY5p_W25UfgY6wPiQ44tSj4I-Jwh7Np-Ms2bIvVQAyrXA1robqy7LlETez_k07jZrWgMm_0GDIFq9o_-pGGsb3e25er8yxdorkWb_X_anZFa5ikP_b9ViAU-rrR0UjPDyEnoBbMWVF9okWBoCoDYchkhrVruXDrNXPn_uA0gyXuNs0ux7waN-tl0zBwmn7Fmt8_ZVU4GC0pcW33rk896jQYIYsCOv1G5WGAfWhUoaaA9qkzmuock2b3y-IIJ-_ySUjCfabuQ-exXuptDImX0Ybf8k3lrDSOHpNabhl84JqcHEp3ZpBP5mJwpGJqhlOjy_hBoMdmA13Ox7HJQVNPpG2Liyi4n3LZb52KWLNh6-Ats8h2157kSu8YdRwTRl2AhhEQaDZTN0QgI8InT7uYhqXybCEF5mIwgvpMVUWcFe4zz1aRvyL51iKI4vQWRe-g8Q31PQpoqUTy3D7-mMNEJn-wQ6gQu5oZGjUpko37A",
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
      <Box sx={{ mb: 8 }} className={styles["banner"]}>
        <Typography gutterBottom variant="h4" component="div">
          Blog
        </Typography>
      </Box>
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 4, md: 4 }}>
          {articles.map((article: any) => (
            <Grid item xs={12} sm={6} md={4} key={article.uuid}>
              <Link href={"/posts/" + article.uuid}>
                <Box
                  component="img"
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover"
                  }}
                  alt={article.slug}
                  src={article.image}
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
