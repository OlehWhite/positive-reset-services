import { FC, useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { useRouter } from "next/router";
import { Link } from "./styled";
import { Covid19 } from "./Covid19/Covid19";

type Anchor = "right";

export const Sidebar: FC = () => {
  const [state, setState] = useState([
    { right: false }, // Початковий стан для першого Drawer
  ]);
  const router = useRouter();
  const currentPath = router.pathname;

  const toggleDrawer =
    (index: number, open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      const newState = [...state];
      newState[index] = { right: open }; // Оновлюємо стан лише для відповідного Drawer
      setState(newState);
    };

  const list = (anchor: Anchor, index: number) => (
    <Box
      role="presentation"
      onClick={toggleDrawer(index, false)}
      onKeyDown={toggleDrawer(index, false)}
    >
      <Covid19 />
    </Box>
  );

  return (
    <div>
      {state.map((drawer, index) => (
        <div key={index}>
          <Link
            onClick={toggleDrawer(index, true)}
            sx={{ color: currentPath === "/" ? "white" : "#555" }}
          >
            COVID-19
          </Link>
          <Drawer anchor="right" open={drawer.right} onClose={toggleDrawer(index, false)}>
            {list("right", index)}
          </Drawer>
        </div>
      ))}
    </div>
  );
};
