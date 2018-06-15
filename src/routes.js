import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import AuthorsPage from './components/authors/AuthorsPage';
import CoursesPage from './components/courses/CoursesPage';
import ManageCoursePage from './components/courses/ManageCoursePage';
import NotFoundPage from './components/NotFoundPage';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={HomePage}/>
        <Route path="authors" component={AuthorsPage}/>
        <Route path="courses" component={CoursesPage}/>
        <Route path="course" component={ManageCoursePage} />
        <Route path="course/:id" component={ManageCoursePage} />
        <Route path="about" component={AboutPage}/>
        <Route path="*" component={NotFoundPage}/>
    </Route>
);