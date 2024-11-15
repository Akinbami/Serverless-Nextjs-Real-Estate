import axios from 'axios';
import React from 'react';
// const jwt = require('jsonwebtoken');

const RequireAuthentication = (WrappedComponent) => {
    const APPLICATION_API = "http://127.0.0.1:5559";
    // const APPLICATION_API = "https://the-pod-living-backend-dev1.azurewebsites.net";    

    return class extends React.Component {

        static async getInitialProps(ctx) {

            let isAuthenticated;
            console.log("ctx headers ",)
            const token = ctx.req.headers.cookie?.replace('token=', '');

            try {
                // isAuthenticated = jwt.verify(token, process.env.JWT_KEY);
                const verification_response = await axios.post(APPLICATION_API+"/auth/verify-token",{token});
                isAuthenticated = verification_response.authenticated;
            } catch (e) {
                console.log(e);
            }

            // Use !isAuthenticated for error cases
            if (isAuthenticated?.user) {
                return WrappedComponent.getInitialProps(ctx);
            } else {
                ctx.res.redirect('/')
            }
        }

        render() {
            return <WrappedComponent {...this.props} />;
        }
    };
};

export default RequireAuthentication;