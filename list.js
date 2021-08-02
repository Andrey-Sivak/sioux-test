(function () {
    if (!document.querySelector('.page-lists')) {
        return;
    }

    const lists = [...document.querySelector('.page-lists').children];

    lists.forEach(l => {
        const list = l.querySelector('.page-list__body');
        const items = [...list.children];
        const listHeader = l.querySelector('.page-list__header');

        listHeader.addEventListener('click', function (e) {
            const h = listHeight(items);
            showList(this, h);
        });
    });

    function showList(self, height) {
        if (self.parentElement.classList.contains('active')) {
            self.parentElement.classList.remove('active');
            self.parentElement
                .querySelector('.page-list__body')
                .style.maxHeight = `0px`;

            return;
        }

        self.parentElement.classList.add('active');
        self.parentElement
            .querySelector('.page-list__body')
            .style.maxHeight = `${height}px`;
    }
    
    function listHeight(items) {
        const itemsLength = items.length;
        let half = Math.ceil(itemsLength / 2);

        return half * 24;
    }

})();