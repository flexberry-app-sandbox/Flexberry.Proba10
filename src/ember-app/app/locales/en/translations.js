import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISProba_10ГородLForm from './forms/i-i-s-proba-10-город-l';
import IISProba_10УлицаLForm from './forms/i-i-s-proba-10-улица-l';
import IISProba_10ГородEForm from './forms/i-i-s-proba-10-город-e';
import IISProba_10УлицаEForm from './forms/i-i-s-proba-10-улица-e';
import IISProba_10ГородModel from './models/i-i-s-proba-10-город';
import IISProba_10УлицаModel from './models/i-i-s-proba-10-улица';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-proba-10-город': IISProba_10ГородModel,
    'i-i-s-proba-10-улица': IISProba_10УлицаModel
  },

  'application-name': 'Proba_10',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Proba_10',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Proba_10',
          title: 'Proba_10'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        'proba-10': {
          caption: 'Proba_10',
          title: 'Proba_10',
          'i-i-s-proba-10-город-l': {
            caption: 'Город',
            title: ''
          },
          'i-i-s-proba-10-улица-l': {
            caption: 'Улица',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-proba-10-город-l': IISProba_10ГородLForm,
    'i-i-s-proba-10-улица-l': IISProba_10УлицаLForm,
    'i-i-s-proba-10-город-e': IISProba_10ГородEForm,
    'i-i-s-proba-10-улица-e': IISProba_10УлицаEForm
  },

});

export default translations;
