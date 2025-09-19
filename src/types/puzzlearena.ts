export type PlaytestForm = {
  name: string;
  email: string;
  platform: "ios" | "android" | "ambas";
  country?: string;
  gamerType?: "casual" | "midcore" | "hardcore";
  message?: string;

  utm_source?: string | null;
  utm_medium?: string | null;
  utm_campaign?: string | null;
  utm_content?: string | null;
  channel?: string | null;
};
