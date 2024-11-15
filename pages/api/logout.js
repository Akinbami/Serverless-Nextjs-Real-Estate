
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import axios from "axios"
import cookie from "cookie";

export default async (req, res) => {
    
    res.setHeader("Set-Cookie", cookie.serialize("pod-token", "", {
        httpOnly: true,
        secure: false,
        path: "/",
    }) )
    res.status(200).json({ success: true })
}
  