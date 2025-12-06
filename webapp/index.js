// sap.ui.define es como importamos dependencias en UI5
sap.ui.define([
    "sap/ui/dom/includeStylesheet" // Importamos herramienta para cargar CSS
], function (includeStylesheet) {
    "use strict";

    // 1. Cargamos tu archivo de estilos
    includeStylesheet("css/styles.css");

    // 2. Creamos la VISTA (View) desde el archivo XML
    sap.ui.core.mvc.XMLView.create({
        viewName: "artech-capacitacion-fiori.view.App" // Busca en carpeta view/App.view.xml
    }).then(function (oView) {
        // 3. Cuando la vista esté lista, la "pegamos" en el body del HTML (id="content")
        oView.placeAt("content");
    });
});