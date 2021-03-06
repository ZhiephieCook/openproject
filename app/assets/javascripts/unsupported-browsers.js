//-- copyright
// OpenProject is a project management system.
// Copyright (C) 2012-2017 the OpenProject Foundation (OPF)
//
// This program is free software; you can redistribute it and/or
// modify it under the terms of the GNU General Public License version 3.
//
// OpenProject is a fork of ChiliProject, which is a fork of Redmine. The copyright follows:
// Copyright (C) 2006-2017 Jean-Philippe Lang
// Copyright (C) 2010-2013 the ChiliProject Team
//
// This program is free software; you can redistribute it and/or
// modify it under the terms of the GNU General Public License
// as published by the Free Software Foundation; either version 2
// of the License, or (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with this program; if not, write to the Free Software
// Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.
//
// See doc/COPYRIGHT.rdoc for more details.
//++

(function($) {

  function getMSIEVersion() {
      var ua = window.navigator.userAgent;
      var msie = ua.indexOf("MSIE ");

      // IE <= 10
      if (msie !== -1) {
        return parseInt(ua.substring(msie + 5, ua.indexOf(".", msie)));
      }

      // IE 11
      msie = ua.indexOf('Trident/');
      if (msie > 0) {
        // IE 11 => return version number
        var rv = ua.indexOf('rv:');
        return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
      }
  }

  $(function() {

    var ieVersion = getMSIEVersion();
    var isIE = ieVersion !== undefined && ieVersion <= 11;
    var additionalMessage = I18n.t("js.unsupported_browser.update_message");

    var agent = navigator.userAgent;
    if (isIE || agent.match(/Firefox\/(([1-2][0-9]|3[0-7])\.)/)) { // Firefox 10-37

      if (isIE) {
        additionalMessage = I18n.t("js.unsupported_browser.update_ie_user");
      }

      $().topShelf({
        id: 'op.unsupported_browsers',
        title: I18n.t("js.unsupported_browser.title"),
        message: I18n.t("js.unsupported_browser.message") + '<br/>' + additionalMessage,
        link: I18n.t("js.unsupported_browser.learn_more"),
        close: I18n.t("js.unsupported_browser.close_warning"),
        url: "https://www.openproject.org/open-source/download/systemrequirements/"
      });
    }
  });

}(jQuery));
