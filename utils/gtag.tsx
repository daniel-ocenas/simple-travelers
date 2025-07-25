// exporting our google analytics measurement id from our .env.local.production file
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID;
declare global {
  interface Window {
    gtag: any;
  }
}
// records data on each page visited
export const pageView = (url: string) => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  });
};

// handles any custom event we want to track. For eg. how many clicks has our subscribe button
export const event = ({ action, category, label, value }: any) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};
