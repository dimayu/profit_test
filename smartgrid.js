let smartgrid = require('smart-grid');

let settings = {
    outputStyle: 'scss',
    columns: 12,
    offset: '16px',
    mobileFirst: false,
    container: {
        maxWidth: '1560px',
        fields: '180px'
    },
    breakPoints: {
        xlm: {
            width: '1800px',
            fields: '180px'
        },
        lm: {
            width: '1180px',
            fields: '60px'
        },
        md: {
            width: '940px',
            fields: '60px'
        },
        sm: {
            width: '760px',
            fields: '60px'
        },
        xxs: {
            width: '440px',
            fields: '10px'
        }
    }
};

smartgrid('./src/styles', settings);


/*
 * mobileFirst
 *  false -> max-width
 *  true -> min-width
 */
