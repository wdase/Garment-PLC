import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        options: {
          customProperties: true,
        },
        themes: {
          dark: {
            background: '#9E9E9E',
          },
          red: {
            background: '#F44336',
          },
        },
        dark: true,
      },
});
