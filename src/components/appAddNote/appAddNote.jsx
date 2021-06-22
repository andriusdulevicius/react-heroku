import React, { Component } from 'react';
import './style.css';
import Joi from 'joi-browser';
class AppAddNote extends Component {
  state = {
    newNote: {
      title: '',
      body: '',
    },
    isAddOn: true,
    errors: {},
    errorMessage: {
      title: 'The title must be between 3 and 20 chars',
      body: 'The body text must contain at least 5 characters',
    },
  };

  schema = {
    title: Joi.string().alphanum().min(3).max(20).required(),
    body: Joi.string().min(5).required(),
  };

  validateForm = () => {
    const res = Joi.validate(this.state.newNote, this.schema, { abortEarly: false });

    if (!res.error) return;
    console.log(res, 'res');

    const errors = {};
    for (let note of res.error.details) {
      errors[note.path[0]] = note.message;
    }
    return errors;
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const errors = this.validateForm();
    if (errors) {
      this.setState({ errors });
      return;
    } else {
      this.props.onNewNote(this.state.newNote);
      this.setState({ errors: '' });
      // this.setState({ isAddOn: false });
      this.setState({ newNote: { title: '', body: '' } });
    }
  };

  syncInput = (e) => {
    const { name, value } = e.target;
    this.setState({ newNote: { ...this.state.newNote, [name]: value } });
    this.validateProperty(name, value);
  };

  validateProperty = (name, value) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const result = Joi.validate(obj, schema);
    if (result.error) {
      this.setState({ errors: { ...this.state.errors, [name]: result.error.details[0].message } });
    } else {
      const errorsCopy = { ...this.state.errors };
      delete errorsCopy[name];
      this.setState({ errors: errorsCopy });
    }
  };

  render() {
    const { newNote, errors, errorMessage } = this.state;
    return (
      <div className='add-note'>
        <form type='submit' className='flex' onSubmit={this.handleSubmit}>
          <div className={this.state.isAddOn ? 'form-expanded' : 'form-collapsed'}>
            <input
              type='text'
              name='title'
              className={errors.title && 'is-invalid '}
              placeholder='Title'
              onChange={this.syncInput}
              value={newNote.title}
            />
            {errors.title && <p className='error-msg'>{errorMessage.title}</p>}
            <textarea
              className={errors.body && 'is-invalid '}
              value={newNote.body}
              onChange={this.syncInput}
              name='body'
              placeholder='Take a note...'
            ></textarea>
            {errors.body && <p className='error-msg'>{errorMessage.body}</p>}
            <div className='icon-links'>
              <a href='/' icon='check'>
                <i className='fa fa-check'></i>
              </a>
              <a href='/' icon='pencil'>
                <i className='fa fa-pencil'></i>
              </a>
              <a href='/' icon='image'>
                <i className='fa fa-image'></i>
              </a>
            </div>
            <button type='submit'>Close</button>
          </div>
        </form>
      </div>
    );
  }
}

export default AppAddNote;
