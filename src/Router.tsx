import { Routes, Route } from 'react-router-dom'
import { Dashboard } from './pages/dashboard'
import SignIn from './pages/SignIn'
import UserList from './pages/users'
import CreateUser from './pages/users/create'

export function Router() {
    return (
        <Routes>
            <Route path='/' element={<SignIn />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/users' element={<UserList />} />
            <Route path='/users/create' element={<CreateUser />} />
        </Routes>
    )
}
