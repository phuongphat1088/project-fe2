import React from 'react';
import { useNavigate } from 'react-router-dom';
import logoText from '../assets/img/logo/logo-light.svg'
import logo from '../assets/img/logo/logo.png'
import { useState } from 'react';
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { auth, db } from '../firebase';

export default function Login() {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);

    const handleGoogleLogin = async () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider).then(async (result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            // const credential = GoogleAuthProvider.credentialFromResult(result);
            // const token = credential.accessToken;

            //Change state
            setUser(result.user);

            // The signed-in user info.
            const userData = result.user;

            //Save user data to firebase database
            //Save user
            await setDoc(doc(db, "users", userData.uid), {
                uid: userData.uid,
                email: userData.email,
                displayName: userData.displayName,
                photoURL: userData.photoURL
            });

            const res = await getDoc(doc(db, "userChats", userData.uid));
            //Save userChat
            if (!res.exists()) {
                //create a chat in chats collection
                await setDoc(doc(db, "userChats", userData.uid), {});
            }

            //Navigate to home page
            navigate("/");
        }).catch((error) => {
            console.log("Error signInWithPopup: " + error);
        });
    }

    return (
        <section className="bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <a href="." className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                    <img className="w-12 mr-2" src={logo} alt="logo" />
                    <img className="w-44 mr-2" src={logoText} alt="logo" />
                </a>
                <div className="w-full bg-gray-100 rounded-lg shadow-lg dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">

                        {user ? (
                            // <button onClick={handleGoogleLogout} className="flex items-center justify-center w-full text-white bg-primary-700 hover:bg-primary-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                            //     <img className="w-8 mr-2 rounded-full" src={user.photoURL} alt="logo" />
                            //     Đăng xuất thôi
                            // </button>
                            <>
                                <div className="text-center text-xl font-bold leading-tight tracking-tight text-gray-700 md:text-md dark:text-white">
                                    Successfully logged in with the account
                                </div>
                                <div className="text-blue-700 text-center font-bold">{user.email}</div>
                            </>
                        ) : (
                            <>
                                <div className="text-center text-xl font-bold leading-tight tracking-tight text-gray-700 md:text-md dark:text-white">
                                    Sign in to your account to get started
                                </div>
                                <button onClick={handleGoogleLogin} className="flex items-center justify-center w-full text-white bg-primary-700 hover:bg-primary-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                                    <img className="w-8 mr-2 rounded-full" src={"https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png"} alt="logo" />
                                    Login with Google
                                </button>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
