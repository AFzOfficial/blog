import { useEffect, useRef, useState } from "react"
import { HiPaperAirplane } from 'react-icons/hi2'
import { useNavigate } from "react-router-dom"
import TextareaAutosize from 'react-textarea-autosize'

import { postRequest, getRequest } from '../../utils/Axios'

const Admin = () => {

  const [status, setStatus] = useState(null);

  const title = useRef();
  const content = useRef();

  const navigate = useNavigate();


  useEffect(() => {

    const token = localStorage.getItem('token');

    if (!token) {
      navigate('/admin/login');
    } else {

      const config = {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        }
      };

      getRequest('login/verify/', config)
        .catch(error => {
          if (error.response.status === 401) {
            localStorage.removeItem('token');
            useNavigate('/admin/login');
          }
        });
    }
  }, []);


  const handleAddPost = () => {

    const postTitle = title.current.value;
    const postContent = content.current.value;

    if (postTitle.length > 0 && postContent.length > 0) {

      const payload = {
        title: postTitle,
        content: postContent,
      };

      const config = {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
      };

      postRequest('posts/', payload, config)
        .then(response => {
          if (response.status === 201) {
            setStatus('Post Created.');
          }
        })
        .catch(error => {
          if (error.response.status === 401) {
            localStorage.removeItem('token');
            navigate('/admin/login');
          } else {
            setStatus(error.message.statusText);
          }
        }).finally(() => {
          setTimeout(() => {
            setStatus(null);
          }, 5000);
        });




    }
  }

  return (


    <div className="p-4 flex flex-col justify-center items-center gap-6 mx-auto">

      {status &&
        <p className="text-red-500"> {status} </p>
      }

      <div className="w-full sm:w-3/5 lg:w-[500px] rounded-lg p-4 flex items-center flex-col gap-4 mt-4">

        <input ref={title} type="text" className="outline-none bg-zinc-800 rounded-lg p-3 w-full sm:w-72" placeholder="Post Title" />

        <TextareaAutosize dir="auto" ref={content}
          minRows={5}
          maxRows={10}
          className="outline-none resize-none rounded-lg bg-zinc-800 p-3 w-full"
          placeholder="Text.."
        />


        <div className="flex justify-center">
          <button onClick={handleAddPost} className="flex items-center bg-zinc-800 hover:bg-zinc-700 mt-8 font-medium text-gray-300 rounded-full p-2">
            <HiPaperAirplane className="w-7 h-7 text-blue-600" />
          </button>
        </div>

      </div>



    </div>
  )
}

export default Admin