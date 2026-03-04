const menus = {
    header: {
       // "Home": "index.html",
       // "Contacts": "#", //contacts.html
       // "About": "#", //about.html
    },
    footer: {
        "О проекте": "#", // about.html
        "Политика конфиденциальности": "privacy.html",
        "Условия использования": "terms.html",
        "Глоссарий": "glossary.html",
        "Карта сайта": "#",// sitemap.html
        "Аватаристика": "avataristika.html"
    },
    menuMaker: function(x) {
        return Object.entries(x).map(([key, value]) => `<a href="${value}">${key}</a>`).join(" | ");
    },
    copyRight: function() {
        const year = new Date().getFullYear();
        return `© ${year} Sensei - Психологические тесты. Все права защищены.`;
    }
}