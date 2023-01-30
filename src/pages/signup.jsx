import React from 'react'
import { render } from 'react-dom'

class Signup extends React.Component{

    constructor(props) {
        // const { setAuth } = useContext(AuthContext);
        super(props) //super = override attribute 
        this.state = { //  usestate in react component
            user: '',
            email: '',
            pwd: '',
            errMsg:'',
        };

        this.handleChange = this.handleChange.bind(this); 
        this.handleSubmit = this.handleSubmit.bind(this);
        
        
    }
    

    handleChange(event) { //function untuk menghandle event onChange
        this.setState({value: event.target.value}); 
    }

    handleSubmit(event) { // function untuk menghandle onSubmit

        event.preventDefault() // untuk mengoperasikan submit melalui react (manual)
        
        var axios = require('axios'); //fetch POST API using axios
        var data = JSON.stringify({
            "email": document.querySelector("#email").value,
            "name": document.querySelector("#username").value,
            "password": document.querySelector("#password").value
        });

        var config = {
            method: 'post',
            url: 'https://malakh.space/user/register/',
            headers: { 
              'Content-Type': 'application/json'
            },
            data : data
          };
          
          axios(config)
          .then(function (response) {
            console.log(JSON.stringify(response.data));
          })
          .catch((error)=> {
            if(error.response.status === 400) {
                this.setState({ errMsg: 'username/email already exist'})
            }
          });
     }
    
    render() {
        return (
            <div className='mt-9 mx-auto'>
                  <h1 className='text-white text-center font-extralight font-raleway'>CircleKu</h1>
                  <p className={this.state.errMsg === '' ? "offscreen" : "errMsg"}>{ this.state.errMsg }</p>
                  <form onSubmit={ this.handleSubmit } className="mt-4">
                  <div className="mb-2">
                        <label
                            htmlFor="username"
                            className="block text-xs font-semibold"
                            >
                            Username
                        </label>
                        <input
                            autoComplete='off'
                            id="username"
                            type="text"
                            className="block w-full px-4 py-1 mt-2 text-black bg-gray-dark rounded-md  focus:ring-purple-600 focus:outline-none focus:ring focus:ring-opacity-40"
                            />
                    </div>
                    <div className="mb-2">
                        <label
                            htmlFor="email"
                            className="block text-xs font-semibold mt-5"
                            >
                            Email
                        </label>
                        <input
                            autoComplete='off'
                            id="email"
                            type="email"
                            className="block w-full px-4 py-1 mt-2 text-black bg-gray-dark rounded-md  focus:ring-purple-600 focus:outline-none focus:ring focus:ring-opacity-40"
                            />
                    </div>
                    <div className="mb-2">
                        <label
                            htmlFor="password"
                            className="block text-xs font-semibold mt-5"
                            >
                            Password
                        </label>
                        <input
                            id="password"
                            type="password"
                            className="block w-full px-4 py-1 mt-2 text-black bg-gray-dark rounded-md  focus:ring-purple-600 focus:outline-none focus:ring focus:ring-opacity-40"
                            />
                    </div>
                    <div className="mt-6 text-center">
                        <button className="inline-block px-6 py-2 border-2 border-purple-600 text-purple-600 font-medium text-xs leading-tight uppercase rounded-full hover:bg-gray-800 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">
                            Signup
                        </button>
                    </div>
                  </form>
                  <p className="mt-5 text-xs font-light text-center text-gray-500">
                    {" "}
                    Already have an account?{" "}
                    <a
                        onClick = {this.props.handler}
                        className="font-medium text-purple-600 hover:underline"
                        >
                        login
                    </a>
                </p>
              </div>
  )
}
}

export default Signup