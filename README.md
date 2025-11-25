## MIREYA | Vue 3 E-commerce App | TypeScript, Pinia, Nodejs
---
![PINIA](https://img.shields.io/badge/PINIA-blue?style=flat&logo=vuedotjs&logoColor=fff)
![VUE](https://img.shields.io/badge/Vue%20JS%203-blue?style=flat&logo=vuedotjs&logoColor=fff)
![Axios](https://img.shields.io/badge/axios-blue?style=flat&logo=axios&logoColor=fff)
![SASS](https://img.shields.io/badge/SASS-blue?style=flat&logo=sass&logoColor=fff)
![HTML](https://img.shields.io/badge/HTML%205-blue?style=flat&logo=html5&logoColor=fff)

![ChartJS](https://img.shields.io/badge/ChartJS-blue)
![SwiperJS](https://img.shields.io/badge/SwiperJS-blue)

![Node-js](https://img.shields.io/badge/node-js?style=flat&logo=nodedotjs&logoColor=%23fff&color=%23f77f00)
![Express-js](https://img.shields.io/badge/express-js?style=flat&logo=express&logoColor=%23ffffff&color=%23f77f00)

---
### Project setup 

#### 1️⃣ Frontend 
```
cd frontend
```
```
npm install 
```
#### 2️⃣ Backend
```
cd -
```
```
cd backend
```
```
npm install 
```

#### 3️⃣ /backend create .env (example)

```
PORT=4000
SECRET=your_jwt_secret
```


#### 4️⃣ Start 
```
cd -
```

```
npm run dev
```

### 📁 Project Structure

```
discount/
├── backend/         # Node.js Express API
│   └── src/
│       └── controllers/
│           └── authController.ts
│           └── adminController.ts
│       └── middleware/
│           └── authMiddleware.ts
│           └── adminMiddleware.ts
│       └── models/
│           └── userModel.ts
│       └── routes/
│           └── authRoutes.ts
│           └── adminRoutes.ts
│       └── types/
│           └── express.d.ts
│       └── utils/
│           └── generateToken.ts
│       └── server.ts
│   └── .env
│   └── ...
| 
├── frontend/        # Vue 3 frontend
│   └── src/
│       └── assets/
│           └── sass/ 
│              └── abstracts/
│                 └── _all.scss
│                 └── _mixins.scss
│                 └── _variables.scss
│                 └── ...
│              └── compoments/
│              └── admin/
│              └── core/
│                 └── _all.scss
│                 └── _reset.scss
│                 └── _typography.scss
│              └── layout/
│                 └── _all.scss
│                 └── _header.scss
│                 └── _footer.scss
│                 └── _navigation.scss
│              └── pages/
│              └── sections/
│              └── app.sass #import all sass folders
│       └── components/
│           └── admin/
│                 └── tabs/
│                 └── ui/
│           └── core/
│                 └── BreadCrumbs.vue
│           └── layout/
│                 └── TheFooter.vue
│                 └── TheHeader.vue
│           └── sections/
│           └── skeletons/
│           └── sliders/
│           └── ui/
│       └── models/
│           └── product.ts
│       └── router/
│           └── about.routes.ts
│           └── account.routes.ts
│           └── admin.routes.ts
│           └── brand.routes.ts
│           └── category.routes.ts
│           └── product-type.routes.ts
│           └── index.ts
│       └── stores/
│           └── admin.store.ts
│           └── admin.todo.store.ts
│           └── adminTheme.store.ts
│           └── auth.store.ts
│           └── cosmetic.store.ts
│           └── user.store.ts
│       └── types/
│           └── cart.ts
│           └── cosmetic.ts
│           └── user.ts
│       └── views/
│           └── admin/
│           └── public/
│       └── App.vue/
│   └── db.json
│   └── ...


```
---


