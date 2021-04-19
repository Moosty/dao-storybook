module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontSize: {
      '32px': '32px',
      '24px': '24px',
      '20px': '20px',
      '18px': '18px',
      '16px': '16px',
      '15px': '15px',
      '13px': '13px',
    },
    boxShadow: {
      defaultPrimary: '0 3px 14px rgba(64, 112, 244, 0.5)',
      cardYes: '0 3px 14px rgba(43, 214, 123, 0.7)',
      cardNo:'-4px 2px 36px -10px rgba(64, 112, 244, 0.5)',

    },

    extend: {
      lineHeight: {
        '46px': '46px',
        '36px': '36px',
        '30px': '30px',
        '28px': '28px',
        '24px': '24px',
        '22px': '22px',
        '20px': '20px',
        '18px': '18px',
        '16px': '16px',
      },
      fontFamily: {
        'heading': ['Poppins'],
        'button': ['Roboto'],
        'body': ['Roboto'],
        'caption': ['Roboto'],
      },
      spacing: {
        '12px': '12px',
        '9px': '9px',
        '16px': '16px',
        '24px': '24px',
        '32px': '32px',
        '6px': '6px',
      },
      borderRadius: {
        'default': '12px',
      },
      borderWidth: {
        '3': '3px',
      },

      width: {
        '1/7': '14.2857143%',
        '2/7': '28.5714286%',
        '3/7': '42.8571429%',
        '4/7': '57.1428571%',
        '5/7': '71.4285714%',
        '6/7': '85.7142857%',
        'app': '85%',
        'card' : '366px',
      },

      colors: {
        textHeadings: 'var(--color-text-headings)',
        textBody: 'var(--color-text-body)',
        textCaption: 'var(--color-text-caption)',
        textDisabled: 'var(--color-text-disabled)',
        textPlaceHolder: 'var(--color-text-placeHolder)',
        textLink: 'var(--color-text-link)',
        textHover: 'var(--color-text-hover)',
        textError: 'var(--color-text-error)',

        cardBg: 'var(--color-deep-0)',

        navBarBg: 'var(--color-deep-100)',

        surfaceBg: 'var(--color-surface-bg)',
        surfaceIconBg: 'var(--color-surface-icon-bg)',
        surfaceOutline: 'var(--color-surface-outline)',

        themeButtonBg: 'var(--color-theme-button-bg)',
        themeButtonBgSecondary: 'var(--color-theme-button-bg-secondary)',
        themeButtonTextPrimary: 'var(--color-deep-0)',
        themeHover: 'var(--color-theme-hover)',
        themePressed: 'var(--color-theme-pressed)',
        themeDark: 'var(--color-theme-dark)',
        themeLight: 'var(--color-theme-light)',

        formBorder: 'var(--color-forms-border)',
        formHoverBorder: 'var(--color-forms-hover-border)',
        formReadOnly: 'var(--color-forms-read-only)',
        formDisabled: 'var(--color-forms-disabled)',
        formActive: 'var(--color-forms-active)',
        formError: 'var(--color-forms-error)',

        dangerBackground: 'var(--color-danger-background)',
        dangerLight: 'var(--color-danger-light)',
        dangerOutline: 'var(--color-danger-outline)',
        dangerIcon: 'var(--color-danger-icon)',
        dangerDark: 'var(--color-danger-dark)',

        successBackground: 'var(--color-success-background)',
        successLight: 'var(--color-success-light)',
        successOutline: 'var(--color-success-outline)',
        successIcon: 'var(--color-success-icon)',
        successDark: 'var(--color-success-dark)',

        infoBackground: 'var(--color-info-background)',
        infoLight: 'var(--color-info-light)',
        infoOutline: 'var(--color-info-outline)',
        infoIcon: 'var(--color-info-icon)',
        infoDark: 'var(--color-info-dark)',

        warningBackground: 'var(--color-warning-background)',
        warningLight: 'var(--color-warning-light)',
        warningOutline: 'var(--color-warning-outline)',
        warningIcon: 'var(--color-warning-icon)',
        warningDark: 'var(--color-warning-dark)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
