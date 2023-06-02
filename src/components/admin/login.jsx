import { useRef, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";

import { postRequest } from '../../utils/Axios'

const Login = () => {

  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const token = localStorage.getItem('token');

  useEffect(() => {
    if (token) {
      navigate('/admin');
    }
  }, []);


  const username = useRef();
  const password = useRef();


  const handleLogin = async (e) => {
    e.preventDefault();

    const formData = new URLSearchParams();
    formData.append('username', username.current.value);
    formData.append('password', password.current.value);


    const config = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    };

    postRequest('auth/token', formData, config)
      .then(response => {
        if (response.status === 200) {
          localStorage.setItem('token', response.data.access_token);
          navigate('/admin');
        }
      })
      .catch(error => {
        setError(error.response.data.detail);

        setTimeout(() => {
          setError(null);
        }, 5000);
      })
  }


  return (
    <div className="max-w-screen-lg flex justify-center mx-auto mt-12">
      <form className="px-4 w-80">

        <div className="flex justify-center flex-col gap-8">
          {error &&
            <p className="text-red-500 text-center">{error}</p>
          }

          <h1 className="text-center text-xl">admin login</h1>

          <input type="text" autoComplete="off" ref={username}
            className="p-3 shadow outline-none text-sm rounded-lg bg-zinc-700/95 placeholder-gray-400 text-white"
            placeholder="Username" />

          <input type="password" autoComplete="off" ref={password}
            className="p-3 shadow outline-none text-sm rounded-lg bg-zinc-700/95 placeholder-gray-400 text-white"
            placeholder="******" />


          <button onClick={handleLogin} className="bg-blue-600 hover:bg-blue-700 px-4 py-2 font-semibold rounded-full">
            Login
          </button>
        </div>


      </form>
    </div>
  )
}

export default Login