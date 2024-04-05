import './globals.css'
import { Routes, Route } from 'react-router-dom'

import AuthLayout from './_auth/AuthLayout';
import SigninForm from './_auth/forms/SigninForm';
import SignupForm from './_auth/forms/SignupForm';

import Home from './_root/pages/Home';
import RootLayout from './_root/RootLayout';

import { Toaster } from "@/components/ui/toaster"

import { AllUsers, CreatePost, EditPost, Explore, LikePosts, PostDetails, Profile, Saved, UpdateProfile } from './_root/pages';

function App() {
  return (
    <div className='flex h-screen'>
    <Routes>

      <Route  element={<AuthLayout/>}>
        <Route path="/sign-in" element={<SigninForm />} />
        <Route path="/sign-up" element={<SignupForm />} />
      </Route>
      
      <Route  element={<RootLayout/>}>
        <Route index element={<Home />} />
        <Route path="/explore" element={<Explore/>} />
        <Route path="/all-users" element={<AllUsers/>} />
        <Route path="/saved" element={<Saved/>} />
        <Route path="/create-post" element={<CreatePost/>} />
        <Route path="/update-post/:id" element={<EditPost/>} />
        <Route path="/post/:id" element={<PostDetails/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/update-profile/:id" element={<UpdateProfile/>} />
        <Route path="/profile/id/liked-posts" element={<LikePosts/>} />
      </Route>
    </Routes>
    <Toaster/>
    </div>
  )
}

export default App
