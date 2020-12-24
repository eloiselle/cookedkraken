import dotenv from "dotenv";
dotenv.config()


export function onError(res: any, e: Error) {

  if (process.env.NODE_ENV == 'prod')
    res.status(500).json({ error: "Error" })
  else
    res.status(500).json({ error: e })
}