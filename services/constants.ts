import { Website } from "./types";

export const DEFAULT_WEBSITE: Website = {
  id: "",
  keyName: "",
  title: "",
  address: "",
  tel: "",
  googleMaps: "",
  email: "",
  headerImages: [],
  schedule: [
    { day: "Sunday", open: "", close: "" },
    { day: "Monday", open: "", close: "" },
    { day: "Tuesday", open: "", close: "" },
    { day: "Wednesday", open: "", close: "" },
    { day: "Thursday", open: "", close: "" },
    { day: "Friday", open: "", close: "" },
    { day: "Saturday", open: "", close: "" },
  ],
  links: [
    { title: "Instagram", link: "" },
    { title: "Facebook", link: "" },
    { title: "LinkedIn", link: "" },
    { title: "Twitter", link: "" },
  ],
  blogs: [],
  locations: [],
  ourPartners: [],
  providers: [],
  languages: [],
  video: "",
  videoIcon: "",
  googleId: "",
};

export const DEFAULT_FEEDBACK = [
  {
    title: "- Becca - Depression, Anxiety, Suicidal, Acting, TMS",
    text: "I was quite literally standing on an edge, ready to jump off. And now I haven’t had a thought like that in weeks. I’m feeling a lot more like myself from my golden days. I’m, like, ready to start working on things again. It’s been really, really exciting. Having the energy to do that, just do things again.",
  },
  {
    title: "- Christopher - PTSD, Anxiety, Depression, Veteran, Work, TMS, Ketamine",
    text: "When you’re stuck in these places of depression and PTSD and anxiety, it’s like, you’re not really living a life, you’re just trying to manage a life. And, you know, I feel like, for the first time in a really long time, I’m living a life.",
  },
  {
    title: "- Mitchell - Depression, Anxiety, College, Ketamine, TMS",
    text: "My parents didn’t realize what I had was depression, pretty serious depression too, for quite a long time. I came to serenity because I went to numerous doctors and tried numerous different medications for treating depression and anxiety with no luck… Like a month or two later (after starting TMS), I just felt fantastic.",
  },
];

export enum CURRENT_WEBSITE {
  POSITIVE_RESET_SERVICES = "POSITIVE_RESET_SERVICES",
}
