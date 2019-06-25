import { Router } from "express";
import app from './app'
import { post as createPost, put as updatePost, remove as deletePost, getOne as getPost, getAll as getPosts } from "./controllers/post";
import { post as createUser, put as updateUser, remove as deleteUser, getOne as getUser, getAll as getUsers } from "./controllers/user";
import { post as createCategory, put as updateCategory, remove as deleteCategory, getOne as getCategory, getAll as getCategories } from "./controllers/category";
import AuthController from "./controllers/Authentication";
import { checkJwt } from "./middlewares/checkJwt";
import { checkRole } from "./middlewares/checkRole";

app.get('/', (req, res) => {
    res.send({
        "liu": "Laureate International Universities"
    })
});
/*
const router = Router();

router.post("/login", AuthController.login);
router.post("/change-password", [checkJwt], AuthController.changePassword);

const Userrouter = Router();

  //Get all users
  Userrouter.get("/", [checkJwt, checkRole(["ADMIN"])], UserController.listAll);

  // Get one user
  Userrouter.get(
    "/:id([0-9]+)",
    [checkJwt, checkRole(["ADMIN"])],
    UserController.getOneById
  );

  //Create a new user
  Userrouter.post("/", [checkJwt, checkRole(["ADMIN"])], UserController.newUser);

  //Edit one user
  Userrouter.patch(
    "/:id([0-9]+)",
    [checkJwt, checkRole(["ADMIN"])],
    UserController.editUser
  );

  //Delete one user
  Userrouter.delete(
    "/:id([0-9]+)",
    [checkJwt, checkRole(["ADMIN"])],
    UserController.deleteUser
  );


*/


app.post('/category', createCategory);
app.get('/category', getCategories);
app.get('/category/:id', getCategory);
app.put('/category/:id', updateCategory);
app.delete('/category/:id', deleteCategory);

app.post('/post', createPost);
app.get('/post', getPosts);
app.get('/post/:id', getPost);
app.put('/post/:id', updatePost);
app.delete('/post/:id', deletePost);

app.post('/user', createUser);
app.get('/user', getUsers);
app.get('/user/:id', getUsers);
app.put('/user/:id', updateUser);
app.delete('/user/:id', deleteUser);

