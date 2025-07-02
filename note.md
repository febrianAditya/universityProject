1. buat route User (buat file)
2. Declare express di file UserRoute => ./routes/userRoute.js
    a. require express
    b. express pakai method Router()
    c. exports route
    d. kita buat routingannya
3. Ditangkep di index.js => ./routes/index.js
    a. require file userRoute
    b. digunakan pakai .use
4. Buat file userController => ./controllers/userController.js
    a. bikin class
    b. exports langsung classnya
    c. buat static
5. Panggil class UserController di file ./routes/userRoute.js
    a. require UserControllers
    b. tinggal panggil di endpoint / path