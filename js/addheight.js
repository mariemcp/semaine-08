//Définit la taille des sections 
        $(document).ready(function () {
            jQuery('document').ready(function () {
                //On définit la variable min_height à la hauteur de la fenètre
                var min_height = jQuery(window).height();
                //Si notre section  est inférieure à min_height alors on lui donne comme propriété css une hauteur minimale égale à min_height
                if (jQuery('section').height() < min_height) {
                    jQuery('section').css({
                        'min-height': +min_height + 'px'
                    });
                }
            });
        });