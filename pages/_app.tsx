// Custom App component for Next.js

import React from 'react';
import App from 'next/app';

const MyApp = ({ Component, pageProps }) => <Component {...pageProps} />;

export default MyApp;