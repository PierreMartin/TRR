import React from 'react';
// import PropTypes from 'prop-types';
import { Link, Route } from 'react-router-dom';
import FilmsPage from '../filmsPage/filmsPage';
import CSSPage from '../cssPage/cssPage';
import HTMLPage from '../htmlPage/htmlPage';

const renderDefault = () => (
	<h3>Please select a topic</h3>
);

const CoursesPage = ({ match }) => (
	<div className="row">
		<div className="col-sm-2">
			<h2>Topics</h2>
			<ul>
				<li><Link to={`${match.path}/films`}>films</Link></li>
				<li><Link to={`${match.path}/css`}>css</Link></li>
				<li><Link to={`${match.path}/html`}>html</Link></li>
			</ul>
		</div>

		<div className="col-sm-10">
			<h1>List of courses :</h1>

			<div className="alert alert-success layoutCourse">
				<Route exact path={match.path} render={renderDefault} />
				<Route path={`${match.path}/films`} component={FilmsPage} />
				<Route path={`${match.path}/css`} component={CSSPage} />
				<Route path={`${match.path}/html`} component={HTMLPage} />
			</div>
		</div>

		{/*
		<Route path={`${match.path}/:topicId`} component={TopicPage} />
		*/}

	</div>
);

CoursesPage.propTypes = {

};


export default CoursesPage;
