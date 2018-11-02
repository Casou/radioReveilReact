import PropTypes from 'prop-types';

export const openWeatherMapDataType = PropTypes.shape({
    dt: PropTypes.number.isRequired,
    dt_txt: PropTypes.string.isRequired,
    hour: PropTypes.number.isRequired,
    main : PropTypes.shape({
        humidity : PropTypes.number.isRequired,
        temp : PropTypes.number.isRequired,
        temp_min : PropTypes.number.isRequired,
        temp_max : PropTypes.number.isRequired
    }).isRequired,
    weather : PropTypes.arrayOf(
        PropTypes.shape({
            id : PropTypes.number.isRequired,
            main : PropTypes.string.isRequired,
            description : PropTypes.string.isRequired,
            icon : PropTypes.string.isRequired
        }),
    ).isRequired,
});

export const openWeatherMapJsonType = PropTypes.shape({
    cod : PropTypes.string.isRequired,
    city : PropTypes.shape({
        id : PropTypes.number.isRequired,
        name : PropTypes.string.isRequired
    }).isRequired,
    list : PropTypes.arrayOf(openWeatherMapDataType),
});


export const weatherDayDatasType = PropTypes.shape({
    day : PropTypes.instanceOf(Date).isRequired,
    shortDate: PropTypes.string.isRequired,
    data : PropTypes.arrayOf(openWeatherMapDataType)
});
