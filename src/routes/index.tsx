// react
import { Suspense, lazy, ElementType } from "react";
// router
import { useRoutes } from "react-router";
import { Navigate } from "react-router-dom";
// layouts
import MainLayout from "../layouts/MainLayout";
// components
import LoadingScreen from '../components/LoadingScreen'


// ----------------------------------------------------------------

const Loadable = (Component: ElementType) => (props: any) => 
(
    <Suspense fallback={<LoadingScreen />}>
        <Component {...props} />
    </Suspense>
)

export default function Router () {
    return useRoutes([
        {
            path: '/',
            element: <MainLayout />,
            children: [
                { element: <Navigate to="/todo" replace />, index: true },
                { path: '/todo', element: <TodoPage /> }
            ]
        },
        {
            path: '*',
            element: <MainLayout />,
            children: [
                { path: '404', element: <NotFound/> },
                { path: '*', element: <NotFound /> },
            ],
        },
        { path: '*', element: <Navigate to="/404" replace /> }
    ])
}

// Routes
const TodoPage = Loadable(lazy(() => import('../pages/TodoPage')));
const NotFound = Loadable(lazy(() => import('../pages/NotFound')));
