import type { GetStaticProps, GetStaticPaths } from "next";
import Head from "next/head";
import { OtherHeader } from "@/components/Layout/OtherHeader/OtherHeader";
import React, { useEffect, useState } from "react";
import { Box, CircularProgress, Stack, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { IBlog, Website } from "@/services/types";
import Image from "next/image";
import Button from "@mui/material/Button";
import { CURRENT_WEBSITE } from "@/services/constants";
import { fetchProjects } from "@/services/getInfo";
import { Title } from "@/components/FormFields/styled";
import { WrapperHeader } from "@/otherPages/aboutUs/Header/styled";
import IMGHeader from "@/public/about-us.jpg";

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking" // shows the page when ready and cache it on the edge/server
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { blogId } = context.params as { blogId: string };
  const data = await fetchProjects();

  const project = data[0]?.[CURRENT_WEBSITE.POSITIVE_RESET_SERVICES] as Website;
  const blog = project?.blogs.find((blog) => blog.id === blogId);
  return {
    props: {
      blog: blog || null,
      project: project || null,
    },
    revalidate: 10800, // re-fetch data not more than once every 3 hours
  };
};

const BlogId = ({ blog }: { blog: IBlog }) => {
  const router = useRouter();

  const [description, setDescription] = useState("");

  useEffect(() => {
    if (blog?.text) {
      const stripHtmlTags = (html: any) => {
        const doc = new DOMParser().parseFromString(html, "text/html");
        return doc.body.textContent || "";
      };

      setDescription(stripHtmlTags(blog?.text));
    }
  }, [blog]);

  return (
    <>
      <Head>
        <title>Positive Reset Services - Call Today | Blog</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={blog?.title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={blog?.image} />
        <meta
          property="og:url"
          content={`https://www.positiveresetservices.com/blogs/${blog?.id}`}
        />
        <meta name="twitter:title" content={blog?.title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={blog?.image} />
      </Head>

      <OtherHeader />

      <Stack
        width={1}
        maxWidth={1100}
        margin="0 auto 40px"
        position="relative"
        mt={3}
        sx={{
          "@media (max-width: 1100px)": {
            boxSizing: "border-box",
            p: "0 16px",
          },
        }}
      >
        <Button
          sx={{ position: "absolute", top: -15 }}
          variant="contained"
          onClick={() => router.push("/blogs")}
        >
          Back to blogs
        </Button>

        <Stack gap={2} justifyContent="center" alignItems="center">
          <Stack
            sx={{
              position: "relative",
              width: 1,
              maxWidth: 380,
              height: "auto",
              mb: 1,
              mt: 6,
            }}
          >
            {blog?.image ? (
              <Image
                src={blog?.image}
                alt={blog?.title}
                title={blog?.title}
                width={380}
                height={300}
                sizes="(min-width: 808px) 50vw, 100vw"
                style={{
                  objectFit: "contain",
                  height: "auto",
                  maxHeight: "100%",
                }}
              />
            ) : (
              <Stack width={1} height={1} justifyContent="center" alignItems="center">
                <CircularProgress size={70} />
              </Stack>
            )}
          </Stack>

          <Typography fontStyle="italic" fontWeight={300} color="#a8a8a8" fontSize={16}>
            {blog?.date}
          </Typography>
        </Stack>

        <Stack>
          <Box fontSize={28} fontWeight={600} component="h2">
            {blog?.title}
          </Box>

          <div dangerouslySetInnerHTML={{ __html: blog?.text }} />
        </Stack>
      </Stack>
    </>
  );
};

export default BlogId;
