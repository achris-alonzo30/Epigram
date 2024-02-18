export function formatNumber(views: number | null) {
  if (!views) return 0;
  
  if (views < 1000) {
    return views.toString(); // No formatting needed for less than 1000 views
  } else if (views < 1000000) {
    // Format the views in thousands (k)
    return (views / 1000).toFixed(1).replace(/\.0$/, "") + "k";
  } else {
    // Format the views in millions (M)
    return (views / 1000000).toFixed(1).replace(/\.0$/, "") + "M";
  }
}
