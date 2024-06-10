const nextConfig = {
    transpilePackages: ["@trycreo/ui"],
    ...(process.env.CREO_ENV === "editor" && {
        basePath: `/${process.env.SESSION_BACKEND_STATIC_TOKEN}`,
    }),
    env: {
        BASE_PATH:
            process.env.CREO_ENV === "editor"
                ? `/${process.env.SESSION_BACKEND_STATIC_TOKEN}`
                : "",
    },
};

export default nextConfig;