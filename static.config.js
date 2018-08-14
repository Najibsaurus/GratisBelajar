// import axios from 'axios'
import React, { Component } from 'react'
import { ServerStyleSheet } from 'styled-components'
import data from './_data.json'


function slugify(text) {
  return text.toString().toLowerCase()
  .replace(/\s+/g, '-')           // Replace spaces with -
  .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
  .replace(/\-\-+/g, '-')         // Replace multiple - with single -
  .replace(/^-+/, '')             // Trim - from start of text
  .replace(/-+$/, '');            // Trim - from end of text
}


export default {
  getSiteData: () => ({
    title: 'React Static',
  }),
  getRoutes: async () => {
    let newData = {}
    let oldData = data.map((item) => ({
      ...item,
      slug: slugify(item.title)
    }))

    oldData.forEach((item) => {
      const arr = newData[item.category]
      if (!arr) {
        newData[item.category] = []
      }
      newData[item.category].push({
        ...item,
      })
    })

    return [
      {
        path: '/',
        component: 'src/pages/Home',
        getData: () => ({
          courses: newData
        }),
        children: oldData.map((course) => ({
          path: `/course/${course.category}/${course.slug}`,
          component: 'src/pages/Course',
          getData: () => ({
            course,
          })
        }))
      },
      {
        path: '/about',
        component: 'src/pages/About',
      },
      // {
      //   path: '/blog',
      //   component: '/src/pages/Blog',
      //   getData: () => ({
      //     courses: newData
      //   }),
        
      // },
      // {
      //   path: '/blog',
      //   component: 'src/pages/Blog',
      //   getData: () => ({
      //     posts,
      //   }),
      //   children: posts.map(post => ({
      //     path: `/post/${post.id}`,
      //     component: 'src/pages/Post',
      //     getData: () => ({
      //       post,
      //     }),
      //   })),
      // },
      {
        is404: true,
        component: 'src/pages/404',
      },
    ]
  },
  renderToHtml: (render, Comp, meta) => {
    const sheet = new ServerStyleSheet()
    const html = render(sheet.collectStyles(<Comp />))
    meta.styleTags = sheet.getStyleElement()
    return html
  },
  Document: class CustomHtml extends Component {
    render () {
      const {
        Html, Head, Body, children, renderMeta,
      } = this.props

      return (
        <Html>
          <Head>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            {renderMeta.styleTags}
          </Head>
          <Body>{children}</Body>
        </Html>
      )
    }
  },
}
