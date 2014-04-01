var PRES = (function (PRES, $) {

    'use strict';

    // Store keycode variables for easier readability
    PRES.keycodes = {
        SPACE: 32,
        ENTER: 13,
        TAB: 9,
        ESC: 27,
        BACKSPACE: 8,
        SHIFT: 16,
        CTRL: 17,
        ALT: 18,
        CAPS: 20,
        PERIOD: 190,
        PAGE_UP: 33,
        PAGE_DOWN: 34,
        LEFT: 37,
        UP: 38,
        RIGHT: 39,
        DOWN: 40,
        DELETE: 46
    };

    $(function () {
        var radios = $('input[type="radio"][name="slide-toggles"]');

        $(document).on('keydown', function (e) {
            if (e.keyCode === PRES.keycodes.PAGE_UP) {
                e.keyCode = PRES.keycodes.LEFT;
            }
            if (e.keyCode === PRES.keycodes.PAGE_DOWN) {
                e.keyCode = PRES.keycodes.RIGHT;
            }
            if (e.keyCode === PRES.keycodes.LEFT || e.keyCode === PRES.keycodes.RIGHT) {
                var selected = radios.filter(':checked');
                var selectedIndex = radios.index(selected);
                var newRadio;
                if (e.keyCode === PRES.keycodes.LEFT && selectedIndex > 0) {
                    newRadio = radios.eq(selectedIndex - 1);
                    if (newRadio.length) {
                        newRadio.prop('checked', true);
                        e.preventDefault();
                    }
                }
                if (e.keyCode === PRES.keycodes.RIGHT && selectedIndex !== -1) {
                    newRadio = radios.eq(selectedIndex + 1);
                    if (newRadio.length) {
                        newRadio.prop('checked', true);
                        e.preventDefault();
                    }
                }
            }
        });
    });

    return PRES;

}(PRES || {}, jQuery));
