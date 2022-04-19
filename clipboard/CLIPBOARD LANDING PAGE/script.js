const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
    reset: true
})

scrollReveal.reveal(
    `#header .header_logo, #header .header_text,
    #header .buttons, #details .details_text, 
    #details .details_container, #more .more_text, 
    #more .more_image, #workflow .workflow_text, 
    #workflow .workflow_cards, #brand-logos .brand-logos_container,
    #clipboard .clipboard_text,#clipboard .buttons,
    #footer .footer_container
    `, { interval: 100 }
)