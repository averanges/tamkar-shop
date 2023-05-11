/** @type {import('tailwindcss').Config} */
export default {
  content: [
  './index.html',
  './src/index.css',
  './src/App.jsx',
  './src/main.jsx',
  './src/components/Layout.jsx',
  './src/components/Footer.jsx',
  './src/components/Navbar.jsx',
  './src/modules/homeModule/components/Home.jsx',
  './src/modules/homeModule/subComponents/HeroSlide.jsx',
  './src/modules/homeModule/subComponents/Categories.jsx',
  './src/modules/homeModule/subComponents/Events.jsx',
  './src/modules/homeModule/subComponents/CardSmallData.jsx',
  './src/modules/homeModule/subComponents/JoinUs.jsx',
  './src/modules/homeModule/popups/Cart.jsx',
  './src/modules/homeModule/popups/SearchPopup.jsx',
  './src/modules/homeModule/popups/AddToCart.jsx',
  './src/modules/homeModule/popups/AddToWishList.jsx',
  './src/modules/homeModule/popups/QuickView.jsx',
  './src/modules/homeModule/popups/HiddenMenu.jsx',
  './src/UI/cards/Cards.jsx',
  './src/UI/cards/ProductCard.jsx',
  './src/UI/cards/Cards.jsx',
  './src/UI/stars/Star.jsx',
  './src/UI/stars/Stars.jsx',
  './src/UI/navButtons/NavButtons.jsx',
  './src/modules/homeModule/hooks/useNavLinks.jsx',
  './src/modules/homeModule/subComponents/NavLinkText.jsx',
  './src/modules/homeModule/consts/navLinks.jsx',
  './src/modules/shopModule/components/Shop.jsx',
  './src/modules/shopModule/subComponents/Filter.jsx',
  './src/modules/shopModule/subComponents/ShopGrid.jsx',
  './src/modules/shopModule/consts/categoriesFilter.jsx',
  './src/modules/singleProduct/components/SingleProduct.jsx',
  './src/modules/singleProduct/subComponents/Review.jsx',
  './src/modules/singleProduct/subComponents/InfoBlock.jsx',
  './src/modules/singleProduct/subComponents/AdditionalInfoBlock.jsx',
  './src/modules/singleProduct/subComponents/ImagesBlock.jsx',
  './src/modules/singleProduct/subComponents/ReviewBlock.jsx',
  './src/modules/singleProduct/subComponents/TextBlock.jsx',
  './src/modules/cartModule/components/CartPage.jsx',
  './src/modules/cartModule/subComponents/CartItem.jsx',
  './src/modules/cartModule/subComponents/CartResult.jsx',
  './src/modules/cartModule/subComponents/CartTable.jsx',
  './src/modules/cartModule/subComponents/CouponBlock.jsx',
  './src/modules/checkoutModule/components/CheckoutPage.jsx',
  './src/modules/checkoutModule/subComponents/BillingDetailsBlock.jsx',
  './src/modules/checkoutModule/subComponents/CheckoutOrder.jsx',
  './src/modules/authModule/components/LoginPage.jsx',
  './src/modules/authModule/components/RegisterPage.jsx',
  './src/modules/authModule/subComponents/SuccessBlock.jsx',
  './src/modules/authModule/subComponents/RegistrationForm.jsx',
  './src/modules/authModule/subComponents/LoginForm.jsx',
  './src/modules/dashboard/components/DashboardAddItem.jsx',
  './src/modules/userProfile/components/UserAccount.jsx',
  './src/modules/userProfile/components/UserProfileSidebar.jsx',
  './src/modules/userProfile/components/UserProfileLayout.jsx',
  './src/modules/userProfile/popups/AddNewAddress.jsx',
  './src/modules/userProfile/subComponents/SaveAddressFrom.jsx',
  './src/modules/userProfile/components/UserOrders.jsx',
],
  theme: {
    extend: {
      colors: {
        'bs-orange': '#fd7e14',
        'bs-blue': '#0d6efd',
        'new-pink': '#FF6565',
        'bs-purple': '#231942',
        'home-gray': '#f8f9fa',
        'home-blue': "#D9F1E1",
        'bs-pink': '#EDB7A1',
        'light-green': '#DCFFD2',
        'light-yellow': '#FFEDB4',
        'light-blue': '#DFE4FF',
        'light-orange': '#FFEACC',
        'light-pink': '#FFDAE0',
        'light-pump': '#FFF3DA',
      },
      fontFamily: {
        "heroH1":  'Dancing Script, cursive',
        "heroH2":  'Bebas Neue, cursive'
      },
      animation: {
        'slide-in' :'slide-in 500ms linear',
        'over-effect' :'over-effect 1s linear',
        'opacity-effect': 'opacity-effect 500ms linear'
      }
    },
  },
  plugins: [],
}
