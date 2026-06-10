// breakpoints.ts
export const breakpoints = {
  sm: '640px',   // Mobile nhỏ
  md: '768px',   // Mobile lớn/Tablet
  lg: '1024px',  // Desktop nhỏ
  xl: '1280px',  // Desktop lớn
};

export const media = {
  sm: `max-width: ${breakpoints.sm}`,
  md: `max-width: ${breakpoints.md}`,
  lg: `max-width: ${breakpoints.lg}`,
  xl: `max-width: ${breakpoints.xl}`,
};