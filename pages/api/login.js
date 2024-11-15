// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import axios from "axios"
import cookie from "cookie";
import { redirect } from "next/dist/next-server/server/api-utils";
// const APPLICATION_API = "http://127.0.0.1:5559";
const APPLICATION_API = "https://gtdo2np6f2.execute-api.us-east-1.amazonaws.com/dev";

export default async (req, res) => {
    const payload = {
        email: req.body.email,
        password: req.body.password
    }
    const login_response = await axios.post(`${APPLICATION_API}/auth/signin`,payload)
    console.log(login_response.data)
    res.setHeader("Set-Cookie", cookie.serialize("pod-token", login_response.data.token, {
        httpOnly: true,
        secure: false,
        path: "/",
    }) )
    res.status(200).json({ success: true, data: login_response.data.user })
}
  