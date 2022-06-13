categories_container = document.querySelector(".container .items_list .categories")
const token = localStorage.getItem('access_token');
const user_id = localStorage.getItem('user_id');
let array_image = []
let array_item_key = []

let itm = axios({
    method: "get",
    url: 'http://127.0.0.1:8000/api/v1/all_items',
    headers: { Authorization: `Bearer `+token}
    })

itm.then(res => {
    const items_res = res.data.items;
    console.log(items_res)
    for (var cat in items_res) {
        // skip loop if the property is from prototype
        if (!items_res.hasOwnProperty(cat)) continue;

        console.log(cat)
        let categ = document.createElement('div');
        categ.className = "category"

        let cat_tittle = document.createElement('h3')
        cat_tittle.className = "cat_tittle";
        cat_tittle.textContent = cat;

        let items = document.createElement('div');
        items.className = "items"

        categories_container.appendChild(categ)
        categ.appendChild(cat_tittle)
        categ.appendChild(items)

        let item_div = items_res[cat];
        for (var prop in item_div) {
            // skip loop if the property is from prototype
            if (!item_div.hasOwnProperty(prop)) continue;

            let image_wrapper = document.createElement('div');
            image_wrapper.className = "image-wrapper"   

            let item_name = document.createElement('p');
            item_name.className = "item-name"
            item_name.textContent = item_div[prop].item_name;     

            let image = document.createElement('img');
            image.src = "../assets/images/"+item_div[prop].image 
            image.className = "image"

            let price = document.createElement('p');
            price.className = "price" 
            price.textContent = item_div[prop].price
            
            let like = document.createElement('p');
            like.className = "like" 
            like.textContent = '7 Like'

            items.appendChild(image_wrapper)
            image_wrapper.appendChild(item_name)
            image_wrapper.appendChild(image)
            image_wrapper.appendChild(price)
            image_wrapper.appendChild(like)

            console.log(item_div[prop].item_name)
            array_item_key.push(item_div[prop].id)

        }
    }
    let k =0
    console.log(array_item_key)
    console.log(array_item_key[k])
    array_image=Array.from(document.querySelectorAll(".image"))
    console.log(array_image)
    
    for (var fav in array_image){
        console.log(array_image[fav])
    //     //skip prototype 
        if (!array_image.hasOwnProperty(fav)) continue;
        
        item_id = array_item_key[k]
        array_image[fav].addEventListener('dblclick', function (e) {
            var formdata = new FormData();
            formdata.append('user_id',user_id)
            console.log(user_id)
            formdata.append('item_id',item_id)
            console.log(item_id)
            let like = axios({
                method: "post",
                url: 'http://127.0.0.1:8000/api/v1/add_like',
                data: formdata,
                headers: { Authorization: `Bearer `+token}
                }).then(function (response){
                    if (response.data.status == 'success') {
                        alert('like')
                    } else {
                        alert("worng like")
                    }})
          });
          k++
    }
});

    