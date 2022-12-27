import React from "react";
import img1 from './component/images/javascript.jpg';
import img2 from './component/images/htmlcss.jpg';
import img3 from './component/images/react.jpg';
import img4 from './component/images/fullStack.jpg';

export const books = [
    {   
        title :'Atomic Habits',
        author :'James Clear',
        img : img1,
        btn: "https://www.amazon.com/ap/signin?_encoding=UTF8&openid.assoc_handle=amazon_checkout_us&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.mode=checkid_setup&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&openid.ns.pape=http%3A%2F%2Fspecs.openid.net%2Fextensions%2Fpape%2F1.0&openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fwww.amazon.com%2Fgp%2Fcheckoutportal%2Fenter-checkout.html%3Fie%3DUTF8%26asin%3D0735211299%26buyNow%3D1%26cartCustomerID%3D0%26fromSignIn%3D1%26fulfillmentType%3D%26isBuyBack%3D%26isGift%3D0%26offeringID%3DyXArqnL5LZJUIexWQheVemaGm30vh9EYgsz8PVq7%25252B1QvlTBJ6dH5uzCpv9qATUpSA0FZ5%25252ByZ%25252BRspm6KrfSCSlJLt40PUQJLrk9L1uggmRaFfAcMhllmcI1IjQDEdPrdDDOr77HjRYjT6KcC%25252Bp4iArQ%25253D%25253D%26pickupAddressId%3D%26pickupStoreChainId%3D%26pickupStoreChainOwnerId%3D%26purchaseInputs%3DHASH%25280x7fdc254cd390%2529%26quantity%3D1%26sessionID%3D130-6768856-7891360&pageId=amazon_checkout_us&showRmrMe=0&siteState=IMBMsgs.&suppressSignInRadioButtons=0",
        description: 'Harness the latest capabilities of HTML5 and CSS to create a single UI that works flawlessly on mobile phones, tablets, and desktops ',
        id: 1,
    },

    {
        title :'Responsive Web Design',
        author :'Ben Frain',
        img : img2,
        btn: 'https://www.amazon.com/ap/signin?_encoding=UTF8&openid.assoc_handle=amazon_checkout_us&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.mode=checkid_setup&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&openid.ns.pape=http%3A%2F%2Fspecs.openid.net%2Fextensions%2Fpape%2F1.0&openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fwww.amazon.com%2Fgp%2Fcheckoutportal%2Fenter-checkout.html%3Fie%3DUTF8%26asin%3D180324271X%26buyNow%3D1%26cartCustomerID%3D0%26fromSignIn%3D1%26fulfillmentType%3D%26isBuyBack%3D%26isGift%3D0%26offeringID%3DE6qwj0X6mnYz9BagqRDpQ5zXdwFODJdzCrnk6PpOkjFUjfwewsWMaMd7je5%25252BaHVxrhR%25252BzwhixlJwBvAPKnRa0FIuBMX5waWRLWbBaqZFpVTlHK080i8iq7YpK%25252BxfeKxPdgMRJW71FGtqcXTsAsk8Zg%25253D%25253D%26pickupAddressId%3D%26pickupStoreChainId%3D%26pickupStoreChainOwnerId%3D%26purchaseInputs%3DHASH%25280x7fae4851bb50%2529%26quantity%3D1%26sessionID%3D130-6768856-7891360&pageId=amazon_checkout_us&showRmrMe=0&siteState=IMBMsgs.&suppressSignInRadioButtons=0',
        description: 'Harness the latest capabilities of HTML5 and CSS to create a single UI that works flawlessly on mobile phones, tablets, and desktops ',
        id: 2,
    },

    {          
        title :'The Road to React',
        author :'Robin Wieruch',
        img : img3,
        btn: 'https://www.amazon.com/ap/signin?_encoding=UTF8&openid.assoc_handle=amazon_checkout_us&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.mode=checkid_setup&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&openid.ns.pape=http%3A%2F%2Fspecs.openid.net%2Fextensions%2Fpape%2F1.0&openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fwww.amazon.com%2Fgp%2Fcheckoutportal%2Fenter-checkout.html%3Fie%3DUTF8%26asin%3D172004399X%26buyNow%3D1%26cartCustomerID%3D0%26fromSignIn%3D1%26fulfillmentType%3D%26isBuyBack%3D%26isGift%3D0%26offeringID%3DsjiJpJHaX1wKDdIO7ObvnU4PPEBK25CJgfHN2xvA988JM5%25252F%25252BheiINDd4obBR51WfqIwpWhP5HMP4Anc%25252F9WxfcoSF%25252BWxifXZAl7S6ea4ZAVwETUbjI58wQdmzF4KBVJLtahZ7u9Md08n1H1puoFWp6A%25253D%25253D%26pickupAddressId%3D%26pickupStoreChainId%3D%26pickupStoreChainOwnerId%3D%26purchaseInputs%3DHASH%25280x7fb3de8d05b0%2529%26quantity%3D1%26sessionID%3D130-6768856-7891360&pageId=amazon_checkout_us&showRmrMe=0&siteState=IMBMsgs.&suppressSignInRadioButtons=0',
        description: 'Harness the latest capabilities of HTML5 and CSS to create a single UI that works flawlessly on mobile phones, tablets, and desktops ',
        id: 3,
    },

    {
        title :'Spring Boot and React',
        author :'Juha Hinkula',
        img : img4,
        description: 'Harness the latest capabilities of HTML5 and CSS to create a single UI that works flawlessly on mobile phones, tablets, and desktops ',
        btn: 'https://www.amazon.com/ap/signin?_encoding=UTF8&openid.assoc_handle=amazon_checkout_us&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.mode=checkid_setup&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&openid.ns.pape=http%3A%2F%2Fspecs.openid.net%2Fextensions%2Fpape%2F1.0&openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fwww.amazon.com%2Fgp%2Fcheckoutportal%2Fenter-checkout.html%3Fie%3DUTF8%26asin%3D1801816786%26buyNow%3D1%26cartCustomerID%3D0%26fromSignIn%3D1%26fulfillmentType%3D%26isBuyBack%3D%26isGift%3D0%26offeringID%3D2KPufF8Hvy4vFQP0IkVZaU3TPb%25252FA0H8nerlz%25252FDCvP1uvoRMRlgk0cQD4FcEGh0CcKglRbi%25252FBZa0O0aWkxmuIvZXuDY9WDMf4nvlFTb4s2%25252B0m9TtNeuorYBcnMoul5xu%25252BeQ8Ej43XOAUas18ZVuwZQw%25253D%25253D%26pickupAddressId%3D%26pickupStoreChainId%3D%26pickupStoreChainOwnerId%3D%26purchaseInputs%3DHASH%25280x7f5048febc70%2529%26quantity%3D1%26sessionID%3D130-6768856-7891360&pageId=amazon_checkout_us&showRmrMe=0&siteState=IMBMsgs.&suppressSignInRadioButtons=0',
        id: 4,
    }
];

 