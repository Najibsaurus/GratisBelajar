import React, { Component } from 'react'
import { withRouteData } from 'react-static';

class Course extends Component {
  render() {
    const { title, youtubeId, category } = this.props.course
    return (
      <div>
        <h1>{ title }</h1>
        <h4>{ category }</h4>
        <iframe
          title={title}
          width="640"
          height="360"
          src={`https://www.youtube.com/embed/${youtubeId}`}
        />
      </div>
    )
  }
}

export default withRouteData(Course)
