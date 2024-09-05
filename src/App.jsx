import { Route, Routes } from "react-router-dom"
import { Home, Error, Contac } from './Pages'
import { Chats } from "./Components"

const App = () => {

    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/*" element={<Error />} />
                <Route path="/contac" element={<Contac />} />
                <Route path="/contac/:contac_id" element={<Chats />} />
            </Routes>
        </>
    )
}

export default App
