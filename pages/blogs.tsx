import type { GetStaticProps } from "next";
import React, { ChangeEvent, useState } from "react";
import { useRouter } from "next/router";
import { format, parse } from "date-fns";

import { Box, Pagination, Stack, Typography, Button } from "@mui/material";
import Image from "next/image";
import { Title } from "@/otherPages/ourStaff/style";
import { useProject } from "@/context/ProjectContext";
import { OtherHeader } from "@/components/Layout/OtherHeader/OtherHeader";
import Head from "next/head";
import { getProjectData } from "@/services/getInfo";

const Blogs = () => {
  const router = useRouter();
  const { project } = useProject();

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  const blogsPerPage = 10;

  // Function to extract unique months and years from blog dates
  const getUniqueMonths = () => {
    const months = project?.blogs.map((blog) => {
      const blogDate = parse(blog.date, "MMMM d, yyyy", new Date());
      return format(blogDate, "MMMM yyyy");
    });

    // Get unique months
    return [...(new Set(months) as any)];
  };

  // Filter blogs by selected month and year
  const filteredBlogs = project?.blogs.filter((blog) => {
    if (!selectedDate) return true;

    const blogDate = parse(blog.date, "MMMM d, yyyy", new Date());
    const [month, year] = selectedDate.split(" ");
    const selectedBlogDate = new Date(`${month} 1, ${year}`);

    return (
      blogDate.getMonth() === selectedBlogDate.getMonth() &&
      blogDate.getFullYear() === selectedBlogDate.getFullYear()
    );
  });

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = filteredBlogs?.slice(indexOfFirstBlog, indexOfLastBlog);

  const handlePageChange = (event: ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
  };

  const handleOpenBlog = (blogId: string) => {
    try {
      router.push(`/blogs/${blogId}`);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDateClick = (date: string) => {
    setSelectedDate(date);
    setCurrentPage(1);
  };

  const handleResetDate = () => {
    setSelectedDate(null);
    setCurrentPage(1);
  };

  return (
    <>
      <Head>
        <title>Positive Reset Services - Call Today | Blogs</title>
      </Head>

      <OtherHeader />

      <Stack
        direction="row"
        justifyContent="space-between"
        width={1}
        maxWidth={1100}
        margin="0 auto 40px"
        mt={3}
        sx={{
          display: "flex",
          flexDirection: "row",
          "@media (max-width: 600px)": {
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          },
        }}
      >
        <Stack
          component="section"
          direction="row"
          flexWrap="wrap"
          gap={5}
          maxWidth={800}
          sx={{
            "@media (max-width: 600px)": {
              alignItems: "center",
              justifyContent: "center",
            },
            "@media (max-width: 1100px)": {
              p: "0 16px",
            },
          }}
        >
          {currentBlogs?.length !== 0 ? (
            currentBlogs
              ?.map((blog) => (
                <Stack
                  key={blog.id}
                  onClick={() => handleOpenBlog(blog.id)}
                  width={1}
                  maxWidth={380}
                  sx={{
                    cursor: "pointer",
                  }}
                >
                  <Stack
                    sx={{
                      position: "relative",
                      width: "100%",
                      maxWidth: 380,
                      height: "auto",
                      mb: 1,
                    }}
                  >
                    <Image
                      src={blog?.image}
                      alt={blog?.title}
                      title={blog?.title}
                      width={380}
                      height={300}
                      sizes="(min-width: 808px) 50vw, 100vw"
                      loading="lazy"
                      style={{
                        objectFit: "contain",
                        height: "auto",
                        maxHeight: "100%",
                      }}
                    />
                  </Stack>

                  <Stack gap={2}>
                    <Typography component="h3" fontSize={19} fontWeight={600}>
                      {blog?.title}
                    </Typography>

                    <Stack fontSize={18} fontWeight={300}>
                      <p
                        style={{ margin: 0 }}
                        dangerouslySetInnerHTML={{
                          __html:
                            blog?.text?.length > 350
                              ? blog?.text?.slice(0, 350) + "..."
                              : blog?.text,
                        }}
                      />

                      <Box component="span" color="#3498db" fontWeight={500}>
                        Read more
                      </Box>
                    </Stack>

                    <Box borderBottom="1px solid #BEBEBE" />

                    <Typography fontStyle="italic" fontWeight={300} color="#a8a8a8">
                      {blog?.date}
                    </Typography>
                  </Stack>
                </Stack>
              ))
              .reverse()
          ) : (
            <Typography fontSize={24}>
              We don`t have any blogs as of this date{" "}
              <Box component="span" color="#3498db" fontWeight={600}>
                {selectedDate}
              </Box>{" "}
              select another date
            </Typography>
          )}
        </Stack>

        <Stack component="aside" width={1} maxWidth={200}>
          <Button
            variant="outlined"
            color="primary"
            onClick={handleResetDate}
            sx={{ mb: 2, width: "100%" }}
          >
            Show All Blogs
          </Button>

          <Typography variant="h6" gutterBottom fontWeight={600}>
            Archive
          </Typography>

          <Box borderBottom="1px solid #BEBEBE" mb={2} />

          {getUniqueMonths().map((date, index) => (
            <Typography
              key={index}
              sx={{
                cursor: "pointer",
                mb: 1,
                fontWeight: selectedDate === date ? 700 : 400,
                color: selectedDate === date ? "#3498db" : "inherit",
                transition: ".3s",
                ":hover": {
                  transition: ".3s",
                  color: "#BEBEBE",
                },
              }}
              onClick={() => handleDateClick(date)}
            >
              {date}
            </Typography>
          ))}
        </Stack>
      </Stack>

      <Stack alignItems="center" my={5}>
        <Pagination
          count={filteredBlogs ? Math.ceil(filteredBlogs.length / blogsPerPage) : 1}
          page={currentPage}
          onChange={handlePageChange}
          variant="outlined"
          color="primary"
        />
      </Stack>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  try {
    const project = await getProjectData();
    return {
      props: { project },
      revalidate: 60,
    };
  } catch {
    return { props: { project: null }, revalidate: 60 };
  }
};

export default Blogs;
