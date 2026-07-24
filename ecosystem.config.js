module.exports = {
  apps: [
    {
      name: "zvolta-drivers-manual",
      cwd: "/home/zvolta-drivers-manual",
      script: "npm",
      args: "run start",
      env: {
        NODE_ENV: "production",
        PORT: "3003",
      },
    },
  ],
};
