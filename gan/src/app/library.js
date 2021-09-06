const fetchJson = (url, dispatch) => {
    return fetch(url)
        .then(res => res.json())
        .then(data => {
            const date = new Date();
            const year = date.getFullYear() + 1;
            const next = new Date(year, 0, 1);

            const list = data.results.filter(item => {
                const date = new Date(item.release_date);
                return (item.original_language === 'en' && date < next)
            });
//            console.log(list);
            data.results = list;
            dispatch(data);
        })
};

export { fetchJson };