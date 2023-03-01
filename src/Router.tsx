import { Routes, Route } from 'react-router-dom'
import { Dashboard } from './pages/dashboard'
import SignIn from './pages/SignIn'

export function Router() {
    return (
        <Routes>
            <Route path='/' element={<SignIn />} />
            <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
    )
}
