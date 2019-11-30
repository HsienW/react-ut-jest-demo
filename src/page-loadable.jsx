import React from 'react';
import Loadable from 'react-loadable';

const LoadingPage = () => {
    return (<div>Loading...</div>);
};

export const Auth = Loadable({
    loader: () => import('./Containers/Auth/Auth'),
    loading: LoadingPage
});

export const Home = Loadable({
    loader: () => import('./Containers/Home/Home'),
    loading: LoadingPage
});
