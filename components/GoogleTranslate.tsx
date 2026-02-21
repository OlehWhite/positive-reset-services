import React, { useEffect, useState } from "react";
import { useProject } from "@/context/ProjectContext";
import { Box } from "@mui/material";

const GTranslate = () => {
  const { project } = useProject();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (project && loading) {
      const script = document.createElement("script");
      script.src = "https://cdn.gtranslate.net/widgets/latest/flags.js";
      script.defer = true;
      script.id = "gtranslate-script";
      document.body.appendChild(script);

      window.gtranslateSettings = {
        default_language: "en",
        languages: project?.languages,
        wrapper_selector: ".gtranslate_wrapper",
        flag_size: 24,
        flag_style: "3d",
        alt_flags: { en: "usa" },
      };

      setLoading(false);
    }
  }, [project, loading]);

  return (
    <Box position="absolute" top={0} right={0} zIndex={999}>
      <div className="gtranslate_wrapper" />
    </Box>
  );
};

export default GTranslate;
