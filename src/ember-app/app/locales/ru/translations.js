import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Proba_10',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Proba_10',
          title: 'Proba_10'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
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
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-proba-10-город-l': IISProba_10ГородLForm,
    'i-i-s-proba-10-улица-l': IISProba_10УлицаLForm,
    'i-i-s-proba-10-город-e': IISProba_10ГородEForm,
    'i-i-s-proba-10-улица-e': IISProba_10УлицаEForm
  },

});

export default translations;
