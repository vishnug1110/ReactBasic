// import { useState, useEffect } from "react";
// import axios from 'axios'
// import Button from "./components/Button";
// import './App.css'
// import styled from "styled-components"
// import {List} from 'antd'
// import { LoadingOutlined } from "@ant-design/icons";
// const App = () => {
//   const [users,setUsers]=useState([]);
//   const [posts,setPosts]=useState([]);
//   const [loading,setLoading]=useState(true);

//   useEffect(()=>{
//     fetchPosts();
//   },[]);

//   const fetchUserData = () =>{
//     axios.get(`http://localhost:8000/api/users`)
//     .then(({data})=>setUsers(data.users))
//     .catch((err)=>console.log(err))

//     // fetch(`http://localhost:8000/api/users`,{
//     //   method:"GET",
//     // })
//     // .then((response) => {
//     //   return response.json();
//     // })
//     // .then((data) => setUsers(data.users))
//     // .catch(err =>console.log(err));

//   };
//   const fetchPosts= () =>{
//     axios.get(`https://jsonplaceholder.typicode.com/posts`)
//     .then(({data})=>{
//       setPosts(data);
//       setLoading(false);
//     })
//     .catch((err)=>console.log(err))


//     // fetch(`https://jsonplaceholder.typicode.com/posts`,{
//     //   method:"GET",
//     // })
//     // .then((response) => {
//     //   return response.json();
//     // })
//     // .then((data) => setPosts(data))
//     // .catch(err =>console.log(err));

//   };


//   if (loading){
//     // return <h1>Loading..</h1>
//     return <LoadingOutlined  className="display-1 text-danger py-5 d-flex justify-content-center align-items-center" style={{height:"100vh"}}/>
//   }
//   return (
//     <div className="container">
//       {/* <pre>{JSON.stringify(users,null,4)}</pre> */}
//       { users && users.map((user)=><div key={user.age}>{user.name}</div>)}
//       <Button handleClick={fetchUserData} title="Fetch User Data"/> 
//       {/* <button onClick={fetchUserData} className="btn btn-primary">fetchUserData</button> */}
//       {/* {posts && posts.map((post)=> <div className="posts"   key={post.id}>{JSON.stringify(post.title)}</div>)} */}
//       {/* {posts && posts.map((post)=> <PostList  key={post.id}>{JSON.stringify(post.title)}</PostList>)} */}
//       <List bordered
//             dataSource={posts}
//             renderItem={(item)=> <List.Item>{item.title}</List.Item>}     
//        />
//     </div>
//   )

// }









// // import { useState } from "react";

// // function App() {
// //   const [email, setEmail]=useState("");
// //   const [password, setPassword]=useState("");
// //   const handleSubmit=(event)=> {
// //     event.preventDefault();
// //     console.log(email,"    ",password)}
// //   return (
// //     <div className="container">
// //      <h1>Learning React</h1>
// //      <form onSubmit={handleSubmit}>
// //     <div className="mb-3">
// //       <label className="form-label">Email address</label>
// //       <input value={email} onChange={event=>setEmail(event.target.value)} type="email" className="form-control" />
// //       <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
// //     </div>
// //     <div className="mb-3">
// //       <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
// //       <input value={password} onChange={event=>setPassword(event.target.value)} type="password" className="form-control" id="exampleInputPassword1" />
// //     </div>
// //     <button type="submit" className="btn btn-primary">Submit</button>
// //   </form>

// //     </div>
// //   );
// // }

// export default App;


// const PostList = styled.div`
// background-color: indigo;
//   color: #fff;
//   border: 1px solid #999;
//   padding: 20px;
// `;








import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Nav from './components/Nav'
import { BrowserRouter,Route } from "react-router-dom/cjs/react-router-dom.min";

const App = () => {
  return (
    <BrowserRouter>
        <Nav />
        <Route exact path="/" component={Home}/>   
        <Route exact path="/about" component={About}/> 
        <Route exact path="/Contact" component={Contact}/> 
    </BrowserRouter>
    
  )
}

export default App