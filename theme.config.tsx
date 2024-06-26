import React from "react";
import { DocsThemeConfig, useConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  docsRepositoryBase: "https://github.com/conduitxyz/conduit-docs/blob/main",
  logo: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 474 81"
      style={{ overflow: "visible", width: "auto", height: 24 }}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M60.727 40.495c1.908.161 3.807.738 5.575 1.768 6.403 3.74 8.6 12.016 4.901 18.487-3.7 6.471-11.889 8.693-18.291 4.954a13.362 13.362 0 0 1-4.303-3.994 13.54 13.54 0 0 1 1.281 5.757C49.89 74.94 43.894 81 36.5 81s-13.39-6.06-13.39-13.533c0-2.061.463-4.008 1.281-5.757a13.41 13.41 0 0 1-4.303 3.994C13.685 69.443 5.496 67.22 1.797 60.75c-3.7-6.476-1.502-14.753 4.901-18.487a13.245 13.245 0 0 1 5.575-1.768 13.226 13.226 0 0 1-5.575-1.758c-6.403-3.74-8.6-12.016-4.901-18.487 3.7-6.471 11.888-8.693 18.291-4.954a13.392 13.392 0 0 1 4.294 4 13.623 13.623 0 0 1-1.272-5.763C23.11 6.06 29.106 0 36.5 0s13.39 6.06 13.39 13.533c0 2.061-.458 4.013-1.272 5.762a13.344 13.344 0 0 1 4.294-3.999c6.402-3.739 14.592-1.517 18.291 4.954 3.7 6.471 1.502 14.748-4.901 18.487a13.226 13.226 0 0 1-5.575 1.758ZM47.299 59.313a13.626 13.626 0 0 1 .711-12.096 13.36 13.36 0 0 1 10.009-6.67L36.505 40.5 47.22 21.644c-2.442 3.295-6.338 5.427-10.72 5.427-4.382 0-8.278-2.132-10.72-5.427L36.495 40.5l-21.514.047a13.356 13.356 0 0 1 10.009 6.67c2.193 3.838 2.31 8.31.71 12.096l10.8-18.804 10.8 18.804Z"
        fill="currentColor"
      />
      <path
        d="M420.603 22.46h13.337v55.351h-13.337v-55.35ZM420.202 15.141V0h14.139v15.141h-14.139ZM473.621 77.811h-8.723c-5.682 0-9.927-1.27-12.735-3.81-2.807-2.54-4.211-7.287-4.211-14.239V34.494h-10.128V22.46h10.128V10.027l13.336-3.71v16.144h11.03v12.033h-11.03v25.87c0 1.872.368 3.275 1.103 4.211.802.936 2.306 1.404 4.512 1.404h6.718v11.832ZM397.613 77.811h13.035v-55.35h-13.336v26.773c0 5.682-1.17 9.993-3.51 12.935-2.339 2.941-5.448 4.412-9.325 4.412-6.284 0-9.425-3.577-9.425-10.73v-33.39h-13.337v34.393c0 6.886 1.839 12.2 5.515 15.944 3.677 3.743 8.524 5.615 14.54 5.615 7.019 0 12.3-2.808 15.843-8.423v7.821Z"
        fill="currentColor"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M353.221 77.811h-13.036v-8.523c-1.47 3.075-3.71 5.481-6.718 7.22-2.941 1.67-6.384 2.506-10.328 2.506-6.885 0-12.668-2.506-17.347-7.52-4.613-5.014-6.919-12.1-6.919-21.258 0-9.225 2.273-16.31 6.819-21.257 4.612-5.014 10.361-7.52 17.246-7.52 3.677 0 7.019.735 10.028 2.205 3.008 1.404 5.314 3.443 6.918 6.117V1.404h13.337V77.81Zm-36.8-15.342c2.674 2.875 5.949 4.312 9.826 4.312 3.878 0 7.187-1.437 9.927-4.312 2.741-2.94 4.111-7.085 4.111-12.433s-1.37-9.46-4.111-12.334c-2.74-2.941-6.049-4.412-9.927-4.412-3.877 0-7.152 1.471-9.826 4.412-2.674 2.875-4.011 6.986-4.011 12.334s1.337 9.492 4.011 12.433Z"
        fill="currentColor"
      />
      <path
        d="M288.388 26.773c-3.008-3.543-7.52-5.315-13.536-5.315-7.354 0-12.869 3.008-16.545 9.025V22.46h-13.236v55.35h13.336v-29.88c0-4.48 1.07-8.023 3.209-10.63 2.139-2.607 5.013-3.91 8.623-3.91 2.941 0 5.214.902 6.819 2.707 1.671 1.738 2.506 4.145 2.506 7.22V77.81h13.337V42.114c0-6.685-1.504-11.798-4.513-15.341Z"
        fill="currentColor"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M211.517 21.458c7.954 0 14.439 2.607 19.452 7.821 5.081 5.148 7.621 12.133 7.621 20.957 0 8.824-2.54 15.843-7.621 21.057-5.013 5.148-11.498 7.721-19.452 7.721-7.889 0-14.373-2.573-19.453-7.72-5.014-5.215-7.521-12.234-7.521-21.058s2.507-15.81 7.521-20.957c5.08-5.214 11.564-7.82 19.453-7.82Zm-.101 12.434c-4.011 0-7.219 1.47-9.626 4.412-2.406 2.874-3.61 6.986-3.61 12.334 0 5.08 1.27 9.024 3.811 11.831 2.54 2.741 5.782 4.112 9.726 4.112 4.011 0 7.22-1.438 9.626-4.312 2.407-2.941 3.61-7.086 3.61-12.434 0-5.08-1.304-8.99-3.911-11.732-2.54-2.807-5.749-4.211-9.626-4.211Z"
        fill="currentColor"
      />
      <path
        d="M160.635 62.269c-3.677 2.674-7.989 4.01-12.935 4.01-7.086 0-12.635-2.573-16.646-7.72-4.01-5.214-6.016-11.531-6.016-18.951 0-7.22 1.905-13.303 5.716-18.25 3.877-4.947 9.459-7.42 16.745-7.42 5.08 0 9.359 1.237 12.835 3.71 3.543 2.473 5.548 5.816 6.016 10.027h14.239c-.936-8.49-4.379-15.074-10.328-19.753-5.95-4.68-13.437-7.02-22.461-7.02-6.083 0-11.531 1.103-16.344 3.31-4.814 2.205-8.691 5.147-11.632 8.823-2.875 3.677-5.081 7.822-6.618 12.434-1.471 4.546-2.206 9.359-2.206 14.44 0 5.28.802 10.294 2.407 15.04 1.604 4.68 3.91 8.891 6.918 12.634 3.008 3.677 6.852 6.618 11.532 8.824 4.746 2.206 9.993 3.31 15.742 3.31 9.025 0 16.712-2.54 23.063-7.621 6.35-5.148 9.793-12.468 10.328-21.96h-14.239c-.401 5.415-2.44 9.46-6.116 12.133Z"
        fill="currentColor"
      />
    </svg>
  ),
  useNextSeoProps() {
    return {
      titleTemplate: "%s – Conduit",
    };
  },
  head: () => {
    const { title } = useConfig();

    const imageUrl = new URL("https://docs.conduit.xyz/og-image.png");

    const description =
      "Deploy fully-managed, production-grade rollups on Ethereum in just a few clicks, no code required.";

    const ogTitle = title ? `${title} – Conduit` : `Conduit`;
    const ogDescription = description;
    const ogImage = imageUrl.toString();

    return (
      <>
        {/* Favicons, meta */}
        <link rel="icon" href="/favicon.png" />
        <meta name="description" content={ogDescription} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@conduitxyz" />
        <meta name="twitter:image" content={ogImage} />
        <meta name="twitter:title" content={ogTitle} />
        <meta property="og:title" content={ogTitle} />
        <meta property="og:description" content={ogDescription} />
        <meta property="og:image" content={ogImage} />
      </>
    );
  },
  primaryHue: 180,
  primarySaturation: 65,
  footer: {
    text: (
      <span>
        MIT {new Date().getFullYear()} ©{" "}
        <a href="https://conduit.xyz" rel="noopener" target="_blank">
          Conduit
        </a>
        .
      </span>
    ),
  },
};

export default config;
