import React from "react";
import Image from "next/image";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: <Image src="/logo.png" width="120" height="50" alt="ORX API Logo" />,
  project: {
    link: "https://github.com/ndcsol",
  },
  chat: {
    link: "https://discord.com",
  },
  docsRepositoryBase: "https://github.com/ndcsol/orx-docs",
  footer: {
    text: `ORX Travel API ${new Date().getFullYear()}`,
  },
  head: (
    <>
      <link rel="icon" href="/favicon.png" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content="ORX API Documentation" />
    </>
  ),
  useNextSeoProps: () => {
    return {
      titleTemplate: "%s - ORX API",
    };
  },
};

export default config;
