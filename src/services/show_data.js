import request from '@/utils/request';


export async function query(data) {
  //javascript对象转为字符串
  var data1=JSON.stringify(data.value)
  console.log(data1)
  return request('/api/showdata',{
    method: 'POST',
    body: data1,
    headers: {
      'content-type':'application/json'
    }
  });

}
