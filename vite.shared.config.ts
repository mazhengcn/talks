export default {
  server: {
    fs: {
      strict: false,
      allow: [new URL(".", import.meta.url).pathname],
    },
  },
};
