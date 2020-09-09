import request from '@/utils/request';

export async function query(data) {
  console.log(data);
  var data1 =JSON.stringify(data)
//  console.log(data1)
  return request('/api/querySettings',{
    method: 'POST',
    body: data1,
    headers : {
      'content-type':'application/json'
    }
  });
}
