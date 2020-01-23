import Vue from "nativescript-vue";

import Home from "./components/Home";

Vue.registerElement('PDFView', () => require('nativescript-pdf-view').PDFView)

new Vue({

    template: `
        <Frame>
            <Home />
        </Frame>`,

    components: {
        Home
    }
}).$start();
