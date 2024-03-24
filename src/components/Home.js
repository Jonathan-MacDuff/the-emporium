import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";

function Home() {


    return (
        <main>
            <Outlet />
        </main>
    )
}
