### MIREYA | Vue 3 E-commerce App | TypeScript, Pinia
---
![PINIA](https://img.shields.io/badge/PINIA-blue?style=flat&logo=vuedotjs&logoColor=fff)
![VUE](https://img.shields.io/badge/Vue%20JS%203-blue?style=flat&logo=vuedotjs&logoColor=fff)
![Axios](https://img.shields.io/badge/axios-blue?style=flat&logo=axios&logoColor=fff)
![SASS](https://img.shields.io/badge/SASS-blue?style=flat&logo=sass&logoColor=fff)
![HTML](https://img.shields.io/badge/HTML%205-blue?style=flat&logo=html5&logoColor=fff)

![ChartJS](https://img.shields.io/badge/ChartJS-blue)
![SwiperJS](https://img.shields.io/badge/SwiperJS-blue)

![Last commit](https://img.shields.io/github/last-commit/vuejs/core)
---

#### #### Developed a modern e-commerce application with both customer-facing and admin functionality:
<sub>   Frontend: Vue 3 (Composition API, <​script setup>), TypeScript, Pinia, Sass;.</sub>

 <sub>  Core features: product catalog with filtering and search, product detail page with color selection, shopping cart with quantity & total price calculation, favorites list;.</sub>
 
 <sub> Admin panel: product creation/editing with tab-based forms, category and color management;.</sub>
 
<sub> UX: implemented dynamic colorKey generation to handle product variants (different colors of the same product) correctly in the cart;.</sub>

 <sub> State management: clean Pinia store architecture (state, getters, actions), localStorage persistence;.</sub>
 
<sub>  Design system: Sass variables for typography, colors, and responsive layout.</sub>


---
#### Project setup
```
npm install 
```

#### Compiles and hot-reloads for development
```
npm run serve 
```

#### Loading db.json 

#### (˶ᵔ ᵕ ᵔ˶)

```
json-server -w db.json
```


#### Starts all
```
npm run dev
```

#### Folders

```
src
   - assets
      - sass
         - abstracts
            - _all.sass
            - _aditional.sass
            - _mixin.sass
            - _variables.sass
         - components
            - _button.sass
            - _delivery.sass
            - _form.sass
            - _product-card.sass
            - _....sass
         - core
            - _all.sass
            - _reset.sass
            - _typography.sass
         - layout
            - _all.sass
            - _footer.sass
            - _header.sass
            - _navigation.sass
            - _admin-header.sass
            - _page-header.sass
            - _....sass
         - pages
            - _home.sass
            - _brand.sass
            - _product.sass
            - _favorite.sass
            - _information.sass
            - _....sass
         - sections
            - _all.sass
            - _decor.sass
            - _popup.sass
            - _swiper.sass
            - _....sass
         - app.sass
   - models
      - product.ts
   - components
      - admin
         - tabs
            - CategorizationTab.vue
            - DescriptionTab.vue
            - GeneralTab.vue
            - MediaTab.vue
            - ProductColorsTab.vue
            - SystemInfoTab.vue
         - ProductFilters.vue
         - ProdcutForm.vue
      - ui
         - BrandLink.vue
         - TheInput.vue
         - CategoryTypeLink.vue
         - ProductTypeLink.vue
      - core
         - BackButton.vue
         - AppImage.vue
         - Breadcrumbs.vue
         - SmallNavItem.vue
      - product
         - ProductCard.vue
         - ProductDetails.vue
      - layout
         - TheHeader.vue
         - TheFooter.vue
         - TheAdminHeader.vue
      - sections
         - ReturnPolicy.vue
         - DeliveryInfo.vue
         - TheSlider.vue
         - TheAccordion.vue
         - CartItem.vue
         - StarRating.vue
   - router
      - about.rputes.ts
      - account.routes.ts
      - admin.routes.ts
      - brand.routes.ts
      - category.routes.ts
      - product-types.ts
      - index.ts
   - stores
      - admin.store.ts
      - cosmetic.store.ts
      - user.store.ts
   - types
      - cart.ts
      - cosmetic.ts
      - user.ts
   - utils
      - api.ts
      - debounce.ts
   - views
      - admin
         - AdminDashboardView.vue
         - ProductAddView.vue
         - ProductDashboardView.vue
         - ProductEditView.vue
      - pubic
         - auth
            - LoginView.vue
            - SignUpView.vue
         - catalog
             - BrandDetails.vue
             - BrandListView.vue
             - CategoryDetails.vue
             - ProductTypeDetailsView.vue
             - ProductTypeListView.vue
             - ProductView.vue
         - common
            - FavoriteView.vue
            - HomeView.vue
            - ShoppingView.vue
         - info
            - AboutView.vue
            - InformationView.vue
            - ThermsView.vue
   - App.vue
   - main.ts
db.json
vite.config.ts
```