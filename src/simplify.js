(function ($) {

  $.fn.simplify = function (options) {
    /*
     In Spain we keep sound /z/.
     */
    var defaults = {
      spain: false // @deprecated
    };

    options = $.extend(defaults, options);

    var translator = {
      translate: function (text) {
        text = text.toLowerCase();

        // Replace V with B
        text = this.replaceAll('v', 'b', text);

        // Replace Ce, Ci with Se, Si
        if (!options.spain) {
          text = this.replaceAll('ce', 'se', text);
          text = this.replaceAll('ci', 'si', text);
          text = this.replaceAll('cé', 'sé', text);
          text = this.replaceAll('cí', 'sí', text);
        } else {
          text = this.replaceAll('ce', 'ze', text);
          text = this.replaceAll('ci', 'zi', text);
          text = this.replaceAll('cé', 'zé', text);
          text = this.replaceAll('cí', 'zí', text);
        }

        // Replace X with CS
        text = this.replaceAll('x', 'cs', text);

        // Replace Ch with TS
        text = this.replaceAll('ch', 'ts', text);

        // Replace K, Q with C
        text = this.replaceAll('k', 'c', text);
        text = this.replaceAll('qu', 'c', text);
        text = this.replaceAll('q', 'c', text);

        // Replace Gu with G
        text = this.replaceAll('gu', 'g', text);

        // Replace Gü with Gu
        text = this.replaceAll('ü', 'u', text);

        // Remove H
        text = this.replaceAll('h', '', text);

        // Replace LL with Y
        text = this.replaceAll('ll', 'y', text);

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
