import Blogs from './components/blogs.vue';
import AddBlog from './components/add-blog.vue';
import Currencies from './components/currencies.vue';
import Blog from './components/blog.vue';

export const Routes = [
  {
    path: '/currencies',
    component: Currencies
  },
  {
    path: '/add',
    component: AddBlog
  },
  {
    path: '/',
    component: Blogs
  },
  {
    path: '/blog/:id',
    component: Blog
  }
];
