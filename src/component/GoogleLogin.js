import {GoogleLogin} from "@react-oauth/google";
import {GoogleOAuthProvider} from "@react-oauth/google";
import axios from "axios";
import React from "react";

const GoogleLoginButton = (props) => {
    const clientId = '866547838390-dhpjsr4o4csl7leggmpsj8fub3sn65dh.apps.googleusercontent.com'
    return (
        <>
            <GoogleOAuthProvider clientId={clientId}>
                <GoogleLogin
                    onSuccess={(res) => {
                        console.log(res);
                        props.pop('2');
                        // axios
                        //     .post("http://localhost/auth/google/callback", { res })
                        //     .then(({ data }) => {
                        //         console.log(data);
                        //     });
                    }}
                    onFailure={(err) => {
                        console.log(err);
                    }
                }
                render={(renderProps) => (
                    <li><a href="#;" className='gogle' onClick={()=>{
                    }}>구글로 계속하기</a></li>
                    )
                }
                />
            </GoogleOAuthProvider>
        </>
    );
};

export default GoogleLoginButton
