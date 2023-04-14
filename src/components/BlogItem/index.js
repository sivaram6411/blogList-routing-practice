// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {blogDetails} = props
  const {title, description, publishedDate} = blogDetails

  return (
    <li className="list-container">
      <div className="blog-list">
        <h1 className="post">{title}</h1>
        <p className="post-description">{publishedDate}</p>
      </div>
      <p className="date">{description}</p>
    </li>
  )
}

export default BlogItem
