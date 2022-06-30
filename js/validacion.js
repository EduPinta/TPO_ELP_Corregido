// 4_contacto - Validación del Formulario
$().ready(function () {
    var validate = $("#info").validate({
        rules: {
            nombre: {
                required: true,
            },
            apellido: {
                required: true,
                minlength: 3,
            },
            email: {
                required: true,
                email: true
            },
            telefono: {
                required: true,
                digits: true,
                minlength: 10,
            },
        },
        messages: {
            nombre: {
                required: "Es necesario ingresar tu Nombre",
            },
            apellido: {
                required: "Es necesario ingresar tu Apellido",
                minlength: "Debés ingresar al menos 3 letras",
            },
            email: {
                required: "Es necesario ingresar un email",
                email: "Debe ser un email válido",
            },
            telefono: {
                required: "Es necesario especificar un número de teléfono",
                digits: "Sólo se podrán ingresar dígitos",
                minlength: "Debés ingresar al menos 10 dígitos",
            },
        },
    });

    $("#cancel").on("click", function (e) {
        e.preventDefault();
        validate.resetForm();
        $("#info").get(0).reset();
    });
});