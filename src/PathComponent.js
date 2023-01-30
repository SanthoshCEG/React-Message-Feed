import RouterPageOne from "./components/RouterPageOne";
import PostFeed from './components/PostFeed'

export const ROUTE_PATH=[
    {
        path:'buzz-home',
        component:(
            
            <PostFeed/>
            
        )
    },
    {
        path:'my-buzz-pos',
        component:(
            <RouterPageOne value='my posts are here'/>
        )
    },
    {
        path:'draft-posts',
        component:(
            <RouterPageOne value='Non sent posts'/>
        )
    },
    {
        path:'my-followers',
        component:(
            <RouterPageOne value='My Followers'/>
        )
    },
    {
        path:'i-am-following',
        component:(
            <RouterPageOne value='I am Following'/>
        )
    },
    {
        path:'my-teams',
        component:(
            <RouterPageOne value='My Team'/>
        )
    },
    {
        path:'my-reporters',
        component:(
            <RouterPageOne value='My Reporters'/>
        )
    },
    {
        path:'spam',
        component:(
            <RouterPageOne value='Spam Users'/>
        )
    },
    {
        path:'settings',
        component:(
            <RouterPageOne value='Settings'/>
        )
    },
    {
        path:'saved-posts',
        component:(
            <RouterPageOne value='Saved Posts'/>
        )
    }
]