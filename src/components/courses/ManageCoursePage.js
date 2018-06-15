import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseForm from './CourseForm';
import toastr from 'toastr';

class ManageCoursePage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      course: Object.assign({}, this.props.course),
      authors: Object.assign({}, this.props.authors),
      saving: false,
      errors: {}
    };

    this.setCourseState = this.setCourseState.bind(this);
    this.saveCourse = this.saveCourse.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.course) {
      if (this.props.course.id != nextProps.course.id) {
        this.setState({course: Object.assign({}, nextProps.course)});
      }
    }
  }

  setCourseState(event) {
    const field=event.target.name;
    let course = this.state.course;
    if (field === "author") {
      const authorIndex=event.target.selectedIndex - 1;
      course['authorId'] = this.props.authors[authorIndex].value;
    } else {
      course[field] = event.target.value;
    }

    return this.setState({course: this.state.course});
  }

  redirect() {
    this.setState({saving: false});
    toastr.success('Course ' + this.state.course.title + ' Saved');
    this.context.router.push('/courses');
  }

  saveCourse(event) {
    event.preventDefault();
    this.setState({saving: true});
    this.props.actions.saveCourse(this.state.course)
      .then(() => this.redirect())
      .catch(error => {
        toastr.error(error);
        this.setState({saving: false});
      });
  }

  render() {
    return (
      <CourseForm course={this.state.course} authors={this.props.authors} onChange={this.setCourseState}
                  onSave={this.saveCourse} errors={this.state.errors} saving={this.state.saving}/>
    );
  }
}

ManageCoursePage.propTypes = {
  course: PropTypes.object.isRequired,
  authors: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

ManageCoursePage.contextTypes = {
  router: PropTypes.object
};


function getCourseById(courses, id) {
  const course = courses.filter(course => course.id == id);

  if (course.length) {
    return course[0];
  } else {
    return null;
  }
}

function mapStateToProps(state, ownProps) {
  const courseId = ownProps.params.id;
  let course = {id:'', watchHref:'', title:'', authorId:'', length:'', category:''};

  if (courseId && state.courses.length > 0) {
    course = getCourseById(state.courses, courseId);
  }
  const listofCourseAuthors = state.authors.map(author => {
    return {
      value: author.id,
      text: author.firstName + ' ' + author.lastName
    };
  });

  return {
    course: course,
    authors: listofCourseAuthors
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
