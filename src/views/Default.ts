
import { RequestHandler } from "express";


/*************************************/
/** Default view for unassigned URLs */
export const Default: RequestHandler = async (req, res, next) => {
  console.log("default route")
  const defaultResponse = (
    `<!DOCTYPE html>
    <html>
      <head>
        <title>
          Jonathan's Website
        </title>
      </head>
      <body>
       The server is running.
       <br/>
       This URL has not been assigned yet.
       <br/>
       Assign it to something Jonathan!
      </body>
    </html>`
  );

  res.status(200).send(defaultResponse);
}
