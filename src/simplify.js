(function ($) {

  $.fn.simplify = function (options) {
    /*
     In Spain we keep sound /z/.
     */
    var defaults = {
      spain: false
    };

    options = $.extend(defaults, options);
    console.log(options);

    var translator = {
      translate: function (text) {
        text = text.toLowerCase();

        // Replace V with B
        text = this.replaceAll('v', 'b', text);

        // Replace Ce, Ci with Se, Si
        if (!options.spain) {
          text = this.replaceAll('ce', 'se', text);
          text = this.replaceAll('ci', 'si', text);
        } else {
          text = this.replaceAll('ce', 'ze', text);
          text = this.replaceAll('ci', 'zi', text);
        }

        // Replace Ch with X
        text = this.replaceAll('ch', 'x', text);

        // Replace C, Q with K
        text = this.replaceAll('c', 'k', text);
        text = this.replaceAll('qu', 'k', text);
        text = this.replaceAll('q', 'k', text);

        // Replace Gu with G
        text = this.replaceAll('gu', 'g', text);

        // Remove H
        text = this.replaceAll('h', '', text);

        // Replace Z with S
        if (!options.spain) {
          text = this.replaceAll('z', 's', text);
        }

        return text;
      },

      replaceAll: function (find, replace, str) {
        return str.replace(new RegExp(find, 'g'), replace);
      }
    };

    var text = '';
    var property = '';
    var translation;

    if (this.val()) {
      text = this.val();
      property = 'val';
    } else if (this.text()) {
      text = this.text();
      property = 'text';
    } else if (this.html()) {
      text = this.html();
      property = 'html';
    } else {
      console.log("Error. Empty element.");
      return false;
    }

    translation = translator.translate(text);

    switch (property) {
      case 'val':
        this.val(translation);
        break;

      case 'text':
        this.text(translation);
        break;

      case 'html':
        this.html(translation);
        break;
    }

    return this;
  };

}(jQuery));
