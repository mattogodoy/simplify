(function ($) {

  $.fn.simplify = function () {
    var translator = {
      translate: function (text) {
        // Replace V with B
        text = this.replaceAll('v', 'b', text);

        // Replace Ce, Ci with Se, Si and accents
        text = this.replaceAll('c([eiéí])', 's' + '$1', text);

        // Replace XC with CS
        text = this.replaceAll('xc', 'cs', text);

        // Replace X with CS
        text = this.replaceAll('x', 'cs', text);

        // Replace Ch with X
        text = this.replaceAll('ch', 'x', text);

        // Replace K, Q with C
        text = this.replaceAll('k|qu|q', 'c', text);

        // Replace Gu with G
        text = this.replaceAll('gu([eiéí])', 'g$1', text);

        // Replace Gü with Gu
        text = this.replaceAll('ü', 'u', text);

        // Remove H
        text = this.replaceAll('h', '', text);

        // Replace LL with Y
        text = this.replaceAll('ll', 'y', text);

        // Replace Z with S
        text = this.replaceAll('z', 's', text);

        return text;
      },

      replaceAll: function (find, replace, str) {
        return str.replace(new RegExp(find, 'gi'), replace);
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
