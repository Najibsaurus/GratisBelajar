import React from 'react'
import { withRouteData, Link } from 'react-static'
//
import styled from 'styled-components'

import Illust from './illust.png'

const Wrapper = styled.div`
  display: flex;
  padding: 50px 0;
  flex-wrap: wrap;
`
const Hero = styled.div`
  padding: 40px;
  font-size: 20px;
  font-weight: 200;
  width: 100%;
  max-width: 640px;
  
  p {
    opacity: .7;
    line-height: 1.7;
  }
`
const Image = styled.img`
  height: 400px;
  width: 100%;
  max-width: 500px;
  object-fit: contain;
`

export default withRouteData(({ courses }) => (
  <div>
    <Wrapper>
      <Image src={Illust} alt="Ilustrasi" />
      <Hero>
        <h1>Ilmu untuk semua</h1>
        <h4>Gratis. Selamanya.</h4>
        <p>
          Gratis<i>Belajar</i> adalah platform untuk belajar <b>gratis</b> secara online, yang memiliki misi
          untuk mengubah pendidikan di Indonesia dengan cara menyediakan pembelajaran <b>gratis</b> bagi
          semua orang.
        </p>
      </Hero>
    </Wrapper>
    <Wrapper>
      <div>
        { Object.keys(courses).map((category) => {
          return <div>
            <h1>{category}</h1>
            <div>
              {courses[category].map((course) => {
                return <Link to={`/course/${category}/${course.slug}`}>
                  <h4>{course.title}</h4>
                </Link>
              })}
            </div>
          </div>
        }) }
      </div>
    </Wrapper>
  </div>
))
