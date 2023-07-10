import { useState, useEffect } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { getRequest, delRequest } from '../../utils/Axios'
import { HiOutlineTrash } from "react-icons/hi2"

const Post = () => {

  const { id } = useParams();
  const navigate = useNavigate();

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const config = {
    headers: {
      'Content-Type': 'application/json',
    }
  };

  useEffect(() => {

    setLoading(true);

    getRequest(`posts/${id}`, config)
      .then(response => setData(response.data))
      .catch(error => setError(error.message))
      .finally(() => {
        setTimeout(() => {
          setLoading(false);
        }, 1000)
      });

  }, []);


  const handleDeletePost = () => {
    delRequest(`posts/${id}`)
      .then((response) => {
        if (response.status === 204) {
          navigate('/logs');
        }
      }).catch(error => {
        if (error.response.status === 401) {
          localStorage.removeItem('token');
          navigate('/admin/login');
        } else {
          setError(error.message);
        }
      });
  }

  return (
    <div className="max-w-screen-md flex flex-col justify-center items-center mx-auto mt-4 min-h-screen">

      {loading &&
        <p>Loading The Post..</p>
      }

      {error && !loading &&
        <p className="text-red-500"> {error} </p>
      }

      {!loading && data && !error &&

        <div className="mx-2 my-4">
          <div className="px-6 py-4 space-y-4">
            <h1 dir='auto' className='text-3xl mb-10'>{data.title}</h1>

	    <div dir='auto'>
            <ReactMarkdown className='whitespace-pre-wrap' renderers={{
              code: Highlighter
            }}>{data.content}</ReactMarkdown>
		</div>
          </div>

          <div className="flex justify-center mx-auto gap-4 mt-8">
            <Link to="/logs">
              <button className="bg-zinc-700/40 text-gray-200 hover:bg-zinc-700 p-2 transition duration-100 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
                </svg>
              </button>
            </Link>


            {localStorage.getItem('token') &&
              <button onClick={handleDeletePost} className="bg-zinc-700/40 text-red-500 transition duration-100 hover:bg-zinc-700 p-2 rounded-full">
                <HiOutlineTrash className='w-7 h-7' />
              </button>
            }
          </div>


        </div>
      }


    </div>
  )
}


const Highlighter = ({value, language}) => {
  return (
    <SyntaxHighlighter language={language ?? null} style={docco}>
      {value ?? ''}
    </SyntaxHighlighter>
  );
};



export default Post
