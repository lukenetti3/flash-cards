

  useEffect(() => {
    var slideIndex = 1
      dispSlides(slideIndex)

      function nextSlide(n) {
        dispSlides(slideIndex += n)
      }

      function dispSlides(n) {
        const allCards = document.getElementsByClassName("single-card")
        if(n > allCards.length) {
          slideIndex = 1
        }
        if(n < 1) {
          slideIndex = allCards.length
        }

        for (var i = 0; i < allCards.length; i++) {
          allCards[i].style.display = "none"
        }
        console.log(allCards)
      }
  },[])
