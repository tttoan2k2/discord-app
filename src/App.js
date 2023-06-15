import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";

const CardPage = React.lazy(() => import("./components/CardPage"));

function App() {
    return (
        <Suspense fallback={<p>Loading...</p>}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/card" element={<CardPage />} />
                </Routes>
            </BrowserRouter>
        </Suspense>
    );
}

export default App;
