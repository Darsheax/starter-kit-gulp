let header = document.querySelector('header')

if(header){

    if(document.querySelector('.homepage')){
        window.addEventListener('scroll', (e) => {
        })
    }

    let logo = document.querySelector('.logo')

    logo.addEventListener('mouseenter', (e) => {
        logo.src = "/wp-content/uploads/theme/logo-line-colors.png"
    })

    logo.addEventListener('mouseleave', (e) => {
        logo.src = "/wp-content/uploads/theme/logo-line.png"
    })

}