import request from '@/utils/request';

export async function query_port() {
  return request('/api/getport');
}


export async function query(data) {
  //javascript对象转为字符串
  console.log(data)
  var data1=JSON.stringify(data.values)
  return request('/api/getdata',{
    method: 'POST',
    body: data1,
    headers: {
      'content-type':'application/json'
    }
  });

}
