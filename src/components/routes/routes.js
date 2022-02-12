import About from '../pages/About';
import Posts from '../pages/Posts';
import PostPage from '../PostPage';
import NotFound from '../pages/NotFound';

export const rountes = [
  {path: '*', component: NotFound},
  {path: '/', component: Posts},
  {path: '/posts', component: Posts},
  {path: '/posts/id:id', component: PostPage},
  {path: '/about', component: About},
];