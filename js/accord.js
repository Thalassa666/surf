const openItem = item => {
    const container = item.closest(".team__member");
    const contentBlock = container.find(".team__member-content");
    const textBlock = contentBlock.find(".team__member-content-block");
    const reqHeight = textBlock.height();
    
    container.addClass("active");
    contentBlock.height(reqHeight);
    }

    const closeEveryItem = container => {
        const items = container.find('.team__member-content');
        const itemContainer = container.find('.team__member');

        itemContainer.removeClass("active");
        items.height(0);
    }
    
    $('.team__member-link').click(e => {
    const $this = $(e.currentTarget);
    const container = $this.closest('.team__list');
    const elemContainer = $this.closest('.team__member');
    

    if (elemContainer.hasClass("active")) {
        closeEveryItem(container);
    } else {
        closeEveryItem(container);
        openItem($this);
    }

    });