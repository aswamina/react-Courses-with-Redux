import React, {PropTypes} from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';

const CourseForm = ({course, authors, onChange, onSave, errors, saving}) => {
  return (
    <form>
      <h2>Manage Courses</h2>
      <TextInput name="title" label="Title" value={course.title} onChange={onChange} errors={errors.title}/>
      <SelectInput name="authorId" label="Authors" value={course.authorId} defaultOption="Select Author"
                   options={authors} onChange={onChange} errors={errors.authorId}/>
      <TextInput name="category" label="Category" value={course.category} onChange={onChange} errors={errors.category}/>
      <TextInput name="length" label="Length" value={course.length} onChange={onChange} errors={errors.length}/>
      <input type="submit" disabled={saving} value={saving ? 'Saving...' : 'Save'}
             className="btn btn-primary" onClick={onSave}/>
    </form>
  );
};

CourseForm.propTypes = {
  course: PropTypes.object.isRequired,
  authors: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  errors: PropTypes.object,
  saving: PropTypes.bool
};

export default CourseForm;
