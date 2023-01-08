import { Link, Stack, Typography } from "@mui/material";
import React from "react";
import { navigation } from "../utils/paths/navigation";
import NextLink from "next/link";
import { useRouter } from "next/router";

function Header(props: any) {
  const { pathname } = useRouter();
  return (
    <Stack
      direction="row"
      sx={{
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: "1px #C5C5C5 solid",
        mb: 2,
        px: 4,
        "& a": {
          display: "inline-block",
          textDecoration: "none",
          "&:hover": {
            textDecoration: "none",
          },
        },
      }}
    >
      <NextLink href={"/"} passHref>
        <Link>
          <Typography
            variant="h1"
            sx={{ fontSize: "1.8rem", color: "text.primary" }}
          >
            NORDIC ROSE
          </Typography>
        </Link>
      </NextLink>
      <Stack
        direction="row"
        spacing={1.5}
        sx={{
          justifyContent: "space-between",
          "& a": {
            display: "inline-block",
            textDecoration: "none",
            "&:hover": {
              textDecoration: "none",
            },
          },
        }}
      >
        {navigation
          .filter((e) => e.label)
          .map((navItem) => (
            <NextLink href={navItem.pathConfig.path} passHref>
              <Link
                sx={{
                  color: "text.primary",
                  fontWeight: 500,
                  py: 4,
                  px: 1,
                  mx: 1,
                  transition: "all 250ms linear",
                  ...(pathname === navItem.pathConfig.path && {
                    color: "primary.main",
                    borderBottom: (theme) =>
                      `3px ${theme.palette.primary.main} solid`,
                  }),
                }}
              >
                {navItem.label}
              </Link>
            </NextLink>
          ))}
      </Stack>
    </Stack>
  );
}

export default Header;
