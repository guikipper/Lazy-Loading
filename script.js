const images = document.querySelectorAll('.img-content img')

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        if (!entry.isIntersecting) return 
         const image = entry.target
         image.src = image.src.replace('&w=10&', '&w=1000&')

         observer.unobserve(image) //Para não ficar observando a imagem que já foi corretamente carregada.
    })
}, {})

images.forEach((image)=>{
    observer.observe(image)
})