import * as React from "react";
import {useState, useEffect} from 'react';
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import styles from "./styles.module.scss";
import Image from "next/image";
import download from "public/asset/images/download.png";
import { Typography } from "@mui/material";
import Link from "next/link";
import Container from "@mui/material/Container";
import Header from "../components/Header";

export default function Home() {

  const [articles,setArticles] = useState([])
  useEffect(()=>{
    console.log('homepage')
  },[])

  return (
    <Box sx={{ flexGrow: 1 }} className={styles["root"]}>
      <Header />
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 4, md: 4 }}>
          {Array.from(Array(6)).map((_, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Link href={"/posts/" + index}>
                <Image
                  src={download}
                  alt="picture"
                  className={styles["image"]}
                />
              </Link>
              <Box sx={{ py: 2 }}>
                <Typography
                  variant="body2"
                  component="span"
                  className={styles["title-box"]}
                >
                  Title en 1
                </Typography>
                <Typography variant="body2" component="span">
                  01/01/2023
                </Typography>
              </Box>
              <Box sx={{ typography: "body1", fontWeight: "bold" }}>
                aaaaa aaaa aaa
              </Box>
              <Typography variant="body2" component="span">
                ddddd ddd dd
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
