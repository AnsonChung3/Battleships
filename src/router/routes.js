
const routes = [
    {
        path: '/',
        component: () => import('layouts/CustomLayout.vue'),
        children: [
            { path: '', component: () => import('pages/PropPage.vue') },
            { path: 'DraftGame', component: () => import('pages/DraftGame.vue') },
            { path: 'DraftGameTwo', component: () => import('pages/DraftGame2.vue') }
        ]
    },

    // Always leave this as last one,
    // but you can also remove it
    {
        path: '/:catchAll(.*)*',
        component: () => import('pages/ErrorNotFound.vue')
    }
];

export default routes;
