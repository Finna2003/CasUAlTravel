const COLORS = {
    primary_light: "#53dce3",
    primary: "#BBEDF0",
    primary_ultra_light: "#99e6ea",
    primary_dark: "#21aeb4",

    grey:"#4c4f4f" ,
    light_grey:"#919696" ,

    white: "#fcfcfc",

    black: "#080808"
};

const SIZES = {
    xSmall: 10,
    small: 12,
    medium: 16,
    large: 20,
    xLarge: 24,
    xxLarge: 32,
    width:350,
    heightText: 55
};

const STYLE ={
    defaultButton: {
        padding: SIZES.small,
        backgroundColor: COLORS.primary_light,
        borderRadius: SIZES.large,
        width: SIZES.width,
    },
    defaultButtonText: {
        color: COLORS.white
    },
    defaultButton2: {
        padding: SIZES.small,
        backgroundColor: COLORS.primary,
        borderRadius: SIZES.large,
        width: SIZES.width,
        borderWidth: 2,
        borderColor: COLORS.primary_light
    },
    defaultButtonText2: {
        color: COLORS.primary_light
    },
    defaultLinkText: {
        color: COLORS.grey
    },
    defaultPlaceForText: {
        padding: SIZES.small,
        backgroundColor: COLORS.primary_ultra_light,
        borderRadius: SIZES.small,
        width: SIZES.width,
        height: SIZES.heightText,
        borderWidth: 2,
        borderColor: COLORS.light_grey
    },
    defaultBigText: {
        color: COLORS.black,
        fontSize: 20
    },
}

export {COLORS, SIZES, STYLE}
