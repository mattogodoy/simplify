(function ($) {

  $.fn.simplify = function (options) {
    /*
     In Spain we keep sound /z/.
     */
    var defaults = {
      spain: false // @deprecated
    };

    options = $.extend(defaults, options);
    console.log(options);

    var translator = {
      translate: function (text) {
        text = text.toLowerCase();

        // Replace V with B
        text = this.replaceAll('v', 'b', text);

        // Replace Ce, Ci with Se, Si
        text = this.replaceAll('c([eiéí])', ((options.spain) ? 'z' : 's') + '$1', text);

        // Replace X with KS
        text = this.replaceAll('x', 'ks', text);

        // Replace Ch with TS
        text = this.replaceAll('ch', 'x', text);

        // Replace K, Q with C
        text = this.replaceAll('k|qu|q', 'c', text);

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
