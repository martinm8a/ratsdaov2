import React from "react";
import ReactDOM from "react-dom";
/* import "./index.css"; */
import App from "./App";
import {I18nextProvider} from "react-i18next"
import i18next from "i18next"

import global_en from "./translations/en/global.json"
import global_es from "./translations/es/global.json"
/*import datai_en from "./translations/en/DataI"
import datai_es from "./translations/es/DataI"*/

i18next.init({
    interpolation: {escapeValue: false},
    lng: "en",
    resources:{
        en:{
            global: global_en,
        },
        es:{
            global: global_es,
        }
    }
});

ReactDOM.render(
<I18nextProvider i18n={i18next} >
    <App />
</I18nextProvider>, document.getElementById("root"));
