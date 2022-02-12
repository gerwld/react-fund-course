import About from '../pages/About';
import Posts from '../pages/Posts';
import PostPage from '../PostPage';

export const rountes = [
  {path: '/about', component: About},
  {path: '/posts', component: Posts},
  {path: '/posts/id:id', component: PostPage},
];