module.exports = {
  apps: [
    {
      name: "zvolta-node-app",
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
