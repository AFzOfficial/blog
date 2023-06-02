import { Link } from "react-router-dom"
import ReactMarkdown from 'react-markdown'

const PostCard = ({ id, title, content, date }) => {
  return (
    <Link to={`/logs/${id}`}>
      <div className="bg-zinc-900 hover:bg-zinc-800 rounded-lg my-2 border border-zinc-800">
        <div className="px-6 py-4">

          <h1 dir="auto" className="line-clamp-1">{title}</h1>

          <div  dir='auto' className="min-h-[60px] mt-4">
            <ReactMarkdown className="text-zinc-400 line-clamp-2 text-sm">{content.slice(0, 250)}</ReactMarkdown>
          </div>
          <span className="text-xs font-semibold block line-clamp-1">{date}</span>
        </div>

      </div>
    </Link>
  )
}


export default PostCard
