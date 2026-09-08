module.exports = {
  apps: [
    {
      name: "orbytes-global",
      script: "server.js",
      cwd: "./.next/standalone",
      instances: "max",
      exec_mode: "cluster",
      autorestart: true,
      watch: false,
      max_memory_restart: "1G",
      env: {
        NODE_ENV: "production",
        PORT: 3000,
      },
    },
  ],
};
