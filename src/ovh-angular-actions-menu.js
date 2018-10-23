/**
 * @ngdoc overview
 *
 * @name actionsMenu
 *
 *  @requires [pascalprecht.translate](https://github.com/angular-translate/angular-translate)
 *  @requires [ovh-angular-responsive-popover](https://github.com/ovh-ux/ovh-angular-responsive-popover)
 *
 * @description
 * _An actions menu gives the opportunity to group a set of actions available for a specific
 * context under a single menu._
 *
 *  ## TODO
 *
 *  - customizing page width ;
 *  - customizing open animation ;
 *  - actions with confirmation.
 */

import angular from 'angular';
import translate from 'angular-translate';
import responsivePopover from 'ovh-angular-responsive-popover';

import actionsMenuItem from './ovh-angular-actions-menu-item/ovh-angular-actions-menu-item';

import actionsMenuDirective from './ovh-angular-actions-menu.directive';
import actionsMenuProvider from './ovh-angular-actions-menu.provider';
import actionsMenuFactory from './ovh-angular-actions-menu.factory';

import './less/ovh-angular-actions-menu.less';

const moduleName = 'ovh-angular-actions-menu';

angular
  .module(moduleName, [
    translate,
    responsivePopover,
    actionsMenuItem,
  ])
  .provider('actionsMenu', actionsMenuProvider)
  .factory('ActionsMenu', actionsMenuFactory)
  .directive('actionsMenu', actionsMenuDirective)
  .run(($translate, asyncLoader) => {
    asyncLoader.addTranslations(
          import(`./translations/Messages_${$translate.use()}.xml`)
            .catch(() => import(`./translations/Messages_${$translate.fallbackLanguage()}.xml`))
            .then(x => x.default),
    );

    $translate.refresh();
  });

export default moduleName;
