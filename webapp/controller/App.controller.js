sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function(Controller) {
    "use strict";

    return Controller.extend("artech-capacitacion-fiori.controller.App", {
        
        onSaludar: function() {
            // 1. Buscamos los elementos por su ID
            const input = this.byId("inputName");
            const texto = this.byId("txtResultado");
            
            // 2. Obtenemos el nombre
            const nombre = input.getValue();

            // 3. Mostramos el saludo (Si no está vacío)
            if (nombre.length > 0) {
                texto.setText("¡Hola, " + nombre + "!");
            } else {
                texto.setText("Por favor, escribí un nombre.");
            }
        }
    });
});