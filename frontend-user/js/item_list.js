categories_container = document.querySelector(".container .items_list .categories")
const token = localStorage.getItem('access_token');

let itm = axios({
    method: "get",
    url: 'http://127.0.0.1:8000/api/v1/all_items',
    headers: { Authorization: `Bearer `+token}
    })

// itm.then(res => {
//     const items_res = res.data.items;
//     // console.log(items_res)
//     // for (let category in items_res) {
//     //     let i=0;
//     //     console.log(category)
//     //     cat = document.createElement('div')
//     //     cat.className = "category"
//     //     let cat_tittle = document.createElement('h3')
//     //     cat_tittle.className = "cat_tittle";
//     //     cat_tittle.textContent = items_res.category.categoryName;
//     //     console.log(items_res.category.categoryName)
//     // }});

    