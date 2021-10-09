$(document).ready(function () {

    const typeSelect = () => {
        const element = document.querySelector('.compare__type-choice-s');
        const choices = new Choices(element, {
            searchEnabled: false,
            itemSelectText: ""
            });
    
    };
    
    typeSelect();
    if ($(window).width() <= '690   '){
        let lines = $(".compare__main-info-line");
        lines.each(function (index, element) {
            let products = $(this).find(".compare__product");
            let leftInfo = $(this).find(".compare__left-info");
            let stitle = $(this).find(".compare__left-info-subtitle").clone()
            for(let i =1; i< products.length; i++)
                stitle.clone().appendTo(leftInfo)
        });
    }

    let blocks = $(".compare__main-info-block");

    blocks.each(function(){
        let close = $(this).find(".compare__block-close");
        let block = $(this)
        let lines = block.find(".compare__main-info-line");
        let state = 0
        close.click(function(){
            if (state === 0){
                state = 1

                close.addClass("closed")
                block.find(".compare__main-products-info").addClass("no-vis")
                lines.each(function (index) {
                    if (index>0)
                        $(this).addClass("no-vis")
                })
            }
            else{
                state = 0

                close.removeClass("closed")

                block.find(".compare__main-products-info").removeClass("no-vis")
                lines.each(function (index) {
                    if (index>0)
                        $(this).removeClass("no-vis")
                })
            }
        })
    })

})