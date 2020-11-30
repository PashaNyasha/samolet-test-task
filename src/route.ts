// eslint-disable-next-line import/no-anonymous-default-export
export const HOME_ROUTE = {
    name: 'home',
    path: '/library',
    loadAction: () => import('./index'),
};
