import Navbar from "./navbar";

export default function Layout({children}){
    return(
        <Navbar/>
        {children}
        <div>
            <p>footer</p>
        </div>
    )
}