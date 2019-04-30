'use strict';

const LPHelpers = (function() {
    function GetQueryString(a)
    {
        a = a || window.location.search.substr(1).split('&').concat(window.location.hash.substr(1).split('&'));

        if (typeof a === 'string')
            a = a.split('#').join('&').split('&');

        if (!a) 
            return {};

        var b = {};
        for (var i = 0; i < a.length; ++i)
        {
            var p = a[i].split('=');

            if (p.length != 2) continue;

            b[p[0]] = decodeURIComponent(p[1].replace(/\+/g, ' '));
        }
        
        return b;
    }

    const { campanha, semtelaoferta, id_parc, utm_campanha, utm_campaign, utm_midia, utm_medium, utm_origem, utm_source, url_retorno } = GetQueryString();

    const getUtmQueries = (tpl = 'BR') => {
        let str = '';

        const u_origem = utm_origem || utm_source;
        const u_midia = utm_midia || utm_medium;
        const u_campanha = utm_campanha || utm_campaign;

        if(tpl === 'BR') {
            str = `campanha=${campanha}&utm_origem=${u_origem}&utm_midia=${u_midia}&utm_campanha=${u_campanha}&id_parc=${id_parc}&semtelaoferta=${semtelaoferta}&url_retorno=${url_retorno}`;
        } else {
            str = `campanha=${campanha}&utm_source=${u_origem}&utm_medium=${u_midia}&utm_campaign=${u_campanha}&id_parc=${id_parc}&semtelaoferta=${semtelaoferta}&url_retorno=${url_retorno}`;
        }

        return str;
    }

    const addQueryOnLinks = (elSearch = 'a') => { 
        const urlDefault = getUtmQueries();
        const urlInfra = getUtmQueries('IN');

        document.querySelectorAll(elSearch).forEach(function(el) {
            let elLink = el.getAttribute('href');
            let hasHttp = elLink.includes('http');
            let elClass = el.getAttribute('class');
            let isInfracommerce = (elClass) ? elClass.includes('js-utm-is-us') : null;
            let newLink = '';
            
            if (hasHttp) {
                let hasQuery = elLink.includes('?');

                if(isInfracommerce) {
                    newLink = (hasQuery) ? `${elLink}&${urlInfra}`: `${elLink}?${urlInfra}`;
                } else {
                    newLink = (hasQuery) ? `${elLink}&${urlDefault}`: `${elLink}?${urlDefault}`;
                }

                el.setAttribute('href', newLink );
            }
        });
    }
    
    return {
        addQueryOnLinks: addQueryOnLinks
    }
})();