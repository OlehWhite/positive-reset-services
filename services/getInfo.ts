import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";
import { Website } from "./types";
import { CURRENT_WEBSITE } from "./constants";

export const fetchProjects = async () => {
  try {
    const data = [];
    const querySnapshot = await getDocs(collection(db, "projects"));

    querySnapshot.forEach((doc) => {
      data.push({ id: doc.id, ...doc.data() });
    });

    return data;
  } catch (error) {
    console.error("Error fetching projects:", error);
    return [];
  }
};

export async function getProjectData(): Promise<Website | null> {
  const data = await fetchProjects();
  return (data[0]?.[CURRENT_WEBSITE.POSITIVE_RESET_SERVICES] as Website) ?? null;
}
