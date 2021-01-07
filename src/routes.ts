
import { Request, Response, NextFunction, response } from "express";
import { routesDatabase } from "./routesDatabase.js";
import { routesRest } from "./routesRest.js";

type Server = { close: () => void; }


export function routes(app: any) {

  // █████▄.▄████▄..▄█████.█████.▄████.
  // ██..██.██..██.██▀.....██....██....
  // █████▀.██████.██..███.████..▀███▄.
  // ██.....██..██.██▄..██.██.......██.
  // ██.....██..██.▀█████▀.█████.████▀.

  app.get("/", (req: Request, resp: Response) => resp.render("login"));

  app.get("/user", (req: Request, resp: Response) => resp.render("user"));
  app.get("/admin", (req: Request, resp: Response) => resp.render("admin"));

  app.get("/login", (req: Request, resp: Response) => resp.render("login"));
  app.get("/logout", (req: Request, resp: Response) => resp.render("logout"));

  app.get("/register", (req: Request, resp: Response) => resp.render("register"));

  app.get("/newUser", (req: Request, resp: Response) => resp.render("adminAddUser"));


  // Forms
  const availablePages: string[] = [

    // Admin pages
    "admin/favorites_admin",
    "admin/home_admin",
    "admin/inventory_admin",
    "admin/manage_admin",
    "admin/recipes_admin",
    "admin/suggestions_admin",
    
    // User pages
    "user/favorites_user",
    "user/home_user",
    "user/inventory_user",
    "user/recipes_user",
    "user/suggestions_user",
  ]

  availablePages.forEach((page) =>
    app.get("/" + page, (req: Request, resp: Response) => resp.render("forms/" + page))
  );


  // ▄████▄.█████▄.██.
  // ██..██.██..██.██.
  // ██████.█████▀.██.
  // ██..██.██.....██.
  // ██..██.██.....██.

  app.get("/ping", (req: Request, resp: Response) => resp.send("pong"));

  app.get('/json', (req: Request, res: Response) => res.status(200).json({ hello: 'World!', }));
  

  // █████▄.▄█████▄.██....██.▄████▄.██.██...██.
  // ██..██.██▀.▀██.███▄▄███.██..██.██.███..██.
  // ██..██.██...██.██.██.██.██████.██.██▀█▄██.
  // ██..██.██▄.▄██.██....██.██..██.██.██..███.
  // █████▀.▀█████▀.██....██.██..██.██.██...██.

  app = routesRest(app)
  app = routesDatabase(app)


  // █████.█████▄.█████▄.▄█████▄.█████▄.
  // ██....██..██.██..██.██▀.▀██.██..██.
  // ████..█████..█████..██...██.█████..
  // ██....██..██.██..██.██▄.▄██.██..██.
  // █████.██..██.██..██.▀█████▀.██..██.

  function errorInDev(err: any, req: Request, res: Response, next: NextFunction) {
    errorHappened(err, req, res, next, { message: err.message, error: err })
  }

  function errorInProd(err: any, req: Request, res: Response, next: NextFunction) {
    errorHappened(err, req, res, next, { message: err.message, error: {} })
  }

  function errorHappened(err: any, req: Request, res: Response, next: NextFunction, options: any) {
    res.status(err.status || 500).render('error', options)
  }

  // development error handler will print stacktrace
  if (app.get('env') === 'development') {
    app.use((err: Error, req: Request, res: Response, next: NextFunction) => errorInDev(err, req, res, next));
  }
  // production error handler: no stacktraces leaked to user
  app.use((err: Error, req: Request, res: Response, next: NextFunction) => errorInProd(err, req, res, next));


  return app;
}
