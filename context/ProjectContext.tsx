import React, { createContext, useContext, useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "@/services/firebase";
import { Website } from "@/services/types";
import { CURRENT_WEBSITE, DEFAULT_WEBSITE } from "@/services/constants";

interface ProjectContextType {
  project: Website;
  isLoading: boolean;
}

const ProjectContext = createContext<ProjectContextType>({
  project: DEFAULT_WEBSITE,
  isLoading: true,
});

export const useProject = () => useContext(ProjectContext);

export const ProjectProvider: React.FC<{
  children: React.ReactNode;
  initialProject?: Website | null;
}> = ({ children, initialProject }) => {
  const [project, setProject] = useState<Website>(
    initialProject || DEFAULT_WEBSITE
  );
  const [isLoading, setIsLoading] = useState(!initialProject);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, "projects"),
      (snapshot) => {
        const projectsData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        const websiteData =
          projectsData[0]?.[CURRENT_WEBSITE.POSITIVE_RESET_SERVICES];
        if (websiteData) {
          setProject(websiteData as Website);
        }
        setIsLoading(false);
      },
      () => setIsLoading(false)
    );

    return () => unsubscribe();
  }, []);

  return (
    <ProjectContext.Provider value={{ project, isLoading }}>
      {children}
    </ProjectContext.Provider>
  );
};
