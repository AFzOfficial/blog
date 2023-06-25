import { useEffect, useState } from 'react';
import { getRequest } from '../../utils/Axios';

import { PostCard } from '../'

const Posts = () => {

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

    getRequest('posts/', config)
      .then(response => setData(response.data))
      .catch(error => setError(error.response.data.detail))
      .finally(() => {
        setTimeout(() => {
          setLoading(false);
        }, 1000)
      })

  }, [])


  return (

    <div className='flex flex-col justify-center items-center p-4'>

      {loading &&
        <p>Loading Posts..</p>
      }

      {!loading && data && !error &&
        <div className='flex flex-col max-w-screen-lg w-full md:w-3/5 xl:w-1/2 2xl:w-[700px] gap-4'>
          {
            data.length > 0 ?
              data.map((post) => (
                <PostCard key={post.id} id={post.id} title={post.title} content={post.content} date={post.formatted_date} />
              )) :
              <p className='text-center'>Nothing...</p>
          }
        </div>
      }

      {error && !loading &&
        <p>{error}</p>
      }


    </div>
  )
}


export default Posts