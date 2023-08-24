import Layout from "../../components/layout";
export default function Product(){
    const handleSubmit =async(event)=>{
        event.preventDefault();
        const data = {
            name: event.target.name.value,
            description: event.target.description.value,
            price: event.target.price.value,
            instockQuantity: event.target.instockQuantity.value,
          }
          const JSONdata = JSON.stringify(data);
          const endpoint = '/api/product'
          const options = {
            // The method is POST because we are sending data.
            method: 'POST',
            // Tell the server we're sending JSON.
            headers: {
              'Content-Type': 'application/json',
            },
            // Body of the request is the JSON data we created above.
            body: JSONdata,
          }
          const response = await fetch(endpoint, options)
          const result = await response.json()
        alert("保存成功！")
    }
    return (
        <Layout home={false}>
            <div>添加产品</div>
            <form onSubmit={handleSubmit}>
            <label htmlFor="name">产品名称</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="description">产品描述</label>
            <textarea  id="description" name="description" required />
        
            <label htmlFor="price">价格</label>
            <input type="number" id="price" name="price" required />
        
            <label htmlFor="instockQuantity">质量</label>
            <input type="number" id="instockQuantity" name="instockQuantity" required />

            <button type="submit">提交</button>
            </form>
        </Layout>
    );
}