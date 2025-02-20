sequenceDiagram
participant user
participant browser
participant server

    user->>browser: Escribir una nueva nota en el input
    user->>browser: Hacer click en el botón de submit

    Note right of browser: JavaScript intercepta el evento submit y previene la recarga con preventDefault

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    server-->>browser: 201 Created (sin redirección) (ya que es una spa)
    deactivate server

    Note right of browser: La nota se agrega a la lista en el cliente sin recargar la página
