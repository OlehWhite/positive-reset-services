import Head from "next/head";
import { OtherHeader } from "../../components/Layout/OtherHeader/OtherHeader";
import React, { useEffect, useState } from "react";
import { Box, CircularProgress, Stack, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { IBlog } from "../../services/types";
import Image from "next/image";
import Button from "@mui/material/Button";
import { CURRENT_WEBSITE } from "../../services/constants";
import { fetchProjects } from "../../services/getInfo";
import { Title } from "../../otherPages/careerOpportunities/styled";

export const getStaticProps = async () => {
  const data = await fetchProjects();

  return {
    props: {
      data,
    },
  };
};

export const getStaticPaths = async () => {
  const data = await fetchProjects();
  const paths = data.map((doc) => ({
    params: { blogId: doc.id },
  }));

  return { paths, fallback: true };
};

const BlogId = ({ data }) => {
  const router = useRouter();
  const { blogId } = router.query;

  const [description, setDescription] = useState("");
  const [blog, setBlog] = useState<IBlog | null>(null);

  useEffect(() => {
    if (data) {
      const project = data[0]?.[CURRENT_WEBSITE.POSITIVE_RESET_SERVICES];

      const currentBlog = project?.blogs.find((blog) => blog.id === blogId);

      setBlog(currentBlog);
    }
  }, [data, blogId]);

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
      </Head>

      <OtherHeader />

      <Title>BLOG</Title>

      <Box mb={5} borderBottom="1px solid #BEBEBE" />

      <Stack width={1} maxWidth={1100} margin="0 auto 40px" position="relative">
        <Button
          sx={{ position: "absolute" }}
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
              minWidth: 380,
              height: 253,
              mb: 1,
              mt: 6,
            }}
          >
            {blog?.image ? (
              <Image
                src={blog?.image}
                alt={blog?.title}
                title={blog?.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            ) : (
              <Stack
                width={1}
                height={1}
                justifyContent="center"
                alignItems="center"
              >
                <CircularProgress size={70} />
              </Stack>
            )}
          </Stack>

          <Typography
            fontStyle="italic"
            fontWeight={300}
            color="#a8a8a8"
            fontSize={16}
          >
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
