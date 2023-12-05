import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  назв: DS.attr('string'),
  дом: DS.belongsTo('i-i-s-proba-10-дом', { inverse: null, async: false })
});

export let ValidationRules = {
  назв: {
    descriptionKey: 'models.i-i-s-proba-10-улица.validations.назв.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  дом: {
    descriptionKey: 'models.i-i-s-proba-10-улица.validations.дом.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('УлицаE', 'i-i-s-proba-10-улица', {
    назв: attr('Назв', { index: 0 })
  });

  modelClass.defineProjection('УлицаL', 'i-i-s-proba-10-улица', {
    назв: attr('Назв', { index: 0 })
  });
};
