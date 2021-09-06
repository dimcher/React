const fetchJson = (url, dispatch) => {
    return fetch(url)
        .then(res => res.json())
        .then(data => dispatch(data))
};

export { fetchJson };