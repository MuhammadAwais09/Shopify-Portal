import React, { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import Loadable from '../layouts/full/shared/loadable/Loadable';

/* ***Layouts**** */
const FullLayout = Loadable(lazy(() => import('../layouts/full/FullLayout')));
const BlankLayout = Loadable(lazy(() => import('../layouts/blank/BlankLayout')));

/* ****Pages***** */
const Inbox = Loadable(lazy(() => import('../views/inbox/Inbox')));
const TrainYourBot = Loadable(lazy(() => import('../views/trainYourBot/TrainYourBot')));
const Analytics = Loadable(lazy(() => import('../views/analytics/Analytics')));
const Team = Loadable(lazy(() => import('../views/team/Team')));
const Connect = Loadable(lazy(()=> import('../views/connect/Connect')))
const Error = Loadable(lazy(() => import('../views/authentication/Error')));

const Router = [
 {
    path: '/',
    element: <FullLayout/>,
    children: [
      { path: '/inbox', element: <Inbox /> },
      { path: '/trainyourbot', element: <TrainYourBot /> },
      { path: '/analytics', element: <Analytics /> },
      { path: '/team', element: <Team /> },
      { path: '/connect', element: <Connect /> },
      { path: '*', element: <Navigate to="/auth/404" /> },
    ],
 },
 {
    path: '/auth',
    element: <BlankLayout />,
    children: [
      { path: '404', element: <Error /> },
      { path: '*', element: <Navigate to="/auth/404" /> },
    ],
 },
];

export default Router;
