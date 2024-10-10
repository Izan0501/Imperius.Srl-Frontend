import { useState, createContext, useEffect } from "react";
import { getUser } from "../api/getUser";
import Loading from '../components/Loading';
import { getProducts } from "../api/getProducts";
import { getBlogs } from "../api/getBlogs";


export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);
    const [blogs, setBlogs] = useState([]);
    // const [order, setOrder] = useState([]);

    useEffect(() => {
        getProducts()
        .then((data) => setProducts(data))
        .catch((error) => console.log(`Error: ${error}`));
    }, []);

    useEffect(() => {
        getBlogs()
            .then((data) => setBlogs(data))
            .catch((error) => console.log(`Error: ${error}`));
    }, []);
    
    useEffect(() => {
        (async () => {
            const token = localStorage.getItem('access');
            await login(token);
            setLoading(false);
        })();
    }, []);

    const login = async (token) => {
        try {
            const user = await getUser(token)
            delete user.password;
            setUser(user);
        } catch (error) {
            console.log(error);
        }
    };

    const logout = () => {
        setUser(false);
        localStorage.removeItem('products');
        localStorage.removeItem('access');
    };

    const data = {
        user,
        setUser,
        login,
        logout,
        products,
        blogs
    };

    if (loading) return <Loading />

    return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>

}

