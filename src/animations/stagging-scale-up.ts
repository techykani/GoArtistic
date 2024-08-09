export const staggerContainer = {
  from: {},
  to: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
}

export const staggerChild = {
  from: { scale: 0, top: 100 },
  to: { scale: 1, top: 30 },
}
