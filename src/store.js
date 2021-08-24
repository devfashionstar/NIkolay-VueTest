import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    chairs: [
      {
        name: 'Sofa',
        price: 2259,
        image: require('./assets/images/01.jpg'),
        stars: 5,
        totalReviews: 230,
        details: '',
      },
      {
        name: 'Sofa',
        price: 2284,
        image: require('./assets/images/02.jpg'),
        stars: 3.4,
        totalReviews: 20,
        details: '',
      },
      {
        name: 'Sofa',
        price: 1490,
        image: require('./assets/images/03.jpg'),
        stars: 1,
        totalReviews: 1,
        details: '',
      },
      {
        name: 'Sofa',
        price: 2307,
        image: require('./assets/images/04.jpg'),
        stars: 4.4,
        totalReviews: 340,
        details: '',
      },
      {
        name: 'Sofa',
        price: 2599,
        image: require('./assets/images/05.jpg'),
        stars: 3,
        totalReviews: 30,
        details: '',
      },
      {
        name: 'Sofa',
        price: 14000,
        image: require('./assets/images/06.jpg'),
        stars: 2,
        totalReviews: 248,
        details: '',
      },
    ],
    cartProducts: [],
    showModal: false,
    showPopupCart: false,
  },

  getters: {
    getAllProducts: state => state.chairs,
    getProductsInCart: state => state.cartProducts,
    getShowModal: state => state.showModal,
    getPopupCart: state => state.showPopupCart,
  },

  mutations: {
    ADD_PRODUCT: (state, product) => {
      state.cartProducts.push(product);
    },
    REMOVE_PRODUCT: (state, index) => {
      state.cartProducts.splice(index, 1);
    },
    SHOW_MODAL: (state) => {
      state.showModal = !state.showModal;
    },
    SHOW_POPUP_CART: (state) => {
      state.showPopupCart = !state.showPopupCart;
    },
  },

  actions: {
    addProduct: (context, product) => {
      context.commit('ADD_PRODUCT', product);
    },
    removeProduct: (context, index) => {
      context.commit('REMOVE_PRODUCT', index);
    },
    showOrHiddenModal: (context) => {
      context.commit('SHOW_MODAL');
    },
    showOrHiddenPopupCart: (context) => {
      context.commit('SHOW_POPUP_CART');
    },
  },
});
